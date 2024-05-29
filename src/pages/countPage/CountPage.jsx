import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeToIncrement, changeToDecrement} from "../../store/countSlice";

function CountPage() {

    const dispatch = useDispatch();
    const {count} = useSelector((store) => store.countReducer);

    function changeCountIncrement(){
        dispatch(changeToIncrement());
    }

    function changeCountDecrement(){
        dispatch(changeToDecrement());
    }


    return (
        <div>
            <h2>Count page</h2>
            <button onClick={changeCountIncrement}>increment</button>
                                    {count}
            <button onClick={changeCountDecrement}>decrement</button>
        </div>
    );
}

export default CountPage;