import express from "express";
import db from "../db/database";
import Product from "../domain/dependencies";
 
const router = express.Router();
 
//handles url http://localhost:6001/dependencies
router.get("/", (req, res, next) => {
 
    db.query(Product.getDependenciesSQL(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Products listed.",
                productId:data
            });
        }
    });    
});
 
//handles url http://localhost:6001/products/add
/*router.post("/submit", (req, res, next) => {
 
    //read product information from request
    let dependencies = new Dependencies(req.body.token_id);
 
    db.query(product.getAddProductSQL(), (err, data)=> {
        res.status(200).json({
            message:"Product added.",
            productId: data.insertId
        });
    });
});
 
//handles url http://localhost:6001/products/delete
router.post("/delete", (req, res, next) => {
 
    var pid = req.body.productId;
 
    db.query(Product.deleteProductByIdSQL(pid), (err, data)=> {
        if(!err) {
            if(data && data.affectedRows > 0) {
                res.status(200).json({
                    message:`Product deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message:"Product Not found."
                });
            }
        } 
    });   
});*/
 
module.exports = router;