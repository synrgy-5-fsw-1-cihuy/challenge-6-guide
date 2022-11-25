# Get By ID Feature

**Get Car By Id**

Admin, superadmin, and member can get car by id.

- URL: /cars/:id
- Method: GET

## How to create a get car by id feature

1. Create a new route in `routes/cars.js` or `routes/index.js` if you want to use the default route:

```js
router.get("/cars/:id", CarController.getCarById);
```

2. Create a new controller in `controllers/CarController.js`:

```js
const CarService = require("../services/CarService");

const getCarById = async (req, res, next) => {
  try {
    const car = await CarService.getCarById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
};
```

3. Create a new service in `services/CarService.js`:

```js
const CarRepository = require("../repositories/CarRepository");

const getCarById = async (id) => {
  const car = await CarRepository.getCarById(id);

  return car;
};
```

4. Create a new repository in `repositories/CarRepository.js`:

```js
const Car = require("../models/Car");

const getCarById = async (id) => {
  try {
    const car = await Car.findByPk(id);

    return car;
  } catch (err) {
    throw err;
  }
};
```
