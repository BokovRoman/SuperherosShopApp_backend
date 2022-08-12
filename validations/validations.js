import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
    body('fullName', 'Name must be at least 4 characters').isLength({ min: 4 }),
];

export const heroCreateValidation = [
    body('nickname', 'Enter nickname og Hero(must be at least 4 characters)').isLength({ min: 4 }).isString(),
    body('real_name', 'Enter real name of Hero(must be at least 4 characters)').isLength({ min: 4 }).isString(),
    body('origin_description', 'Enter description of Hero(must be at least 7 characters)').isLength({ min: 7 }).isString(),
    body('superpowers', 'Enter superpowers of Hero(must be at least 4 characters)').isLength({ min: 4 }).isString(),
    body('catch_phrase', 'Enter the best phrase of Hero(must be at least 4 characters)').isLength({ min: 4 }).isString(),
    body('images', 'Enter the link of image for downloading this image of your Hero').isString(),
];
