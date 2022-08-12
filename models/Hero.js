// const {Schema,model} = require('mongoose');
import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    real_name: {
        type: String,
        required: true,
    },
    origin_description: {
        type: String,
        required: true,
    },
    superpowers: {
        type: String,
        required: true,
    },
    catch_phrase: {
        type: String,
        required: true,
    },
    images: {
        type: String,
        required: true,
    },
    viewsCount: {
        type: Number,
        default:0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
    {
        timestamps: true,
    },
);

export default mongoose.model('Hero', HeroSchema);