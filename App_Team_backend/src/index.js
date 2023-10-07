const express = require("express");
const {connect} = require("./config/db");
const cors = require("cors");
require('dotenv').config();
const apiRoute=require("./routes")
const EventRout = require("./routes/Events");
const swaggerUi = require("swagger-ui-express");
const spec = require ("./swagger/swagger.Json")


connect()
console.log("connected");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoute)
app.use("/event", EventRout);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

const port = process.env.PORT;
console.log(process.env.port);



app.listen( port,  () =>{
  console.log(`Server is running on ${port}`);
})