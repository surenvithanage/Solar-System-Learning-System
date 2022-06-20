export class QuizModel {
    public id: string;
    public title: string;
    public description: string;
    public quizFile: any;

    constructor(
        id: string,
        title: string,
        description: string,
        quizFile: any
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.quizFile = quizFile;
    }
}