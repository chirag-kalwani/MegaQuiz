import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setColor, clearColor} from "../features/States/questionSlice";

function Card({change, ...props}) {
    const questions = useSelector(state => state.questions.questions.results)
    const dispatch = useDispatch()
    const [styles, setStyle] = useState([null, null, null, null])

    function handleClick(e) {
        if (change) {
            let id = e.target.id;
            dispatch(setColor([props.index, id]));
        }
    }

    function buttonClick() {
        dispatch(clearColor(props.index))
    }

    useEffect(() => {
        setStyle(questions[props.index].styles)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions[props.index]])

    return (
        <div className="Card">
            <div className="questions">
                {props.index + 1}) {props.question}
            </div>
            <div className="options">
                <div onClick={handleClick} style={styles[0]} className="option" id="0">{props.options[0]}</div>
                <div onClick={handleClick} style={styles[1]} className="option" id="1">{props.options[1]}</div>
                {props.options[2] &&
                    <div onClick={handleClick} style={styles[2]} className="option" id="2">{props.options[2]}</div>}
                {props.options[3] &&
                    <div onClick={handleClick} style={styles[3]} className="option" id="3">{props.options[3]}</div>}
            </div>
            {change && <button onClick={buttonClick} className="btn btn-light fw-bolder">Clear</button>}
            {!change && <h5> mark: {questions[props.index]["marks"]} / 1</h5>}
        </div>
    );
}

export default Card;
