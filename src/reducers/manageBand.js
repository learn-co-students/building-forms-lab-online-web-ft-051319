export default function manageBand(state = {bands: []}, action) {
  switch(action.type){
    case 'ADD_BAND':
      return { ...state, bands: [...state, action.band] }
    default:
      return state
  }
};
 