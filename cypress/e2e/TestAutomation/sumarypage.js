export class SummaryPage {
    constructor() {
        this.tcBtn = '#chkTC';
        this.summaryBtn = '#btnSummarySubmit';
    }
    async acept() {
        cy.log("***Aceptamos los terminos y condiciones***");
        cy.get(this.tcBtn).check();
        cy.get(this.summaryBtn).click();
   }
 }