export class IndexPage {
    constructor() {
        this.emailInput = 'input[data-uia="field-email"]';
        this.startedBtn = 'Get Started';
                }
    
    printTitle(){          
        cy.title().then((pageTitle) => {
        cy.log('Título de la página: ' + pageTitle);
        });
    }

    printUrl(){  
        cy.url().then((pageUrl) => {
        cy.log('La URL es: ' + pageUrl);     
        });
    }

    emailIndex(email) {
        cy.log("***Ingresando email***");
        cy.get(this.emailInput).eq(0).type(email);
        cy.contains('button', this.startedBtn).should('exist').click();
    }
  
 }