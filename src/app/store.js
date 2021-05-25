import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import loggerMiddleware from '../shared/middlewares/logger-middleware'
import rootReducer from "../shared/reducers";


export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, loggerMiddleware)
);
