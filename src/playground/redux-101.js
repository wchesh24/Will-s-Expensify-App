import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'

});

// Reducers
// 1. Reducers are pure functions (output only determine by the inpso state and actionut)
// 2. Never change state or action

let result;
const add = (b) => {
    result = a + b;
};

const constReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
            };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
            case 'SET':
                return {
                    count: action.count
                };
            case 'RESET':
                 return {
                    count: 0
                        };
    
            default:
                return state;
    }

}


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions- An object that gets sent to the store
//types of actions: increment, decrement, reset

// I'd like to increment the count
//store.dispatch({
  //  type:'INCREMENT',
    //incrementBy: 5
  //});

store.dispatch(incrementCount({ incrementBy: 5 }))

  store.dispatch(incrementCount());

  store.dispatch(resetCount());

  store.dispatch(decrementCount());

  store.dispatch(decrementCount({ decrementBy: 10 }));

  store.dispatch(setCount({ count: 101 }));