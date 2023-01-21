export class FaqModel {
    public id: string;
    public question: string;
    public answer: string;

    constructor(
        id: string,
        question: string,
        answer: string
    ) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
}