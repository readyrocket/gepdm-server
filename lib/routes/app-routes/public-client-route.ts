import { Router } from 'express';

import { clientLogin } from '../../controllers/client/authentication-client/auth.client';
import { RegisterClient } from '../../controllers/client/register_client';

export default (router: Router) => {
  router.post(`/register`, RegisterClient);
  router.post(`/login`, clientLogin);
};
