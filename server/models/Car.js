import mongoose from "mongoose";
const Schema = mongoose.Schema


export const CarSchema = new Schema(
    {
        make: {type: String, required: true, minlength: 2, maxlength: 100},
        model: {type: String, required: true, maxlength: 100},
        year: {type: Number, required: true, min: 1918, max: 99999},
        price: {type: Number, required: true, min: 0, max: 99999999},
        imgUrl: {type: String, maxlength: 600, default: 'https://www.amanworld.com//images/default_car.jpg'},
        description: {type: String, maxlength: 1000},
    },

    { timestamps: true, toJSON: { virtuals: true } }
)
