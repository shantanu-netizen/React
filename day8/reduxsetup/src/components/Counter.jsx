import { increment, decrement, reset, counterValue } from '../slices/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function Counter() {
    let value = useSelector(counterValue);
    let dispatch = useDispatch();
    console.log(value)
    return (
        <div>
            <h1>Counter: {value}</h1>
            <button onClick={() => dispatch(increment())} >Increament</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
