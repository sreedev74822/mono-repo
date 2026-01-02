// src/util/jwt.config.ts
import { SignOptions } from 'jsonwebtoken';

export const jwtConfig: {
  secret: string;
  signOptions: SignOptions;
} = {
  secret: 'your_super_secret_key_here',
  signOptions: {
    expiresIn: '7d',
  },
};
