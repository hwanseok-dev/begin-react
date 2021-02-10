import React, {useState, useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number1, setNumber1] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease1 = () => {
        setNumber1(prevNumber => prevNumber + 1)
    };

    const onDecrease1 = () => {
        setNumber1(prevNumber => prevNumber - 1)
    };

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'})
    };

    const onDecrease = () => {
        dispatch({type: 'DECREMENT'})
    };

    return (
        <>
            <div>
                <h1>{number1}</h1>
                <button onClick={onIncrease1}>+1</button>
                <button onClick={onDecrease1}>-1</button>
            </div>
            <div>
                <h1>{number}</h1>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </>
    )
}

export default Counter;