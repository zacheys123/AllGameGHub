import express from 'express';
import {
	update_user,
	delete_user,
	get_user,
	update_plan,
} from '../controllers/user_actions.js';
const router = express.Router();

router.route('/:id').put(update_user);
router.route('/package/:id').put(update_plan);
router.route('/deleteuser').post(delete_user);
router.route('/:id').get(get_user);

export default router;
