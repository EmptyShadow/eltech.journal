BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS faculties (
    id serial PRIMARY KEY,
    name varchar(256) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS students_groups (
    number integer PRIMARY KEY UNIQUE NOT NULL,
    faculty_id integer NOT NULL,

    CONSTRAINT fk_faculty
        FOREIGN KEY (faculty_id)
            REFERENCES faculties (id)
);

CREATE TABLE IF NOT EXISTS posts (
    id serial PRIMARY KEY,
    name varchar(256) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS academic_degrees (
    id serial PRIMARY KEY,
    name varchar(256) NOT NULL UNIQUE
);

COMMIT TRANSACTION;