import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import {config} from 'dotenv'
import router from './Router/route.js'

const app = express()

/**app middlewares */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json())
config();

/**application port */
const port = process.env.PORT || 5000

/*Routes*/
app.use('/api', router)/**apis */

app.get('/', (req, res) => {
    try{
        res.json("Get Request")
    }
    catch(error){
        res.json(error)
    }
})

app.listen(port, ()=>{
    console.log(`Server connected to http://localhost:${port}`)
}
)