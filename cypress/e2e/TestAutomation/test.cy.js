export class IndexPage {
    constructor() {
        this.birthDayInput = '#BirthdayStep1';
        this.provinceInput = '.select2-selection';
        this.phoneCodeBox = '#txtPhoneCode';
        this.phoneNumberBox = '#txtPhoneNumber';
        this.slider = '.min-slider-handle';
        this.accidentBtn = '#chkAccident';
        this.saveStep1Btn = '#btnSaveStep1';
      }
    async indexForm(birthDay, province, phoneCode, phoneNumber, slidermove) {
    cy.get(this.birthDayInput).type(birthDay);
    cy.get(this.provinceInput).type(province);
    cy.get(this.phoneCodeBox).type(phoneCode);
    cy.get(this.phoneNumberBox).type(phoneNumber);
    cy.get(this.slider).trigger('mousedown', { which: 1, pageX: 10, pageY: 10 })
    .trigger('mousemove', { which: 1, pageX: slidermove, pageY: 10 }) .trigger('mouseup');
    cy.get(this.accidentBtn).click();
    cy.get(this.saveStep1Btn).click();
   
   }
 }

 export class Step2Page {
    constructor() {
        this.heightBox = '#txtHeight';
        this.weightBox = '#txtWeight';
        this.saveStep2Btn = '#btnSaveStep2';
    }
    async secondForm(height,weight) {
        cy.get(this.heightBox).type(height);
        cy.get(this.weightBox).type(weight);
        cy.get(this.saveStep2Btn).click();
   }
 }

 export class RegisterUserPage {
    constructor() {
        this.nameBox = '#Name';
        this.surNameBox = '#Surname';
        this.idNumberBox = '#ID_Number';
        this.genderContainer = '#select2-Gender-container';
        this.select2 = 'li.select2-results__option';
        this.identificationGender = '#select2-IdentificationGenderType-container';
        this.civilStatus = '#select2-CivilStatus-container';
        this.emailBox = '#txtEmail';
        this.passWordBox = '#Password';
        this.streetBox = '#Street';
        this.houseNumberBox = '#HouseNumber';
        this.floorBox = '#Floor';
        this.apartamentBox = '#Apartment';
        this.zipCodeBox = '#zipCode';
        this.cityContainer = '#select2-city-container';
        this.registerBtn = '#btnRegister';
        

    }
    async thirdForm(name, surName, idNumber, gender, identification, statusCivil, email, passWord,
        street, houseNumber, floor, apartament, zipCode, city) {
        cy.get(this.nameBox).type(name);
        cy.get(this.surNameBox).type(surName);
        cy.get(this.idNumberBox).type(idNumber);
        cy.get(this.genderContainer).click();
        cy.contains(this.select2, gender).click();
        cy.get(this.identificationGender).click();
        cy.contains(this.select2,identification).click();
        cy.get(this.civilStatus).click();
        cy.contains(this.select2,statusCivil).click();
        cy.get(this.emailBox).type(email);
        cy.get(this.passWordBox).type(passWord);
        cy.get(this.streetBox).type(street);
        cy.get(this.houseNumberBox).type(houseNumber);
        cy.get(this.floorBox).type(floor);
        cy.get(this.apartamentBox).type(apartament);
        cy.get(this.zipCodeBox).type(zipCode);
        cy.get(this.cityContainer).click();
        cy.contains(this.select2, city).click();
        cy.get(this.registerBtn).click();
   }
 }

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

 export class CompleteCardPage {
    constructor() {
        this.cardNumberBox = '#CardNumber';
        this.submitStepBtn = '#btnSubmitStep4';
    }
    async creditCard(cardNumber) {
        cy.get(this.cardNumberBox).type(cardNumber);
        cy.get(this.submitStepBtn).click();
        
   }
 }
 
 export class AddMorePeoplePage {
    constructor() {
        this.submitFinalbtn = '.submitFinal';
    }
    async next() {
        cy.get(this.submitFinalbtn).click();
   }
 }

 export class SummaryPage {
    constructor() {
        this.tcBtn = '#chkTC';
        this.summaryBtn = '#btnSummarySubmit';
    }
    async acept() {
        cy.get(this.tcBtn).check();
        cy.get(this.summaryBtn).click();
   }
 }


//import { IndexPage } from 'cypress\e2e\pages\indexPage.js';


describe('pruebas',function(){
    const pageIndex = new IndexPage();
    const page2Step = new Step2Page();
    const pageRegister = new RegisterUserPage();
    const page4Step = new Step4Page();
    const pageCard = new CompleteCardPage();
    const pageAcept = new AddMorePeoplePage();
    const pageSummary = new SummaryPage();


    before(function(){
        cy.log("Precondiciones al set");
    })
    after(function(){
        cy.log("Postcondicones al set");
    })
    beforeEach(function(){
        cy.log("Empezando test");
        cy.visit('https://purchase-testing.klimber.com/ar/GroupLife/Index');
    })
    afterEach(function(){
        cy.log("Terminando test");
    })
    it('CasoFeliz',function(){
        pageIndex.indexForm('01/07/1980', 'Buenos Aires{enter}', '11', '23496789', 500);
        //esperar a la pagina https://purchase-testing.klimber.com/ar/GroupLife/Step2
        page2Step.secondForm('180', '90');
        //Vamos a la pagina Registration/RegisterUser
        pageRegister.thirdForm('Juan', 'Ramirez', '39144476', 'Femenino', 'Femenino', 'Soltera/o', 'testing3221@test1.com', 
        '1234567890', 'False', '1234', '01', '02', '1744', 'Cuartel V');
        //PAginaStep4
        page4Step.fourthForm('Argentina', 'Moreno', 'Empleado', '6000000', 'Sueldo');
        //PAginaStep5
        pageCard.creditCard('4548812049400004');
        //Step6
        pageAcept.next();
        //Step7Resume
        pageSummary.acept();
        //Finish
        cy.get('.form-group-custom > .title') .invoke('text').then((actualText) => {
          const expectedText = '¡Felicitaciones!';
          expect(actualText.trim()).to.equal(expectedText.trim());
        });
    })
})