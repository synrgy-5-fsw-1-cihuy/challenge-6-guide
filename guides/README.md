# Guide

## Application Workflow

The application workflow is as follows:

1. The server starts and loads the environment variables.
2. The server creates the express app and configures it.
3. The server starts listening for requests.
4. The app receives a request.
5. The app finds the route that matches the request.
6. The app executes the route handler.
7. The route handler executes the controller.
8. The controller executes the service.
9. The service filters the request data and executes the repository method.
10. The repository executes the database query.
11. The database returns the result of the query.
12. The repository returns the result to the service.
13. The service filters the result and returns it to the controller.
14. The controller returns the result using the response object to the app.
15. The app sends the response to the client.

# Guidelines

Not all of the requirements must be implemented. You can choose which one you want to implement. You can also add more features if you want. The important thing is that you can explain your code and the features you have implemented.

## Notes

- Use Express for framework
- Use Sequelize for ORM
- Use PostgreSQL for database
- Use JWT (jsonwebtoken) for authentication
- Use bcrypt for hashing password
- Create OpenAPI documentation using Swagger

## Authentication and Authorization

- Create authentication feature using JWT
- Create middleware for authentication
- Create middleware for authorization
- Add authentication and authorization to the routes

## Models

### User

- id
- name
- email
- password
- role
- createdAt
- updatedAt

### Car

- id
- name
- price / cost / cost per day
- available
- capacity
- etc, use your imagination or case in the previous challenge

## API Documentation

### User

**Register**

A user can register as a member.

- URL: /auth/register
- Method: POST

**Login**

A user can login as superadmin, admin, or member.

- URL: /auth/login
- Method: POST

**Add Admin**

A superadmin can add a new admin or maybe can manage user roles.

- URL: /users/role
- Method: POST

**Get Current User**

Get current user profile from token.

- URL: /users/me
- Method: GET

### Cars

**Add Car**

Admin and superadmin can add new car.

- URL: /cars
- Method: POST

**Update Car**

Admin and superadmin can update car.

- URL: /cars/:id
- Method: PUT

**Delete Car**

Admin and superadmin can delete car.

- URL: /cars/:id
- Method: DELETE

**Get All Cars**

Admin, superadmin, and member can get all cars.

- URL: /cars
- Method: GET

**Get Car By Id**

Admin, superadmin, and member can get car by id.

- URL: /cars/:id
- Method: GET
