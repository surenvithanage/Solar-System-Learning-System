export class EndpointModel {
    public id: string;
    public title: string;
    public description: string;
    public uri: string;

    constructor(
        id: string,
        title: string,
        description: string,
        uri: string
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.uri = uri;
    }
}