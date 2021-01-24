BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS study_plans
(
    id            serial PRIMARY KEY,
    discipline_id integer      NOT NULL,
    name          varchar(256) NOT NULL UNIQUE,
    description   text         NOT NULL,

    CONSTRAINT fk_discipline
        FOREIGN KEY (discipline_id)
            REFERENCES disciplines (id)
);

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'profile_status') THEN
            CREATE TYPE study_plan_item_type AS ENUM ('abstract', 'report', 'laboratory work', 'term paper', 'practical work');
        END IF;
    END
$$;

CREATE TABLE IF NOT EXISTS study_plan_items
(
    id            serial PRIMARY KEY,
    study_plan_id integer                  NOT NULL,
    name          varchar(256)             NOT NULL,
    type          study_plan_item_type     NOT NULL,
    description   text                     NOT NULL,
    created_at    timestamp with time zone NOT NULL DEFAULT now(),
    updated_at    timestamp with time zone,

    CONSTRAINT fk_study_plan
        FOREIGN KEY (study_plan_id)
            REFERENCES study_plans (id)
);

COMMIT TRANSACTION;