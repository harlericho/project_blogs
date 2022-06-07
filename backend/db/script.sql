CREATE TABLE blogs (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    autor varchar(255) NOT NULL,
    content text NULL
);