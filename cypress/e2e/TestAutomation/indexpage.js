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
    cy.log("***Empezando a completar el primer Formulario***");
    cy.get(this.birthDayInput).should('exist').type(birthDay);
    cy.get(this.provinceInput).should('exist').type(province);
    cy.get(this.phoneCodeBox).should('exist').type(phoneCode);
    cy.get(this.phoneNumberBox).should('exist').type(phoneNumber);
    cy.get(this.slider).should('exist').trigger('mousedown', { which: 1, pageX: 10, pageY: 10 })
    .trigger('mousemove', { which: 1, pageX: slidermove, pageY: 10 }) .trigger('mouseup');
    cy.get(this.accidentBtn).should('exist').click();
    cy.get(this.saveStep1Btn).should('exist').click();
   }

   // Método para extraer el texto del pop-up
    getTextPopUp() {
    return cy.get('.ui-pnotify-text',{ timeout: 10000 }).should('be.visible').invoke('text').then(texto => {
      return texto.trim();
    });
  }
 }