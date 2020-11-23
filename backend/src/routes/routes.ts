import {Router} from 'express';
import linksController from '../controllers/controller';

const router = Router();

// creating link
router.post('/links', linksController.postLink);

// returns the link and counts access
router.get('/links/:code', linksController.hitLink);

// returns links informations
router.get('/links/:code/stats', linksController.getLink);

export default router;