export class Utils {
    constructor() {
    }
    emailRandom() {
        const numberRandom = Math.floor(Math.random() * 1000);
        const randomEmail = `testing${numberRandom}@testing.com`;
        return randomEmail;
   }
   dniRandom() {
    const min = 15000000;
    const max = 85000000;
    const randomDni = Math.floor(Math.random() * (max - min) + min);
    return randomDni;
}
 }