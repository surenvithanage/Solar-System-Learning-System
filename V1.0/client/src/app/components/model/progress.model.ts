
export class ProgressModel {
    public id: string;
    public userId: string;
    public quizId: string;
    public quiz: string;
    public progress: number;
    public marks: string;

    constructor(
        id: string,
        userId: string,
        quizId: string,
        quiz: string,
        progress: number,
        marks: string
    ) {
        this.id = id;
        this.userId = userId;
        this.quizId = quizId;
        this.quiz = quiz;
        this.progress = progress;
        this.marks = marks;
    }
}