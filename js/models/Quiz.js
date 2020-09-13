export default class Quiz {
constructor() {

}
    //quizをfetchしてくる関数
    async getQuestions() {
        try {
            const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
            const data = await res.json();
            this.result = data.results;

        } catch (err) {
            console.log(`ERROR::${ err }`);
        }
    }
}
