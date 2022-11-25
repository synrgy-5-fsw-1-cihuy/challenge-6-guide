# Is User Authenticated

## Description

This authorization checks if the user is logged in.

## Check User by JWT Token

The JWT token is stored in the `Authorization` header. The token is a Base64 encoded string. The first part of the token is the header, the second part is the payload and the third part is the signature. The payload contains the user id and the user roles.

Create middleware in `middlewares/authorization.js`:

```js
const jwt = require("jsonwebtoken");

const isUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken) {
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
const { isUser } = require("../middlewares/authorization");

router.xxx("/cars/xxx", isUser, CarController.xxx);
router.xxx("/cars/xxx", isUser, CarController.xxx);
```
