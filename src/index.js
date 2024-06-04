import express from 'express';
import bodyParser from 'body-parser';
import itemRoutes from './v1/routes/itemRoutes.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api/v1', itemRoutes)

app.get('/', (req,res) => {
    res.send('Welcome to API Routes')
})

app.listen(PORT, ()=> {console.log(`Server running at Port ${PORT}`)})