import express from 'express'
import morgan from 'morgan'

// Cors is used for cross domain data sharing
import cors from 'cors'
import {config} from 'dotenv'
import router from './Router/route.js'

/** import connection file */
import connect from './database/conn.js';

const app = express()

/**app middlewares */
app.use(morgan('tiny'));
app.use(cors());

// Here we need to inform json that we are using the json format
app.use(express.json())
config();

/**application port */
const port = process.env.PORT || 5000;


/*Routes*/

// Router here is the controller or the callback function

app.use('/api', router)/**apis */

app.get('/', (req, res) => {
    try{
        res.json("Get Request")
    }
    catch(error){
        res.json(error)
    }
})

/** Start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, ()=>{
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch (error) {
        console.log("Cannot Connect to the server");
    }
}).catch(error => {
    console.log("Invalid Database Connection")
})

