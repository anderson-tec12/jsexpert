const BaseRepository = require("./../repository/base/baseRepository");

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  test(id) {
    return this.carRepository.find(id);
  }

  async getAvailableCar(carCategory) {
    // const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds)
    const carId = this.chooseRamdomCar(carCategory);

    const car = await this.carRepository.find(carId);

    return car;
  }

  getRandomPositionFromArray(list) {
    const listLength = list.length;

    return Math.floor(Math.random() * listLength);
  }

  chooseRamdomCar(carCategory) {
    const ramdomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);
    const carId = carCategory.carIds[ramdomCarIndex];

    return carId;
  }
}

module.exports = CarService;
