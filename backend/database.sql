    CREATE DATABASE employee

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    service VARCHAR(255) NOT NULL,
    budget VARCHAR(255) NOT NULL
);