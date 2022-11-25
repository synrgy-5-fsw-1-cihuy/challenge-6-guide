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

## How do I add a new route to the application?

1. Create a new route in the `src/routes/index.js` file.
2. Create a new controller in the `src/controllers` folder and add it to the `src/routes/index.js` file.

## How do I add a new controller to the application?

1. Create a new file in the `src/controllers` folder. The name of the file should be the name of the controller. For example, if the controller is `UserController`, the name of the file should be `user.js`.
2. Import the controller in the `src/routes` file and add it to the route.

## How do I add a new service to the application?

1. Create a new file in the `src/services` folder. The name of the file should be the name of the service. For example, if the service is `UserService`, the name of the file should be `user.js`.
2. Import the service in the `src/controllers` file and add it to the controller.

## How do I add a new repository to the application?

1. Create a new file in the `src/repositories` folder. The name of the file should be the name of the repository. For example, if the repository is `UserRepository`, the name of the file should be `user.js`.
2. Import the repository in the `src/services` file and add it to the service.

## How do I add a new model to the application?

1. Generate a new model using the `sequelize-cli` tool by running the following command:

```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
```

2. It will generate a new file in the `src/database/models` folder. The name of the file should be the name of the model. For example, if the model is `User`, the name of the file should be `user.js`.
3. Import the model in the `src/repositories` file and add it to the repository.

## How do I add a new middleware to the application?

1. Create a new file in the `src/middlewares` folder. The name of the file should be the name of the middleware. For example, if the middleware is `AuthMiddleware`, the name of the file should be `auth.js`.
2. Import the middleware in the `src/routes` file and add it to the route.
