import { ACTION_TYPES } from './actions';


const initialState = {
	isAuthorized: false,
};

export default function reducer(previousState = initialState, action) {
  switch(action.type) {
  	case ACTION_TYPES.READ_RITUALS:
  		//let newState = Object.assign({}, state, )
  		return previousState;
    default:
      return previousState;
  }
}





