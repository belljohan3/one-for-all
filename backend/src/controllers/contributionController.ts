import { Request, Response } from 'express';
import { getAll, add } from '../services/contribution.services';
import { Contribution } from '../types';

// Get all contributions
export const getAllContributions = async (req: Request, res: Response) => {
  try {
    const contributions: Contribution[] = await getAll()
    res.json(contributions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contributions' });
  }
};

// Add a new contribution
export const addContribution = async (req: Request, res: Response) => {
  const { amount, contributionTypeId } = req.body;
  try {
    const newContribution = await add({ amount, contributionTypeId });
    res.status(201).json(newContribution);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add contribution' });
  }
};
