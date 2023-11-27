export class Step2Page {
    constructor() {
        this.heightBox = '#txtHeight';
        this.weightBox = '#txtWeight';
        this.saveStep2Btn = '#btnSaveStep2';
    }
    async secondForm(height,weight) {
        cy.log("***Empezando a completar el Formulario para indice de masa corporal***");
        cy.get(this.heightBox).type(height);
        cy.get(this.weightBox).type(weight);
        cy.get(this.saveStep2Btn).click();
   }
 }
