/*
 *		Autor: roberto
 *     	CRUD API PRODUCTS
 *
 */
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const Admin = require("../models/adminModel");
const router = Router();

/*
 *
 *      Crear admin en la db
 *
 */
router.post("/api/v1/add/admin", (req, res) => {
	const admin = new Admin({
		firtsName: req.body.firtsName,
		lastsName: req.body.lastsName,
		enrollment: req.body.enrollment,
		email: req.body.email,
		password: bcrypt.hashSync(req.body.password, 8),
	});
	admin.save((err, adminDB) => {
		if (err) {
			return res.status(400).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			adminDB,
		});
	});
});
/*
 *
 *      Login admin
 *
 */
router.post("/api/v1/login/admin", (req, res) => {
	const enrollment = req.body.enrollment;
	const pass = req.body.password
	Admin.findOne({ enrollment: enrollment }, (err, adminDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		if (!adminDB) {
			return res.status(500).json({
				status: false,
				error: `Enrollment:/${enrollment}/ Does not exist `,
			});
		}
		if (!bcrypt.compareSync(pass, adminDB.password)) {
			return res.status(500).json({
				status: false,
				error: "Incorrect password",
			});
		}
		res.json({
			status: true,
			adminDB,
		});
	});
});

module.exports = router;
