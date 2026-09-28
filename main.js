const express=require("express");
const app=express();
app.use(express.json());
const productRouter=require("./router/Product.router");
app.use(productRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`${port} server running this port number`)
})