import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    questions: {
        "results": [{
            "category": "Entertainment: Cartoon & Animations",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the relationship between Rick and Morty in the show &quot;Rick and Morty&quot;?",
            "correct_answer": "Grandfather and Grandson",
            "incorrect_answers": ["Father and Son", "Best Friends", "Crimefighting Partners"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Science: Computers",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The last Windows operating system to be based on the Windows 9x kernel was Windows 98.",
            "correct_answer": "False",
            "incorrect_answers": ["True"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who stars in Brutal Legend?",
            "correct_answer": "Jack Black",
            "incorrect_answers": ["Kanye West", "Lemmy", "Ozzy Osbourne"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Which &quot;Fallout: New Vegas&quot; quest is NOT named after a real-life song?",
            "correct_answer": "They Went That-a-Way",
            "incorrect_answers": ["Come Fly With Me", "Ain&#039;t That a Kick in the Head", "Ring-a-Ding Ding"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Satella in &quot;Re:Zero&quot; is the witch of what?",
            "correct_answer": "Envy",
            "incorrect_answers": ["Pride", "Sloth", "Wrath"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who is the director of the 1991 film &quot;Silence of the Lambs&quot;?",
            "correct_answer": "Jonathan Demme",
            "incorrect_answers": ["Stanley Kubrick", "Frank Darabont", "Michael Bay"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "&quot;Silhouette&quot;, a song performed by the group &#039;KANA-BOON&#039; is featured as the sixteenth opening of which anime?",
            "correct_answer": "Naruto: Shippūden",
            "incorrect_answers": ["One Piece", "Naruto", "Gurren Lagann"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Comics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Batman sidekick is the son of Talia al Ghul?",
            "correct_answer": "Damian Wayne",
            "incorrect_answers": ["Dick Grayson", "Tim Drake", "Jason Todd"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In &quot;Kingdom Hearts&quot;, who abducts Jasmine in the Lamp Chamber?",
            "correct_answer": "Riku",
            "incorrect_answers": ["Riku Replica", "Xaldin", "Captain Hook"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }, {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In Splatoon 2, who are the members of Off The Hook?",
            "correct_answer": "Pearl &amp; Marina",
            "incorrect_answers": ["Callie &amp; Marie", "Diamond &amp; Aquamarina", "DJ Octavio &amp; Crusty Sean"],
            "options": [undefined, undefined, undefined, undefined],
            "styles": [null, null, null, null],
            "marks": 0,
        }]
    }
}

function decodeHtml(html) {
    let txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



export const questionSlice = createSlice({
    name: 'questions', initialState, reducers: {
        setQuestions: (state, action) => {
            let res = action.payload;
            for (let index in res) {
                res[index]['question'] = decodeHtml(res[index]['question']);
                res[index]['correct_answer'] = decodeHtml(res[index]['correct_answer'])
                let options = [res[index]['correct_answer'], ...res[index]["incorrect_answers"]];
                for (let i in options) options[i] = decodeHtml(options[i]);
                options = shuffleArray(options);
                res[index]["options"] = options;
                res[index]["styles"] = [null, null, null, null];
            }
            state.questions["results"] = res;

        }, setColor: (state, action) => {
            let [index, id] = action.payload
            let question = state.questions.results[index];
            question["styles"] = [null, null, null, null];
            question["styles"][id] = {backgroundColor: "#D6DBF5"}
        }, clearColor: (state, action) => {
            let index = action.payload
            let question = state.questions.results[index];
            question["styles"] = [null, null, null, null];
        }, generateResult: (state,) => {
            for (let index in state.questions.results) {
                let question = state.questions.results[index];
                let selectedOption = -1;
                let correctOption = -1;
                for (let i in question["styles"]) if (question["styles"][i] !== null) selectedOption = i;
                for (let i in question["options"]) if (question["options"][i] === question["correct_answer"]) correctOption = i;
                if (selectedOption !== -1) {
                    question["styles"][selectedOption] = {backgroundColor: 'red'};
                }
                question["styles"][correctOption] = {backgroundColor: 'green'};

                question["marks"] = (selectedOption === correctOption) ? 1 : 0;
            }
        }
    },
})

export const {setQuestions, setColor, clearColor, generateResult} = questionSlice.actions

export default questionSlice.reducer