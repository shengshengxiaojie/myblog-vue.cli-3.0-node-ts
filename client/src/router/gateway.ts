/**
 * FileName : gateway.ts
 * ProjectName : client
 * Author : terrorblade
 * Created Date: 2019-03-22 14:34:11
 * Description :
 * -----
 * Last Modified: 2019-05-13 17:09:21
 * Modified By :
 * -----
 * Copyright (c) 2019 芒果动听 Corporation. All rights reserved.
 */

import Home from '../views/gateway/Home.vue';
import Index from '../components/gateway/index.vue';

export default {
  path: '/gateway',
  name: 'gateway',
  component: Home,
  children: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
  ],
};
