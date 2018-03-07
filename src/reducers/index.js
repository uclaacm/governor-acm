import {createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware, push} from 'react-router-redux';
import thunk from 'redux-thunk';

import {User, FetchUser, UpdateUser, UserUpdateDone, FetchActivity} from './user';
import {Auth, LoginUser, LogoutUser, RequestResetPassword, ResetPassword, ResetPasswordDone} from './auth';
import {Events, GetCurrentEvents, PostNewEvent, UpdateEvent, UpdateEventDone, CreateEventDone} from './events';
import {Leaderboard, FetchLeaderboard, InvalidateLeaderboard} from './leaderboard';
import {CheckIn, CheckInto, ResetCheckIn} from './checkin';
import {Registration, RegisterUser, registerDone} from './registration';
import {Milestone, CreateMilestone, CreateMilestoneDone} from './milestone.js';

const history = createHistory();
const routing = routerMiddleware(history);

const store = createStore(
  combineReducers({
    Auth,
    Events,
    User,
    Leaderboard,
    CheckIn,
    Registration,
    Milestone,
    router: routerReducer,
  }),
  applyMiddleware(routing, thunk)
);

const Action = {
  LoginUser, LogoutUser, FetchUser, UpdateUser, UserUpdateDone, FetchActivity,
  RequestResetPassword, ResetPassword, ResetPasswordDone,
  GetCurrentEvents, PostNewEvent, UpdateEvent, CreateEventDone, UpdateEventDone,
  FetchLeaderboard, InvalidateLeaderboard,
  RegisterUser, registerDone,
  CheckInto, ResetCheckIn,
  CreateMilestone, CreateMilestoneDone
};

export {
  store, history, Action,
}
