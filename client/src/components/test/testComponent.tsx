import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, delayedIncrement, delayedMultiply, increment, incrementByAmount } from "../../redux/features/test/testSlice";
import { RootState } from "../../redux/store";

export default function () {

    const [inputVal, setInputVal] = useState("");
    const parsedInputVal = useMemo(() => parseInt(inputVal), [inputVal]);
    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.test.value)

    function getAmount() {
        return typeof parsedInputVal === "number" && !isNaN(parsedInputVal) 
        ? parsedInputVal 
        : 0;
    }

    return (
        <div>
            <div>{counter}</div>
            <div><button onClick={() => dispatch(increment())}>Increment</button></div>
            <div><button onClick={() => dispatch(decrement())}>Decrement</button></div>
            <div><input value={inputVal} onInput={(e) => setInputVal(e.currentTarget.value)} /></div>
            <div><button onClick={() => dispatch(incrementByAmount(getAmount()))}>Increment by amount</button></div>
            <div><button onClick={() => dispatch(delayedIncrement(getAmount()))}>Delayed Increment</button></div>
            <div><button onClick={() => dispatch(delayedMultiply(getAmount()))}>Delayed Multiply</button></div>
        </div>
    );
}