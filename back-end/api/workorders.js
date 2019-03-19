const express = require('express');
const router = express.Router();
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const db = require('../data/helper/workOrderModal');

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET
	});
	
const storage = cloudinaryStorage({
	cloudinary: cloudinary,
	folder: "demo",
	allowedFormats: ["jpg", "png"],
	transformation: [{ width: 500, height: 500, crop: "limit" }]
	});
	
const parser = multer({ storage: storage });	


const storage = cloudinaryStorage({
cloudinary: cloudinary,
folder: "demo",
allowedFormats: ["jpg", "png"],
transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

router.post('/images', parser.single("image"), (req, res) => {
	console.log(req.file) // to see what is returned to you
	const image = {};
	image.url = req.file.url;
	image.id = req.file.public_id;
	db.create(image) // save image information in database
	  .then(newImage => res.json(newImage))
	  .catch(err => console.log(err));
  });

//GET all workorders

router.get('/', (req, res) => {
	db.getWorkOrders().then((workorders) =>
		res.status(200).json(workorders).catch((err) => {
			res.status(500).json({ error: `${err}` });
		})
	);
});

//GET work orders by ID

router.get('/:id', (req, res) => {
	const { id } = req.params;
	db
		.findByWorkOrderId(id)
		.then((workorder) => {
			if (workorder) {
				res.status(200).json(workorder);
			} else {
				res.status(404).json({ error: 'workorder not found' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

//POST new workorder

router.post('/', (req, res, next) => {
	const newWorkorder = req.body;
	image.url = req.file.url;
	image.id = req.file.public_id;
	db
		.createWorkOrder(newWorkorder)
		.then((ids) => {
			db
				.findByWorkOrderId(ids[0])
				.then((newWorkorder) => {
					res.status(201).json({ newWorkorder: newWorkorder.id });
				})
				.catch((err) => {
					res.status(500).json({ error: `${err}` });
				});
		})
		.catch((err) => {
			next('h500', err);
		});
});

//update(PUT) existing workorder using the id

router.put('/:id', (req, res, next) => {
	const { id } = req.params;
	const edit = req.body;

	db
		.editWorkOrder(id, edit)
		.then((update) => {
			if (update) {
				res.status(200).json({
					message: 'Work order updated'
				});
			} else {
				res.status(404).json({ error: 'That workorder seems to be missing!' });
			}
		})
		.catch((err) => {
			next('h500', err);
		});
});

//DELETE existing work order by using ID

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db
		.deleteWorkOrder(id)
		.then((workorder) => {
			if (workorder) {
				res.status(202).json({ message: 'Workorder deleted' });
			} else {
				res.status(404).json({ error: 'That Workorder seems to be missing!' });
			}
		})
		.catch((err) => {
			res.status(500).json({ error: `${err}` });
		});
});

module.exports = router;