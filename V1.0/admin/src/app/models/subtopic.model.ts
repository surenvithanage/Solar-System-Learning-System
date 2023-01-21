export class SubTopicModel {
    public id: string;
    public title: string;
    public description: string;
    public topicId: string;

    constructor(
        id: string,
        title: string,
        description: string,
        topicId: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.topicId = topicId;
    }
}