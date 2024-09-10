import db from '../config/database';
import { User } from '../types';

export const getAllUsers = async () => {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
}
export const getUserById = async (userId: number) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
  return result.rows[0];
};

export const createUser = async (user: User, hashedPassword: string) => {
  const result = await db.query(
    'INSERT INTO users (firstName, lastName, password, email, date_of_birth, sexe) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [user.firstName, user.lastName, user.password,  user.email, user.dateOfBirth, user.sexe]
  );
  return result.rows[0];
};
