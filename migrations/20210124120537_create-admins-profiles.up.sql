BEGIN TRANSACTION;

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'profile_status') THEN
            CREATE TYPE profile_status AS ENUM ('on_validate', 'active', 'disable', 'blocked');
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS admins_profiles
(
    user_id             uuid                     not null unique,
    contact_information text                     not null,
    status              profile_status           not null default 'on_validate',
    block_reason        text,
    created_at          timestamp with time zone not null default now(),
    updated_at          timestamp with time zone,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id)
);

COMMIT TRANSACTION;