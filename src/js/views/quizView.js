import { elements } from "./basis.js";

//何問目か？
//どのクイズが出題されたか
//何問正解したか
//正解
let data = {
    quizCounter: 0,
    choiceQuizIndex: 0,
    correctAnsCounter: 0,
    correctAnswer: ''
};


//クイズを表示する関数
export const renderQuiz = (quiz) => {
    if (quiz.length > 0) {
        //重複表示を防止する関数
        removeElement();

        //randomにquizをchoice
        //正解をdataObjへ
        data.choiceQuizIndex = Math.floor(Math.random() * quiz.length);
        data.correctAnswer = quiz[data.choiceQuizIndex].correct_answer;


        // .question-container内に諸々表示
        const items = `
    <h2 class="title">問題${ data.quizCounter + 1 }</h2>
    <ul class="sub-items">
      <li class="sub-item"><h3 class="sub-title">[ジャンル] ${ quiz[data.choiceQuizIndex].category }</h3></li>
      <li class="sub-item"><h3 class="sub-title">[難易度] ${ quiz[data.choiceQuizIndex].difficulty }</h3></li>    
    </ul>
    <p class="question">${ quiz[data.choiceQuizIndex].question }</p> 
  `;
        elements.questionContainer.insertAdjacentHTML('beforeend', items);


        // .search内に諸々表示
        let ulElm = document.createElement('ul');
        ulElm.classList.add('answer-items');

        elements.searchForm.appendChild(ulElm);
        quiz[data.choiceQuizIndex].incorrect_answers.forEach((question, index) => {
            const correctBtn = `
       <li class="answer-item"><button type="button" class="answer-btn">${ question }</button></li>
  `;
            ulElm.insertAdjacentHTML('beforeend', correctBtn);
        });

        //quizCounterを更新
        data.quizCounter++;
        //出されたクイズをobjから削除する関数
        removeChoiceQuiz(quiz);

    } else {
        //何問正解したか表示する関数
        renderNumOfCorrectAns();
    }

};


//ページ表示変更
//正解数表示
export const renderNumOfCorrectAns = () => {
    removeElement();
    const items =
        `
    <h2 class="title">あなたの正答数は${ data.correctAnsCounter }です!!</h2>
    <p class="question">再度チャレンジしたい場合は以下をクリック!</p> 
   
  `;
    elements.questionContainer.insertAdjacentHTML('beforeend', items);

    const nextBtn = `
       <button type="button" onclick="location.reload()">ホームに戻る</button>
    `;
    elements.searchForm.insertAdjacentHTML('beforeend', nextBtn);
};


// quizを作成
// correct_answerをincorrect_answersに含める
// incorrect_answersをシャッフル
export const createRenderQuiz = quiz => {
    quiz.forEach((q) => {
        if (q.correct_answer) {
            q.incorrect_answers.push(q.correct_answer);
            q.incorrect_answers.sort(() => Math.random() - .5);
        }
    });
    renderQuiz(quiz);
};

//重複表示防止の為の関数
export const removeElement = () => {
    while (elements.questionContainer.firstChild) {
        elements.questionContainer.removeChild(elements.questionContainer.firstChild);
    }
    while (elements.searchForm.firstChild) {
        elements.searchForm.removeChild(elements.searchForm.firstChild);
    }
};

//出されたクイズをobjから削除する関数
export const removeChoiceQuiz = (quiz) => {
    quiz.splice(data.choiceQuizIndex, 1);
};


//回答が正解か判断する関数
export const targetText = (targetText) => {
    console.log(data.correctAnswer);
    const answer = targetText.toLowerCase().trim();
    const correct = data.correctAnswer.toLowerCase().trim();
    console.log(answer, correct);
    if (answer === correct) {
        data.correctAnsCounter++;
    }
    data.correctAnswer = '';
};





