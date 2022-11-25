# Get All Car Feature

**Get All Cars**

Admin, superadmin, and member can get all cars.

- URL: /cars
- Method: GET

## How to create a get all car feature

1. Create a new route in `routes/cars.js` or `routes/index.js` if you want to use the default route:

```js
router.get("/cars", CarController.getAllCars);
```

2. Create a new controller in `controllers/CarController.js`:

```js
const CarService = require("../services/CarService");

const getAllCars = async (req, res, next) => {
  try {
    const cars = await CarService.getAllCars();
    res.status(200).json(cars);
  } catch (err) {
    next(err);
  }
};
```

3. Create a new service in `services/CarService.js`:

```js
const CarRepository = require("../repositories/CarRepository");

const getAllCars = async () => {
  const cars = await CarRepository.getAllCars();

  return cars;
};
```

4. Create a new repository in `repositories/CarRepository.js`:

```js
const Car = require("../models/Car");

const getAllCars = async () => {
  try {
    const cars = await Car.findAll();

    return cars;
  } catch (err) {
    throw err;
  }
};
```
