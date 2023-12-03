export class Utils {
    constructor() {
    }
    emailRandom() {
        const numberRandom = Math.floor(Math.random() * 1000);
        const randomEmail = `testing${numberRandom}@testing.com`;
        return randomEmail;
    }
 }