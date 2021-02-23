import { Router } from 'express';

import HomeCtrl from '../../controllers/client/homescreen/homescreen';
import auth from '../../middlewares/auth.user.authorization';

export default (router: Router) => {
  router.get(`/home`, auth.userAuthorization, HomeCtrl.homescreen);
};
