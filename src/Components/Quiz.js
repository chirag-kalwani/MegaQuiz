import React, {useState} from 'react';
import Card from "./Card";
import {useSelector, useDispatch} from "react-redux";
import {generateResult} from "../features/States/questionSlice";

function Quiz(props) {
    const [result, setResult] = useState(null)
    const questions = useSelector(state => state.questions.questions)
    const dispatch = useDispatch()

    function buttonClick() {
        dispatch(generateResult())
        setResult("hello");
    }

    let marks = 0;
    return (

        <>
            {!result &&
                <div className="quiz">
                    {questions["results"].map((question, index) => {
                        return (
                            <Card change={true} question={question["question"]} index={index}
                                  options={question["options"]}
                                  key={index}/>
                        )
                    })}
                    <button onClick={buttonClick} className="btn btn-primary">Show Result</button>
                    <footer style={{height: "20vh"}}></footer>
                </div>
            }
            {
                result &&
                <div className="quiz">
                    {questions["results"].map((question, index) => {
                        marks += question["marks"]
                        return (
                            <Card change={false} question={question["question"]} index={index}
                                  options={question["options"]}
                                  key={index}/>
                        )
                    })}
                    <h3>Total Marks: {marks} / 10</h3>
                    <footer style={{height: "20vh"}}></footer>
                </div>
            }
        </>
    );
}

export default Quiz;