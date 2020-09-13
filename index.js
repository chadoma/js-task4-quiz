import Quiz from './js/models/Quiz.js';
import * as quizView from './js/views/quizView.js';
import { elements, renderLoader, clearLoader } from './js/views/basis.js';


//取得したクイズを保存するobj
let quiz = {};

const controlQuiz = async () => {

    //Quiz classを初期化
    quiz = new Quiz();
    //loaderを消す関数
    clearLoader();
    //loaderを出す関数
    renderLoader();
    try {
        //クイズを取得
        await quiz.getQuestions();
        clearLoader();

        //取得してきたクイズをrenderする為に整形する関数
        quizView.createRenderQuiz(quiz.result);
    } catch (err) {
        console.log(`ERROR:::${ err }`);
    }


};

// .startか.answerかのeventを振り分け
elements.searchForm.addEventListener('click', (e) => {

    if (e.target.matches('.start')) {
        controlQuiz();

    } else if (e.target.matches('.answer-btn')) {

        //回答が合っているか判断する関数
        quizView.targetText(e.target.textContent);

        //クイズを表示する関数
        quizView.renderQuiz(quiz.result);
    }
});




