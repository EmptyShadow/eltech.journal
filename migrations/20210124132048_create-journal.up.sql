BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS journals
(
    id                    serial PRIMARY KEY,
    teacher_id            uuid                     NOT NULL,
    students_group_number integer                  NOT NULL,
    study_plan_id         integer                  NOT NULL,
    valid_until           timestamp with time zone NOT NULL,

    CONSTRAINT fk_teacher
        FOREIGN KEY (teacher_id)
            REFERENCES teachers_profiles (user_id),
    CONSTRAINT fk_students_group
        FOREIGN KEY (students_group_number)
            REFERENCES students_groups (number),
    CONSTRAINT fk_study_plan
        FOREIGN KEY (study_plan_id)
            REFERENCES study_plans (id)
);

CREATE TABLE IF NOT EXISTS journal_items
(
    id          serial PRIMARY KEY,
    journal_id  integer                  NOT NULL,
    student_id  integer                  NOT NULL,
    deadline_at timestamp with time zone NOT NULL,
    is_done     boolean                  NOT NULL DEFAULT false,
    mark        int2,

    CONSTRAINT fk_journal
        FOREIGN KEY (journal_id)
            REFERENCES journals (id)
);

CREATE TABLE IF NOT EXISTS journal_item_results
(
    id              serial PRIMARY KEY,
    journal_item_id integer NOT NULL,
    result          text    NOT NULL,
    created_at      timestamp with time zone,

    CONSTRAINT fk_journal_item
        FOREIGN KEY (journal_item_id)
            REFERENCES journal_items (id)
);

CREATE TABLE IF NOT EXISTS journal_item_result_comment
(
    id                     serial PRIMARY KEY,
    author_id              uuid                     NOT NULL,
    journal_item_result_id integer                  NOT NULL,
    text                   text                     NOT NULL,
    created_at             timestamp with time zone NOT NULL DEFAULT now(),
    updated_at             timestamp with time zone,

    CONSTRAINT fk_author
        FOREIGN KEY (author_id)
            REFERENCES users (id),
    CONSTRAINT fk_journal_item_result
        FOREIGN KEY (journal_item_result_id)
            REFERENCES journal_item_results (id)
);

COMMIT TRANSACTION;