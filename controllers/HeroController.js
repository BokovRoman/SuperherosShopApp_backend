// const { json } = require("express");
// const Hero = require("../models/Hero");
import HeroModel from '../models/Hero.js'

export const getAllHero = async (req, res) => {
    try {
        const heroes = await HeroModel.find().populate('user').exec();

        res.json(heroes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Getting the Hero was failed!" })
    }
};

export const getOneHero = async (req, res) => {
    try {
        const heroId = req.params.id;
        
        HeroModel.findOneAndUpdate({
            _id: heroId,
        },
            {
                $inc: { viewsCount: 1 }
            },
            {
                returnDocument:'after',
            },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Getting the Hero by ID was failed!" })
                }
                if (!doc) {
                    return res.json(404).json({ message: "The Hero not found" })
                }

                res.json(doc);
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Getting the Hero was failed!" })
    }
};

export const createHero = async (req, res) => {
    try {
        const doc = new HeroModel({
            nickname: req.body.nickname,
            real_name: req.body.real_name,
            origin_description: req.body.origin_description,
            superpowers: req.body.superpowers,
            catch_phrase: req.body.catch_phrase,
            images: req.body.images,
            user: req.userId,
        })

        const hero = await doc.save();
        res.json(hero);
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Creating the Hero was failed!" })
    }
    
};

export const removeHero = async (req, res) => {
    try {
        const heroId = req.params.id;
        
        HeroModel.findOneAndDelete({
            _id: heroId,
        },
            (err, doc) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Deleting the Hero by ID was failed!" })
                }
                if (!doc) {
                    return res.json(404).json({ message: "The Hero not found" })
                }

                res.json({
                    success:true,
                });
            }
        );
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Getting the Hero was failed!" })
    }
};

export const updateHero = async (req, res) => {
    try {
        const heroId = req.params.id;
        
        await HeroModel.updateOne({
            _id: heroId,
        },
        {
            nickname: req.body.nickname,
            real_name: req.body.real_name,
            origin_description: req.body.origin_description,
            superpowers: req.body.superpowers,
            catch_phrase: req.body.catch_phrase,
            images: req.body.images,
            user: req.userId,
            },
        )
                res.json({
                    success:true,
                });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Updating the Hero was failed!" })
    }
};






// export const createHero = async (req, res) => {
//     try {
//         const newHero = new Hero({
//             nickname: req.body.nickname,
//             real_name: req.body.real_name,
//             origin_description: req.body.origin_description,
//             superpowers: req.body.superpowers,
//             catch_phrase: req.body.catch_phrase,
//             images: req.body.images,
//         })

//         const post = await newHero.save();
//         res.json(post);
        
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({message:"Creating the Hero was failed!"})
//     }
    
// }