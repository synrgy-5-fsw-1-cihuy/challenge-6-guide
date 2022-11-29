# Authorization

After creating authentication feature using JWT, we can create authorization feature. Authorization is a process of giving access to a user based on their role. For example, a superadmin can add a new admin or maybe can manage user roles. But a member can't do that. So we need to create middleware for authorization.

## Authorization Flow

The authorization flow is as follows:

1. The user sends a request to the server with their token in the `Authorization` header.
2. The server verifies the token and responds with the appropriate data.

## Adding Authorization to Routes

We can add authorization to the routes by adding middleware to the routes.

```js
const { isAdmin } = require("../middleware/auth");

router.xxx("/xxx", isAdmin, xxx);
```

The `isAdmin` middleware will check the user role. If the user role is not in the list of roles, it will return an error.
