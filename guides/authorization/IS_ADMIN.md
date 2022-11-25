# Is User Authorized

## Description

This authorization checks if the user is authorized to access the resource.

## Check User by JWT Token

The JWT token is stored in the `Authorization` header. The token is a Base64 encoded string. The first part of the token is the header, the second part is the payload and the third part is the signature. The payload contains the user id and the user roles.

Create middleware in `middlewares/authorization.js`:

```js
const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const allowed = ["admin", "superadmin"];
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userRoles = decodedToken.roles;

    if (userRoles.some((role) => allowed.includes(role))) {
      next();
    } else {
      res.status(401).json({
        error: new Error("Invalid request!"),
      });
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};
```

## Add Authorization to Route

Add the authorization to the route in `routes/index.js`:

```js
const { isAdmin } = require("../middlewares/authorization");

router.xxx("/cars/xxx", isAdmin, CarController.xxx);
router.xxx("/cars/xxx", isAdmin, CarController.xxx);
router.xxx("/cars/xxx", isAdmin, CarController.xxx);
```
