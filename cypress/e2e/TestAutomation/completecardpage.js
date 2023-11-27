export class CompleteCardPage {
    constructor() {
        this.cardNumberBox = '#CardNumber';
        this.submitStepBtn = '#btnSubmitStep4';
    }
    async creditCard(cardNumber) {
        cy.log("***Ingresando metodo de pago***");
        cy.get(this.cardNumberBox).type(cardNumber);
        cy.get(this.submitStepBtn).click();
        
   }
 }
 