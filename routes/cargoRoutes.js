import express from 'express';
import * as cargoController from '../controllers/cargoController.js'
const router = express.Router();

router.route("/")
        .get(cargoController.index)

export default router;