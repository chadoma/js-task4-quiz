export const elements = {
    title: document.querySelector('.title'),
    elmContainer: document.querySelector('.container'),
    questionContainer: document.querySelector('.question-container'),
    questionText: document.querySelector('.question'),
    searchForm: document.querySelector('.search'),
    startButton: document.querySelector('.start'),
    backStartButton: document.querySelector('.back-start'),
    removeButton: document.querySelector('.remove'),
    subItem: document.querySelector('.sub-items')
};


//quiz取得中はloaderを出す関数
export const renderLoader = () => {
    const loader = `
    <ul class="sub-items"></ul>
    <h2 class="title">取得中</h2>
    <p class="question">少々お待ちください</p>
  `;

    elements.questionContainer.insertAdjacentHTML('afterbegin', loader);
};

//loaderを消す関数
export const clearLoader = () => {
    elements.questionContainer.innerHTML = '';
};
