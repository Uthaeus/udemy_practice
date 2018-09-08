import * as actionTypes from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_PERSON:
      let newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age 
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.DELETE_PERSON:
      const updatedArray = state.persons.filter(person => person.id !== action.personId);
      return {
        ...state,
        persons: updatedArray
      }
  }

  return state;
};


export default reducer;