# Register Feature

**Register**

A user can register as a member.

- URL: /auth/register
- Method: POST

## How to create a register feature

1. Create a new route in `routes/auth.js` or `routes/index.js` if you want to use the default route:

```js
router.post("/auth/register", AuthController.register);
```

2. Create a new controller in `controllers/AuthController.js`:

```js
const AuthService = require('../services/AuthService')

const register = (req, res, next)=> {
    try {
      const { name, email, password } = req.body

      const user = await AuthService.register({ name, email, password })

      res.status(201).json(user)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/AuthService.js`:

```js
const UserRepository = require("../repositories/UserRepository");

const register = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required");
  }

  const user = await UserRepository.findByEmail(email);

  if (user) {
    throw new Error("Email is already registered");
  }

  const newUser = await UserRepository.create({ name, email, password });

  return newUser;
};
```

4. Create a new repository in `repositories/UserRepository.js`:

```js
const { User } = require("../models");

const createUser = async ({ name, email, password }) => {
  try {
    const user = await User.create({ name, email, password });

    return user;
  } catch (err) {
    throw err;
  }
};
```
