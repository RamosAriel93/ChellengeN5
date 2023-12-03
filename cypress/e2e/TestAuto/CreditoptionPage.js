export class CreditoptionPage {
    constructor() {
        this.cardInput = '#id_creditCardNumber';
        this.cvvInput = '#id_creditCardSecurityCode';
        this.dueDateInput = '#id_creditExpirationMonth';
        this.firtsNameInput = '#id_firstName';
        this.membershipBtn = '.nf-btn';
        
        }


    completeCredit(card, date, cvv, nameCard) {
        cy.get(this.cardInput).type(card,{force: true});
        cy.get(this.dueDateInput).type(date, { force: true });
        cy.get(this.cvvInput).type(cvv);
        cy.get(this.firtsNameInput).type(nameCard);
   
    }

    membershipButton(){
        cy.get(this.membershipBtn).should('be.enabled');
    }
  
 }