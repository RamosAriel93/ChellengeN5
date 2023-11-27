

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
        cy.log("***Completando datos para registrarme***");
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
