import express from 'express';
import * as terminalController from '../controllers/terminalController.js'
const router = express.Router();

router.route("/")
        .get(terminalController.index)

export default router;
