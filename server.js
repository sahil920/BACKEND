const express = require("express")
const app = express()
const {errorHandler} = require("./middlewares/errorMiddleware")
const dotenv = require("dotenv")
const connectDb = require("./config/config")
const productsRoute = require("./routes/productsRoute")
const UsersRoute = require("./routes/UsersRoute")
const orderRoutes = require("./routes/orderRoute")
const categoryRoute = require("./routes/categoryRoute")
const path = require("path")
// const myfunc= require("./config/config")
// dotenv confgi
dotenv.config()
// connectting to mongo db database
connectDb()
//middleware for body parser
app.use(express.json())




app.get('/', (req, res)=>{
    res.send("welcome to node server")
})

app.use("/api",productsRoute)
app.use("/api/users",UsersRoute)
app.use("/api/orders",orderRoutes)
app.use("/api/category", categoryRoute)
app.get("/api/config/paypal",(req, res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID)
})

//static files

app.use(errorHandler)
const PORT =8080;
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is listening in Mode on Port : ${process.env.PORT}`)
})