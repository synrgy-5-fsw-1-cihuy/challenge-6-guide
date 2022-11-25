# Login Feature

**Login**

A user can login as superadmin, admin, or member.

- URL: /auth/login
- Method: POST

## How to create a login feature

1. Create a new route in `routes/auth.js` or `routes/index.js` if you want to use the default route:

```js
router.post("/auth/login", AuthController.login);
```

2. Create a new controller in `controllers/AuthController.js`:

```js
const AuthService = require('../services/AuthService')

const login = (req, res, next)=> {
    try {
      const { email, password } = req.body
      const user = await AuthService.login({ email, password })
      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/AuthService.js`:

```js
const UserRepository = require("../repositories/UserRepository");

const login = async ({ email, password }) => {
  const user = await UserRepository.findByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    throw new Error("Password is not match");
  }

  const token = await user.generateToken();

  return { user, token };
};
```

4. Create a new repository in `repositories/UserRepository.js`:

```js
const { User } = require("../models");

const findByEmail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });

    return user;
  } catch (err) {
    throw err;
  }
};
```
