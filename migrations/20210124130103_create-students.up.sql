BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS students_profiles
(
    student_card_id       integer                  NOT NULL PRIMARY KEY,
    user_id               uuid                     NOT NULL UNIQUE,
    students_group_number integer                  NOT NULL,
    status                profile_status           not null default 'on_validate',
    block_reason          text,
    created_at            timestamp with time zone not null default now(),
    updated_at            timestamp with time zone,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id),
    CONSTRAINT fk_students_group
        FOREIGN KEY (students_group_number)
            REFERENCES students_groups (number)
);

COMMIT TRANSACTION;