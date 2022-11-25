# Update Car Feature

**Update Car**

Admin and superadmin can update car.

- URL: /cars/:id
- Method: PUT

## How to create an update car feature

1. Create a new route in `routes/cars.js` or `routes/index.js` if you want to use the default route:

```js
router.put("/cars/:id", CarController.updateCar);
```

2. Create a new controller in `controllers/CarController.js`:

```js
const CarService = require('../services/CarService')

const updateCar = (req, res, next)=> {
    try {
      const { name, price, available, capacity } = req.body

      const car = await CarService.updateCar(req.params.id, { name, price, available, capacity })
      res.status(200).json(car)
    } catch (err) {
      next(err)
    }
}
```

3. Create a new service in `services/CarService.js`:

```js
const CarRepository = require("../repositories/CarRepository");

const updateCar = async (id, { name, price, available, capacity }) => {
  if (!name && !price && !available && !capacity) {
    throw new Error("Please fill at least one field");
  }

  const carExists = await CarRepository.getCarById(id);

  if (!carExists) {
    throw new Error("Car not found");
  }

  const car = await CarRepository.updateCar(id, {
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

const getCarById = async (id) => {
  const car = await Car.findByPk(id);

  return car;
};

const updateCar = async (id, { name, price, available, capacity }) => {
  try {
    const car = await Car.update(
      { name, price, available, capacity },
      { where: { id } }
    );

    return car;
  } catch (err) {
    throw err;
  }
};
```
