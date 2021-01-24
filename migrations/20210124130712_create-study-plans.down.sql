BEGIN TRANSACTION;

DROP TABLE IF EXISTS study_plan_items;

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'profile_status') THEN
            CREATE TYPE study_plan_item_type AS ENUM ('abstract', 'report', 'laboratory work', 'term paper', 'practical work');
        END IF;
    END
$$;

DROP TABLE IF EXISTS study_plans;

COMMIT TRANSACTION;