import React from 'react'
import { decrement, increment } from '../redux/CounterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default Counter;