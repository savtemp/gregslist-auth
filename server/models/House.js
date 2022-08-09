import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
    {
        bedrooms: {type: Number, required: true, min: 0, max: 9999 },
        bathrooms: {type: Number, required: true, min: 0, max: 9999 },
        levels: {type: Number, required: true, min: 0, max: 9999 },
        year: {type: Number, required: true, min: 1500, max: 999999 },
        price: {type: Number, required: true, min: 0, max: 99999999},
        imgUrl: {type: String, maxlength: 600, default: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'},
        description: {type: String, maxlength: 1000}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)
