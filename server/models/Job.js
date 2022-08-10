import mongoose from "mongoose";
const Schema = mongoose.Schema


export const JobSchema = new Schema(
    {
        title: {type: String, required: true, minlength: 2, maxlength: 100},
        pay: {type: Number, required: true, min: 0, max: 9999999},
        description: {type: String, maxlength: 1000},
        imgUrl: {type: String, maxlength: 600, default: 'https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8am9ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60'},

    },
    { timestamps: true, toJSON: { virtuals: true } }
)