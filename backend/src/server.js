import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import sequelize from './config/DB.js';
import router from '../src/routes/routes.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(router)

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Server Rodando!")
    })
})