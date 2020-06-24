/*
 *		Autor: roberto
 *     	CRUD API PRODUCTS
 *
 */
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
		available: req.body.available,
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
router.get("/api/v1/get/all/products", (req, res) => {
	Products.find({ available: true }, (err, productsDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			productsDB,
		});
	});
});
/*
 *
 *      Actualizar producto de la db
 *
 */
router.put("/api/v1/update/product/:id", (req, res) => {
	let id = req.params.id;
	let body = req.body;

	Products.findById(id, (err, productDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		if (!productDB) {
			return res.status(400).json({
				ok: false,
				err: {
					message: "El ID no existe",
				},
			});
		}
		productDB.nameProduct = body.name;
		productDB.type = body.type;
		productDB.quantity = body.quantity;
		productDB.price = body.price;
		productDB.available = body.available;
		productDB.save((err, productSave) => {
			if (err) {
				return res.status(500).json({
					status: false,
					err,
				});
			}
			res.json({
				status: true,
				productSave,
			});
		});
	});
});
/*
 *
 *      Borra producto de la db
 *
 */
router.delete("/api/v1/dalate/product/:id", (req, res) => {
	let id = req.params.id;
	Products.findById(id, (err, productDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		if (!productDB) {
			return res.status(500).json({
				status: false,
				err: {
					message: "id not exit",
				},
			});
		}
		productDB.available = false;
		productDB.save((err, productDeleted) => {
			if (err) {
				return res.status(500).json({
					status: false,
					err,
				});
			}
			res.json({
				status: true,
				productDeleted,
			});
		});
	});
});
module.exports = router;
