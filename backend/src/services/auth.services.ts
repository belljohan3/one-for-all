// import { getUserById, createUser } from '../models/UserModel';
import { getUserById, createUser } from '../models/userModel';
import { User } from '../types';
import { generateToken } from '../utils/jwtHelper';
import { hashPassword, comparePassword } from '../utils/passwordHelper';

export const register = async (user: User) => {
  const hashedPassword = await hashPassword(user.password);
  return createUser(user, hashedPassword);
};

export const login = async (user: User, password: string) => {
  const userInfos = await getUserById(user._id!);
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }
  const token = generateToken({ id: user._id, role: user.roleId });
  return { user, token };
};
