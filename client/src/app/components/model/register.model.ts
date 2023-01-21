export class RegisterModel {
    public username: string;
    public email: string;
    public password: string;
    public address: string;
    public dob: string;
    public roleId: string;

    constructor(
        username: string,
        email: string,
        password: string,
        address: string,
        dob: string,
        roleId: string
    ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.address = address;
        this.dob = dob;
        this.roleId = roleId;
    }
}