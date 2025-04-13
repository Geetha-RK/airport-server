import express from 'express';
import * as airlineController from '../controllers/airlineController.js'

const router = express.Router();

router.route("/")
        .get(airlineController.index)


export default router;