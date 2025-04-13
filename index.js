import 'dotenv/config';
import client from './connection.js';
import express from 'express';
import cors from 'cors';
import airlineRoutes from './routes/airlineRoutes.js'
import cargoRoutes from './routes/cargoRoutes.js'
import flightRoutes from './routes/flightRoutes.js'
import passengerRoutes from './routes/passengerRoutes.js'
import terminalRoutes from './routes/terminalRoutes.js'

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5050;

//Connection to Postgresql
client.connect()
    .then(() => console.log("Connected to PostgreSQL"))
    .catch(err => console.error("Connection error", err.stack));

//Use cors for cross origin requests
app.use(cors());

app.listen(PORT,()=>{
    console.log(`running at http://localhost:${PORT}`);
})

app.get('/test-db', async (req, res) => {
    try {
        const result = await client.query('SELECT * from airlines');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});