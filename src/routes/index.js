const { Router } = require("express");
const ExampleController = require("../controllers/example");

const router = Router();

router.post("/register", ExampleController.register);
router.post("/login", ExampleController.login);

module.exports = router;
