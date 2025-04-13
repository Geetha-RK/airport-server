import express from 'express';
import * as passengerController from '../controllers/passengerController.js'

const router = express.Router();

router.route("/")
        .get(passengerController.index)

export default router;