import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {setPreferences} from '../features/States/preferencesSlice'

function PreferencesForm() {
    // const prefer = useSelector(state => state.preferences.prefer)
    const dispatch = useDispatch();
    const [data, setData] = useState({category: "any", difficulty: "any"})

    function handleChange(e) {
        setData(prevData => ({...prevData, [e.target.name]: e.target.value}))
    }

    function handleClick() {
        console.log([data.category, data.difficulty])
        dispatch(setPreferences([data.category, data.difficulty]))
    }

    return (
        <Form className="d-flex justify-content-center align-items-center" style={{height: '100vh', width: '100vw'}}>
            <fieldset style={{width: '50vw'}}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Select Category</Form.Label>
                    <Form.Select onChange={handleChange} name="category" id="disabledSelect">
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Select Difficulty</Form.Label>
                    <Form.Select onChange={handleChange} name="difficulty" id="disabledSelect">
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </Form.Select>
                </Form.Group>
                <Button onClick={handleClick} type="button">Submit</Button>
            </fieldset>
        </Form>
    );
}

export default PreferencesForm;