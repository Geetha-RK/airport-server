import express from 'express';
import * as flightController from '../controllers/flightController.js'

const router = express.Router();

router.route("/")
        .get(flightController.index)

export default router;