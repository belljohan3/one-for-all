import db from '../config/database';
import { Contribution } from '../types';

export const getAllContributions = async () => {
  db.connect()
  const result = await db.query('SELECT * FROM contributions;')
  return result.rows;
};

export const addContribution = async (contribution: Contribution) => {
  const { amount, contributionTypeId } = contribution;
  const result = await db.query(
    'INSERT INTO contributions (amount, contributionTypeId) VALUES ($1, $2) RETURNING *',
    [amount, contributionTypeId]
  );
  return result.rows[0];
};
