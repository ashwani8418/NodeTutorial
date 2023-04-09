const express = require("express");
const userRouter = require("./Router/user.route");


const PORT = 5050;
const host = 'localhost';

const app = express();

app.use((req, res, next) =>{
    next();
})

app.get('/health', (req, res) =>{
    res.json({
        success : true,
        message : `Server heath is good!. Server running on port ${PORT}`,
    })
})

app.use(express.json());

app.use('/users', userRouter);

app.listen(PORT, host, ()=>{
    console.log(`Server is running on ${host} port ${PORT}`);
})