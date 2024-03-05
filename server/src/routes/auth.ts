import express, { Request, Response } from 'express';
import { dbConnect } from '../db/index';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { verify } from '../middlewares/authMiddleware';

dotenv.config();

const router = express.Router();

router.use(cors())
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const saltRounds: number = parseInt(process.env.SALT_ROUNDS);


router.post("/login", async (req: Request, res: Response) => {

    const client = await dbConnect();

    try {
        const { password, username } = req.body;

        console.log(username, password);

        const result = await client.query("SELECT * FROM users WHERE username = $1", [username]);
        const user = result.rows[0];

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        console.log("User logged in successfully");

        const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({
            username: user.username,
            token: token
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        client.release(); // Libera o cliente de volta para o pool
    }
});



router.post("/register", async (req: Request, res: Response) => {
    const client = await dbConnect();

    try {
        const { password, username } = req.body;
        console.log(username, password);

        const result = await client.query("SELECT * FROM users WHERE username = $1", [username]);
        const data = result.rows[0];

        if (data) {
            return res.status(409).json({ error: "User already exists" });
        }

        const hash = await bcrypt.hash(password, saltRounds);

        await client.query("INSERT INTO users (username, password) VALUES ($1, $2)", [username, hash]);

        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({
            username: username,
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        client.release(); // Libera o cliente de volta para o pool
    }
});

router.get("/test", verify, (req: Request, res: Response) => {

    res.send("You are logged in");
})

router.post("/getToken", (req: Request, res: Response) => {

    const username = req.body.username;

    const id = 1

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "1h" })

    res.json({ token });

    console.log(token)

})

router.get("/", (req: Request, res: Response) => {
    res.send("welcome to the home page")
})

export default router;
