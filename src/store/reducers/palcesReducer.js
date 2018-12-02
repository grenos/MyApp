import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
  TOGGLE_STATE
} from '../actions/actiopnTypes';

const initState = {
  placeName: '',
  places: [],
  selectedPlace: null,
  toggle: true
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    // take places array
    // add object of user input (name)
    // generate uuid (key)
    // and save img url
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.payload,
          image: {
            uri: 'https://isdb.pw/upload/253203290/1766434196542445296.jpg'
          }
        })
      };
    case DELETE_PLACE:
      // filter place array (key of each place vs key of selected place)
      // delete place that match key
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      // find place in places array by key that matches the key provided by action
      // ( to open the modal )
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.payload;
        })
      };
    case DESELECT_PLACE:
      // easy - to close the modal
      return {
        ...state,
        selectedPlace: null
      };
    case TOGGLE_STATE:
      return {
        ...state,
        toggle: !state.toggle
      };
    case TOGGLE_TRUE:
      return {
        ...state,
        toggle: true
      };
    case TOGGLE_FALSE:
      return {
        ...state,
        toggle: false
      };
    default:
      return state;
  }
};

export default reducer;
