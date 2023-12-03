export class IndexPage {
    constructor() {
        this.emailInput = 'input[data-uia="field-email"]';
        this.startedBtn = 'Get Started';
                }
    
    printTitle(){          
        return cy.title().then((pageTitle) => {
        return pageTitle;
        });
    }

    printUrl(){  
        return cy.url().then((pageUrl) => {
        return pageUrl;     
        });
    }

    emailIndex(email) {
        cy.log("***Ingresando email***");
        cy.get(this.emailInput).eq(0).type(email);
        cy.contains('button', this.startedBtn).should('exist').click();
    }
  
 }