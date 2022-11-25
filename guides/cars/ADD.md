# Add Car Feature

**Add Car**

Admin and superadmin can add new car.

- URL: /cars
- Method: POST

**Update Car**

## How to create an add car feature

1. Create a new route in `routes/cars.js` or `routes/index.js` if you want to use the default route:

```js
router.post("/cars", CarController.addCar);
```

2. Create a new controller in `controllers/CarController.js`:

```js
const CarService = require('../services/CarService')

const addCar = (req, res, next)=> {
    try {
      const { name, price, available, capacity } = req.body

      if (!name || !price || !available || !capacity) {
        throw new Error("Please fill all the fields");
      }


      const car = await CarService.addCar({ name, price, available, capacity })
      res.status(201).json(car)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/CarService.js`:

```js
const CarRepository = require("../repositories/CarRepository");

const addCar = async ({ name, price, available, capacity }) => {
  const car = await CarRepository.createCar({
    name,
    price,
    available,
    capacity,
  });

  return car;
};
```

4. Create a new repository in `repositories/CarRepository.js`:

```js
const Car = require("../models/Car");

const createCar = async ({ name, price, available, capacity }) => {
  const car = await Car.create({ name, price, available, capacity });

  return car;
};
```
