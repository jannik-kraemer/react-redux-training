// import * as React from 'react';
// import { create}
import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


const counter= (state = 0, action) => {
    switch( action.type ){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}


const Counter = ({ 
    value, 
    onIncrement,
    onDecrement 
}) =>(
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const store = createStore(counter);
// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState());

const render = () => {
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() =>
                store.dispatch({ type: 'DECREMENT' })} />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();

// console.log(counter(0, { type: 'INCREMENT' } ));

