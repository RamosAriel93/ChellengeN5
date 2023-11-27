export class Step4Page {
    constructor() {
        this.nationalityContainer = '#select2-Nationality-container';
        this.select2 = 'li.select2-results__option';
        this.placeBirth = '#PlaceOfBirth';
        this.occupationBox = '#txtOccupation';
        this.salaryAnualBox = '#txtSalaryAnual';
        this.incomeContainer = '#select2-txtAnnualIncome-container';
        this.saveInfoBtn = '#btnSaveInfo';
    }

    async fourthForm(nationality, placeB, occupation, salary, income) {
        cy.log("***Completando datos para registrarme***");
        cy.get(this.nationalityContainer).click();
        cy.contains(this.select2, nationality).click();
        cy.get(this.placeBirth).type(placeB);
        cy.get(this.occupationBox).type(occupation);
        cy.get(this.salaryAnualBox).type(salary);
        cy.get(this.incomeContainer).click();
        cy.contains(this.select2, income).click();
        cy.get(this.saveInfoBtn).click();
 }
 }
