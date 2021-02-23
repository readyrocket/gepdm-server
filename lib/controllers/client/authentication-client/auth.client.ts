import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Users as Client } from '../../../models/client/Users';
import { ERR_INVALID_PASSWORD, ERR_USER_OR_PASSWORD_NOT_FOUND } from '../../../utils/errorTypes';
import { generate } from './auth.token';

async function clientLogin(req: Request, res: Response) {
  try {
    const { email, password } = await req.body;

    const users = getRepository(Client);

    const [user] = await users.find({ where: { email } });

    if (!user || user.email !== email) {
      throw new Error(ERR_USER_OR_PASSWORD_NOT_FOUND);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error(ERR_INVALID_PASSWORD);
    }

    const JWTData = {
      iss: `deliverfy`,
      sub: user.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      data: {
        userId: user.id,
      },
    };

    const jwtToken = await generate(JWTData);

    return res.status(202).json({
      token: jwtToken,
    });
  } catch (error) {
    return res.status(401).json({
      error: error.message,
      message: `Email ou senha inválidos`,
    });
  }
}

export { clientLogin };
