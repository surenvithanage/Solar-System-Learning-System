export class ProgressModel {
    public id: string;
    public userId: string;
    public quizId: string;
    public marks: string;
    public progress: string;

    constructor(
        id: string,
        userId: string,
        quizId: string,
        marks: string,
        progress: string
    ) {
        this.id = id;
        this.userId = userId;
        this.quizId = quizId;
        this.marks = marks;
        this.progress = progress;
    }
}