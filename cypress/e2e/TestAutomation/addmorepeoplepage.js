export class AddMorePeoplePage {
    constructor() {
        this.submitFinalbtn = '.submitFinal';
    }
    async next() {
        cy.log("***No agregamos mas beneficiarios y continuamos***");
        cy.get(this.submitFinalbtn).click();
   }
 }