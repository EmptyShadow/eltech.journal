BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS sessions
(
    id         uuid PRIMARY KEY                  DEFAULT uuid_generate_v4(),
    user_id    uuid                     NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    closed_at  timestamp with time zone,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id)
);

COMMIT TRANSACTION;