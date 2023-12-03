export class SignupPage {
    constructor() {
        this.nextBtn = '.nf-btn';
        this.passInput = 'input[data-uia="field-password"]';
        this.nextBtnTwo = '.nf-btn';
        this.selectPlanBtn = '.planGrid__selectorLabel';
        this.selectPayment = '#creditOrDebitCardDisplayStringId';
        this.nextBtnTree = '.nf-btn';
        this.errorMessageTxt = '.default-ltr-cache-mkkf9p > span';
      
      }
    nextButton() {
    cy.log("***Click en Next***");
    cy.get(this.nextBtn).should('exist').click();
    }

    passWordInput(passWord){
    cy.log("***Ingresando Password***");
    cy.get(this.passInput).type(passWord);
    cy.get(this.nextBtn).should('exist').click();
    cy.wait(800);

    }

    errorMessage() {
      cy.log("***Extraer mensaje de error ***");
      return cy.get(this.errorMessageTxt).invoke('text');
  }


    nextButtonTwo() {
      cy.log("***Click en Next***");
      cy.get(this.nextBtnTwo).should('be.visible').click();
      }

    planGrid(selectPlan) {
      cy.log("***Eligiendo Plan***");
      cy.contains('span', selectPlan).should('exist').click();
      }
      

    paymentPicker(){
      cy.log("***Eligiendo Para Pagar***");
      cy.get(this.selectPayment,{ timeout: 10000 }).should('exist').click();
      cy.get('.nf-btn').should('exist').click();
      cy.wait(800);
    }

    nextButtonTree() {
      cy.log("***Click en Next***");
      cy.get(this.nextBtnTree).should('be.visible').click();
      }
    
 }