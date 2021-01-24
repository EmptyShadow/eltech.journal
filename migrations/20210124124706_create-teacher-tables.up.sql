BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS teachers_profiles
(
    user_id            uuid                     NOT NULL UNIQUE,
    academic_degree_id integer,
    status             profile_status           not null default 'on_validate',
    block_reason       text,
    created_at         timestamp with time zone not null default now(),
    updated_at         timestamp with time zone,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id),
    CONSTRAINT fk_academic_degree
        FOREIGN KEY (academic_degree_id)
            REFERENCES academic_degrees (id)
);

CREATE TABLE IF NOT EXISTS teacher_profile_faculties
(
    teacher_id uuid    NOT NULL,
    faculty_id integer NOT NULL,

    CONSTRAINT fk_teacher
        FOREIGN KEY (teacher_id)
            REFERENCES teachers_profiles (user_id),
    CONSTRAINT fk_faculty
        FOREIGN KEY (faculty_id)
            REFERENCES faculties (id)
);

CREATE TABLE IF NOT EXISTS teacher_profile_posts
(
    teacher_id uuid    NOT NULL,
    post_id    integer NOT NULL,

    CONSTRAINT fk_teacher
        FOREIGN KEY (teacher_id)
            REFERENCES teachers_profiles (user_id),
    CONSTRAINT fk_post
        FOREIGN KEY (post_id)
            REFERENCES posts (id)
);

CREATE TABLE IF NOT EXISTS teacher_profile_disciplines
(
    teacher_id    uuid    NOT NULL,
    discipline_id integer NOT NULL,

    CONSTRAINT fk_teacher
        FOREIGN KEY (teacher_id)
            REFERENCES teachers_profiles (user_id),
    CONSTRAINT fk_discipline
        FOREIGN KEY (discipline_id)
            REFERENCES disciplines (id)
);

COMMIT TRANSACTION;