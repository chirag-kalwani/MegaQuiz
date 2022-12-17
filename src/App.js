import React, {useEffect} from 'react';
import './App.css';
import PreferencesForm from "./Components/PreferencesForm";
import {useSelector, useDispatch} from "react-redux"
import Quiz from "./Components/Quiz";
import {setQuestions} from "./features/States/questionSlice";
import {setFullDone} from "./features/States/preferencesSlice";
import Spinner from "./Components/Spinner"

function App() {
    const prefer = useSelector(state => state.preferences.prefer)
    let dispatch = useDispatch()

    async function run() {
        let res = await fetch(prefer.url)
        res = await res.json();
        await dispatch(setQuestions(res["results"]));
        await dispatch(setFullDone())
    }

    useEffect(() => {
        run()
    }, [prefer["done"]])
    return (
        <div className="App">
            {(prefer["done"] && !prefer["fullDone"]) &&
                <div className="spinner">
                    <Spinner />
                </div>
            }
            {!prefer.fullDone && <PreferencesForm/>}
            {prefer.fullDone && <Quiz/>}
        </div>
    );
}

export default App;
