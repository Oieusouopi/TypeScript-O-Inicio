import MailList from "./mailList";

class Email {
    private _to: string;
    private _from: string;
    private _title: string;
    private _message: string;

    constructor(to: string, from: string, title: string, message: string) {
        this._to = to;
        this._from = from;
        this._title = title;
        this._message = message;
    }

    public set To(to: string) { this._to = to };

    public get To(): string { return this._to };

    public set From(from: string) { this._from = from };

    public get From(): string { return this._from };

    public set Title(title: string) {
        if (title.length <= 20) this._title = title;
        throw Error('title must be 20 characters');
    };

    public get Title(): string { return this._title };

    public set Message(message: string) { this._message = message };

    public get Message(): string { return this._message};

    public infoEmail(): string {
        return `From: ${ this._from } to ${ this._to }
        ${ this._title }
        ${ this._message }`;
    };
}

export default Email;

const email1 = new Email(
    'myCompany@gmail.com',
    'company1@gmail.com',
    'sarapatel',
    'There s a new car wash in town. Did you know?'
);

const email2 = new Email(
  'friend@personalmail.com',
  'me@personalmail.com',
  'Reply - Car wash',
  'Great! My car is really dirty. How much do they charge?'
);

const email3 = new Email(
  'me@personalmail.com',
  'friend@personalmail.com',
  'Reply - Reply - Car wash',
  '$5.00, and you get a free polishing cloth'
);

const email4 = new Email(
  'me@companymail.com',
  'ceo@companymail.com',
  'Day off monday',
  `Next Tuesday is a holiday. Are we going to work on Monday?`
);

const email5 = new Email(
  'ceo@companymail.com',
  'me@companymail.com',
  'Reply - Day off monday',
  'The entire company will have a day off on monday =D'
);

const personalEmail = new MailList([email1, email2, email3]);
const profissionalEmail = new MailList([email4, email5]);

personalEmail.getAll();