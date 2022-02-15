import {connect} from "./utils/db";
import  express  from "express";
import cors from 'cors';
import userRouter  from './routes/user.router'


const app = express();


//@CORS list listen and config
const URL = ["http://localhost:3000"];
const corsOPtions = {
  origin: URL,
  optionsSuccessStatus: 200
};
//use middelware
app.use(cors(corsOPtions));
app.use(express.json());

// use the routes
app.use("/",userRouter);

const port = 5000;
//mensaje para cuando se inicia el servidor
export const start = async () => {
    try {
      await connect()
      app.listen(port, () => {
        console.log(`REST API on http://localhost:${port}/api`)
      })
    } catch (e) {
      console.error(e)
    }
  }