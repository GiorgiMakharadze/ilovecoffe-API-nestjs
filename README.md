# Project Title

## NestJS Coffee API

## Description

This repository contains a fully-featured API developed using NestJS framework. The API demonstrates common features and best practices when using NestJS for building efficient, reliable and scalable server-side applications.

## Features

1. The API provides features to create, read, update, and delete coffee resources, demonstrating how to implement standard CRUD operations in a RESTful API using NestJS. Here are some highlights:

2. Controllers and Providers: Demonstrates the usage of controllers and providers in NestJS, which are fundamental building blocks of a NestJS app.

3. Middleware: Demonstrates how to use middleware for handling the processing of requests and responses.

4. Exception Filters: Implements custom exception handling using filters.

5. Pipes: Uses validation pipes for validating incoming requests.

6. Interceptors: Demonstrates the usage of interceptors to transform the data being returned from route handlers.

7. Guards: Implements guards for handling authorization.

8. Swagger API Documentation: The API is fully documented with Swagger OpenAPI.

9. TypeORM and PostgreSQL: Uses TypeORM for handling database operations and PostgreSQL as the database.

10. Entity Relationships: Demonstrates the usage of TypeORM for managing entity relationships (ManyToMany, OneToMany etc.).

## Used technologies

1. NestJS
2. TypeORM
3. PostgreSQL
4. Swagger

## Getting Started

1. Clone the repository
2. Install dependencies with npm install
3. Start your Postgres database
4. Run the API with npm run start

Navigate to `http://localhost:3000/api` to view the Swagger API documentation.

### Environment Variables

```bash
DATABASE_USER=Your database user name
DATABASE_PASSWORD=Your database password
DATABASE_NAME=Your database
DATABASE_PORT=Your database port
DATABASE_HOST=Your database host
API_KEY=An API key for secure endpoints.
```
