# Get Current User Feature

**Get Current User**

Get current user profile from token.

- URL: /users/me
- Method: GET

## How to create a get current user feature

1. Create a new route in `routes/users.js` or `routes/index.js` if you want to use the default route:

```js
router.get("/users/me", UserController.getCurrentUser);
```

2. Create a new controller in `controllers/UserController.js`:

```js
const UserService = require('../services/UserService')

const getCurrentUser = (req, res, next)=> {
    try {
      const user = await UserService.getCurrentUser(req.user)
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/UserService.js`:

```js
const UserRepository = require("../repositories/UserRepository");

const getCurrentUser = async (user) => {
  const currentUser = await UserRepository.findById(user.id);

  if (!currentUser) {
    throw new Error("User not found");
  }

  return currentUser;
};
```
