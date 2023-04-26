import express, { Request, Response } from 'express';
import becrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const authRoute = express.Router();



interface User {
    email: string;
    password: string;
}

const users: User[] = [];
authRoute.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    const existingUser = users.find((user) => user.email == email);
    if (existingUser) {
        return res.status(409).send('Username already exists');
    }

    const hashedPassword = await becrypt.hash(password, 8);

    const user: User = {email, password: hashedPassword};
    users.push(user);

    res.status(201).send('User created successfully');
})


authRoute.post('/signin', async (req,res) => {
    const {email, password} = req.body;

    const user = users.find((user) => user.email == email);
    if(!user) {
        return res.status(401).send('Invalid username or password');
    }

    const isPasswordValid = await becrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(401).send('Invalud username or password');
    }

    const token = jwt.sign({email}, 'secret');
    res.status(200).send({token});
})