const { Router } = require("express");
const router = Router();
const Products = require("../models/productsModel");
/*
 *
 *      Crear producto en la db
 *
 */
router.post("/api/v1/add/product", (req, res) => {
	const product = new Products({
		nameProduct: req.body.name,
		type: req.body.type,
		quantity: req.body.quantity,
		price: req.body.price,
	});
	product.save((err, productDB) => {
		if (err) {
			return res.status(400).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			productDB,
		});
	});
});
/*
 *
 *      Obtener todos productos de la db
 *
 */
router.get("/api/v1/get/all/product", (req, res) => {
	Products.find({},(err,productsDB) => {
		if(err){
			return res.status(500).json({
				status: false,
				err
			})
		}
		res.json({
			status:true,
			productsDB
		})
	})
});
module.exports = router;
