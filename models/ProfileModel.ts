import { User } from "next-auth";

export class ProfileModel {
    public readonly name:string;
    public readonly email:string;
    public readonly image:string;
    constructor(name:string, email:string, image:string) {
        this.name = name;
        this.email = email;
        this.image = image;
    }
}