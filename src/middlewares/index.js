import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import { checkForBitcoin } from './check-for-bitcoin';
import { logger } from './logger';

export default applyMiddleware(ReduxThunk, checkForBitcoin, logger);
