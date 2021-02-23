import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import { Users as RegisterClient } from '../../../models/client/Users';

export default {
  async homescreen(req: Request, res: Response) {
    const id = req?.token;
    const users = getRepository(RegisterClient);

    // eslint-disable-next-line no-unused-vars
    const _user = await users.find({ order: { name: `ASC` } });

    return res.status(202).json({ token: id });
  },
};
