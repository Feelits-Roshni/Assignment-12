const productModel=require("../model/Product.model");

const getProducts=(req,res)=>{
     if (productModel.length == "") {
        return res.status(400).json({message:"No product available"})
    }
   return  res.status(200).json(productModel);
}

const getProductbyId=(req,res)=>{
     const id = req.params.productId;

    const searchProduct=productModel.find(data=>data.productId==id)
  if (!searchProduct) {
    return res.status(400).json({ message: "Product is not available" });
  }
  return res.status(200).json(searchProduct);
}

const addProduct=(req,res)=>{
    const{ productName, description, stock}=req.body;
     if( productName=="" || description=="" || stock==""){
      return res.status(404).json({message:"Product cannot be added"})
    }
    const data={
        productId: Date.now(),
        productName,
        description,
        stock
    }
    productModel.push(data)
    return res.status(201).json({message:"Product added successfully",productModel})
};

const editProductbyId=(req,res)=>{
 const id=req.params.productId;
  const searchProduct = productModel.find((data) => data.productId == id);
    const {productName,description,stock}=req.body
    if (!searchProduct)
    {
        return res.status(404).json({message:"patient details not found"})
    }

    searchProduct.productName = productName || searchProduct.productName;
    searchProduct.description = description || searchProduct.description;
    searchProduct.stock = stock || searchProduct.stock;

 return res.status(201).json({message:"Product details updated",productModel})
}

const deleteProductbyId=(req,res)=>{
    const id=req.params.productId;
    const deleteProduct=productModel.findIndex(data=>data.productId==id)
    if(deleteProduct == -1){
         return res.status(404).json({messgae:"Product details not found"})
    }
    productModel.splice(deleteProduct,1);
    return res.status(200).json({message:"Product removed Successfully", productModel})

}

module.exports={ getProducts,getProductbyId ,addProduct, editProductbyId, deleteProductbyId};