import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface JWT {
    id: string;
}

export function verify(req: express.Request, res: express.Response, next: express.NextFunction) {

    const authHeader = req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) {
                return res.status(403).json({ error: "Token is not valid" });
            }
            req.body.user = user;
            next();
        });
    }else {
        res.status(401).json({ error: "Token is not provided" });
    }

}
