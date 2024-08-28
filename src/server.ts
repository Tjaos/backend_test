import express  from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.port || 3333;

app.use(express.json());
app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`);
})

