BEGIN TRANSACTION;

DROP TABLE IF EXISTS study_plan_items;

DO
$$
    BEGIN
        IF NOT EXISTS(SELECT 1 FROM pg_type WHERE typname = 'study_plan_item_type') THEN
            DROP TYPE study_plan_item_type;
        END IF;
    END
$$;

DROP TABLE IF EXISTS study_plans;

COMMIT TRANSACTION;