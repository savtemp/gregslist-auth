import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js";



class CarsService{
    async getCars(){
        const cars = await dbContext.Cars.find()
        return cars
    }

    async getCarById(carId){
        let car = await dbContext.Cars.findById(carId)
        if(!car) {
            throw new BadRequest('Invalid Car Id')
        }
        return car
    }

    async createCar(carData){
        let car = await dbContext.Cars.create(carData)
        return car
    }

    async editCar(cardId, carData){
        let car = await this.getCarById(cardId)

        car.make = carData.make || car.make
        car.model = carData.model || car.model
        car.price = carData.price || car.price
        car.year = carData.year || car.year
        car.img =  carData.img || car.img
        car.description = carData.description || car.description

        await car.save()
        return car
    }

    async deleteCar(cardId){
        let car = await this.getCarById(cardId)

        await car.remove()
        return car
    }
}



export const carsService = new CarsService()