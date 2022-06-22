import Email from "./emailExercise";

class MailList {
    private _emailList: Email[];

    constructor(emailList: Email[]) {
        this._emailList = emailList;
    }

    public getAll(): Email[] {
        console.log(this._emailList)
        return this._emailList;
    }

    public getByEmailFrom(searchFrom: string): Email[] {
        return this._emailList.filter((email) => {
            email.From === searchFrom
        });
    }

    public getByEmailTo(searchTo: string): Email[] {
        return this._emailList.filter((email) => {
            email.To === searchTo
        });
    }

    public getByTitle(searchTitle: string): Email[] {
        return this._emailList.filter((email) => {
            email.Title === searchTitle;
        })
    }
    
    public addEmail(newEmail: Email): void { this._emailList.push(newEmail) };

    public removeEmail(mailToRemove: Email): void {
        this._emailList = this._emailList.filter((email) => email !== mailToRemove);
    }
}

export default MailList;