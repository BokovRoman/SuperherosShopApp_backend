import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { registerValidation, loginValidation, heroCreateValidation } from './validations/validations.js';
import { UserController, HeroController} from './controllers/index.js';

import { checkAuth, handleValidationErrors } from './utils/index.js';

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('DB OK!'))
    .catch((err)=>console.log('DB error', err))

const app = express();

app.use(express.json());

app.use(cors());


app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register )
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/heroes', HeroController.getAllHero);
app.get('/heroes/:id', HeroController.getOneHero);
app.post('/heroes', checkAuth, heroCreateValidation, handleValidationErrors, HeroController.createHero);
app.delete('/heroes/:id', checkAuth, HeroController.removeHero);
app.patch('/heroes/:id',checkAuth, heroCreateValidation, handleValidationErrors, HeroController.updateHero);


app.listen(process.env.PORT||5000, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log(`Server started  on port ${PORT}`)
});


// mongodb+srv://BokovRoman:BokovRoman@cluster0.enqsi.mongodb.net/heroes?retryWrites=true&w=majority