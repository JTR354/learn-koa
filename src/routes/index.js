import combineRouters from 'koa-combine-routers';

import publicRoute from './publicRoute';

export default combineRouters([publicRoute]);
