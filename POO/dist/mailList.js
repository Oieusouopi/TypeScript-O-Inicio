"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailList {
    constructor(emailList) {
        this._emailList = emailList;
    }
    getAll() {
        console.log(this._emailList);
        return this._emailList;
    }
    getByEmailFrom(searchFrom) {
        return this._emailList.filter((email) => {
            email.From === searchFrom;
        });
    }
    getByEmailTo(searchTo) {
        return this._emailList.filter((email) => {
            email.To === searchTo;
        });
    }
    getByTitle(searchTitle) {
        return this._emailList.filter((email) => {
            email.Title === searchTitle;
        });
    }
    addEmail(newEmail) { this._emailList.push(newEmail); }
    ;
    removeEmail(mailToRemove) {
        this._emailList = this._emailList.filter((email) => email !== mailToRemove);
    }
}
exports.default = MailList;
