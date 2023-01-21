export class UserModel {
    public username: string;
    public email: string;
    public address: string;
    public dob: string;

    constructor(
        username: string,
        email: string,
        address: string,
        dob: string,
    ) {
        this.username = username;
        this.email = email;
        this.address = address;
        this.dob = dob;
    }
}