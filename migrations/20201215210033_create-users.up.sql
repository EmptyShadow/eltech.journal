BEGIN TRANSACTION;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
    WITH SCHEMA public CASCADE;

CREATE TABLE IF NOT EXISTS users
(
    id          uuid PRIMARY KEY                  DEFAULT uuid_generate_v4(),
    email       text                     NOT NULL,

    first_name  text                     NOT NULL,
    middle_name text,
    last_name   text                     NOT NULL,

    created_at  timestamp with time zone NOT NULL DEFAULT now(),
    updated_at  timestamp with time zone,
    deleted_at  timestamp with time zone
);

CREATE UNIQUE INDEX IF NOT EXISTS users_email_idx ON users (email);
CREATE INDEX IF NOT EXISTS users_first_name_idx ON users (first_name);
CREATE INDEX IF NOT EXISTS users_middle_name_idx ON users (middle_name);
CREATE INDEX IF NOT EXISTS users_last_name_idx ON users (last_name);

COMMIT TRANSACTION;