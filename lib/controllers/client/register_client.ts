import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Users as Client } from '../../models/client/Users';
import { DUPLICATE_EMAIL } from '../../utils/errorTypes';

const RegisterClient = async (req: Request, res: Response) => {
  try {
    const db = getRepository(Client);

    const { name, email, password } = await req.body;

    const findUser = await db.find({ where: { email } });

    if (findUser.length > 0) {
      throw new Error(DUPLICATE_EMAIL);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: passwordHashed,
    };

    const user = db.create(userData);

    await db.save(user);

    return res.status(201).json({ message: `Cadastro feito com sucesso` });
  } catch (error) {
    return res.status(401).json({
      error: error.message,
      message: `Este usuário já existe`,
    });
  }
};

export { RegisterClient };
