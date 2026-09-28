const express= require("express");
const router=express.Router();
const productController=require("../controller/Product.controller");

router.get("/view", productController.getProducts);
router.get("/view/:productId", productController.getProductbyId);
router.post("/save", productController.addProduct);
router.put("/edit/:productId", productController.editProductbyId);
router.delete("/delete/:productId", productController.deleteProductbyId);

module.exports=router;