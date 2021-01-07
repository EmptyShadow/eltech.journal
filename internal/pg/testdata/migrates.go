//+build integration

package testdata

const (
	Up = `
BEGIN TRANSACTION;

INSERT INTO users (id, email, pwd, first_name, middle_name, last_name)
VALUES ('122444a2-50f5-11eb-ae93-0242ac130002', 'user1@email.com', 'long hash', 'first name', 'middle name', 'last name');

INSERT INTO users (id, email, pwd, first_name, middle_name, last_name)
VALUES ('354f8220-50f5-11eb-ae93-0242ac130002', 'user2@email.com', 'long hash 2', 'first name 2', 'middle name 2', 'last name 2');

INSERT INTO users (id, email, pwd, first_name, middle_name, last_name)
VALUES ('40639e44-50f5-11eb-ae93-0242ac130002', 'user3@email.com', 'long hash 3', 'first name 3', 'middle name 3', 'last name 3');

INSERT INTO users (id, email, pwd, first_name, middle_name, last_name)
VALUES ('49c4d156-50f5-11eb-ae93-0242ac130002', 'user4@email.com', 'long hash 4', 'first name 4', 'middle name 4', 'last name 4');

COMMIT TRANSACTION;
`

	Down = `
BEGIN TRANSACTION;

DELETE FROM sessions;
DELETE FROM users;

COMMIT TRANSACTION;
`
)

var (
	Users = []string{
		"122444a2-50f5-11eb-ae93-0242ac130002", "354f8220-50f5-11eb-ae93-0242ac130002",
		"40639e44-50f5-11eb-ae93-0242ac130002", "49c4d156-50f5-11eb-ae93-0242ac130002",
	}
)
