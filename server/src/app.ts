import express, { Request, Response } from 'express';
import auth from './routes/auth';
import cors from 'cors';


const app = express();
app.use(cors())

app.use("/auth", auth);

app.use("/", (req: Request, res: Response) => {
    res.send("Welcome to the server");
});

const PORT = 4000
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

