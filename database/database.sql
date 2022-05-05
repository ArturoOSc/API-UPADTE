CREATE DATABASE updatetask;

CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO task (name, email) VALUES
    ('joe', 'joe@gmail.com'),
    ('ryan', 'jryan@gmail.com');