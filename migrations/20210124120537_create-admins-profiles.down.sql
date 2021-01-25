BEGIN TRANSACTION;

DROP TABLE IF EXISTS admins_profiles;

DO
$$
    BEGIN
        IF EXISTS(SELECT 1 FROM pg_type WHERE typname = 'profile_status') THEN
            DROP TYPE profile_status;
        END IF;
    END
$$;

COMMIT TRANSACTION;