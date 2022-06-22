"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mailList_1 = __importDefault(require("./mailList"));
class Email {
    constructor(to, from, title, message) {
        this._to = to;
        this._from = from;
        this._title = title;
        this._message = message;
    }
    set To(to) { this._to = to; }
    ;
    get To() { return this._to; }
    ;
    set From(from) { this._from = from; }
    ;
    get From() { return this._from; }
    ;
    set Title(title) {
        if (title.length <= 20)
            this._title = title;
        throw Error('title must be 20 characters');
    }
    ;
    get Title() { return this._title; }
    ;
    set Message(message) { this._message = message; }
    ;
    get Message() { return this._message; }
    ;
    infoEmail() {
        return `From: ${this._from} to ${this._to}
        ${this._title}
        ${this._message}`;
    }
    ;
}
exports.default = Email;
const email1 = new Email('myCompany@gmail.com', 'company1@gmail.com', 'sarapatel', 'There s a new car wash in town. Did you know?');
const email2 = new Email('friend@personalmail.com', 'me@personalmail.com', 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
const email3 = new Email('me@personalmail.com', 'friend@personalmail.com', 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
const email4 = new Email('me@companymail.com', 'ceo@companymail.com', 'Day off monday', `Next Tuesday is a holiday. Are we going to work on Monday?`);
const email5 = new Email('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
const personalEmail = new mailList_1.default([email1, email2, email3]);
const profissionalEmail = new mailList_1.default([email4, email5]);
personalEmail.getAll();
