import { Request, Response } from 'express';
import { register, login } from '../services/auth.services';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, password, email, dateOfBirth, sexe } = req.body;
    const user = await register({ firstName, lastName, password, email, dateOfBirth, sexe });
    res.status(201).json(user);
  } catch (error: Error | any) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const { user, token } = await login(username, password);
    res.json({ user, token });
  } catch (error: unknown) {
    res.status(400).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
