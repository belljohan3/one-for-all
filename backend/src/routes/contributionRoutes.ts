import { Router } from 'express';
import { getAllContributions, addContribution } from '../controllers/contributionController';

const router = Router();

router.get('/contributions', getAllContributions);
router.post('/contributions',  addContribution);

export default router;
