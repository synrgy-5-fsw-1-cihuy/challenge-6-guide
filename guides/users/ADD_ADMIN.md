# Add Admin Feature

**Add Admin**

A superadmin can add a new admin or maybe can manage user roles.

- URL: /users/role
- Method: POST

## How to create an add admin feature

1. Create a new route in `routes/users.js` or `routes/index.js` if you want to use the default route:

```js
router.post("/users/role", UserController.addAdmin);
```

2. Create a new controller in `controllers/UserController.js`:

```js
const UserService = require('../services/UserService')

const addAdmin = (req, res, next)=> {
    try {
      const { email } = req.body

      const user = await UserService.addAdmin({ email })
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/UserService.js`:

```js
const UserRepository = require("../repositories/UserRepository");

const addAdmin = async ({ email }) => {
  const user = await UserRepository.findByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const role = "admin";

  await UserRepository.updateRole(email, role);
};
```

4. Create a new repository in `repositories/UserRepository.js`:

```js
const User = require("../models/User");

const updateRole = async (email, role) => {
  try {
    const user = await User.update({ role }, { where: { email } });

    return user;
  } catch (err) {
    throw err;
  }
};
```
