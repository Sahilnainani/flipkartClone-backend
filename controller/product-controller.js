import Product from "../model/product-schema.js"

export const getproducts= async (req,resp)=>{
    try{
        const products = await Product.find({})
        resp.status(200).json(products)
    }
    catch(error){
        resp.status(500).json({ message: error.message });
    }
}

export const getproductbyid=async(req,resp)=>{
    try{
        const product = await Product.findOne({"id":req.params.id})
        resp.status(200).json(product)
    }
    catch(error){
        resp.status(500).json({message:error.message})
    }
}