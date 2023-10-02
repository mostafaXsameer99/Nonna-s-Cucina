import { Router } from "express";
import { sample_dishes, sample_tags, sample_users } from "../data";
import asyncHandler from 'express-async-handler';
import jwt from "jsonwebtoken";
import { User, UserModel } from "../models/user.model";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
const router = Router();



router.get("/seed", asyncHandler(
    async (req, res) => {
        const usersCount = await UserModel.countDocuments();
        if (usersCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        await UserModel.create(sample_users);
        res.send("Seed Is Done!");
    }
))


router.post("/login", asyncHandler(
    async (req, res) => {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.send(generateTokenResponse(user));
        }
        else {
            res.status(HTTP_BAD_REQUEST).send("Username or password is invalid!");
        }

    }
))

router.post('/register', asyncHandler(async (req, res) => {
    const { name, email, password, address } = req.body;

    // Check if the user with the same email already exists
    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (user) {
        res.status(400).send('User is already exist, please login!');
        return;
    }

    // Hash the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create a new user without manually specifying the "id"
    const newUser: User = {
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
    }

    // Create the user document in the database
    const dbUser = await UserModel.create(newUser);

    // Generate a token response and send it back
    const tokenResponse = generateTokenResponse(dbUser);
    res.json(tokenResponse);
}));



const generateTokenResponse = (user: User) => {
    const token = jwt.sign({
        id: user._id, email: user.email, isAdmin: user.isAdmin
    }, "process.env.JWT_SECRET!", {
        expiresIn: "30d"
    });

    return {
        id: user._id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token: token
    };
}

export default router;