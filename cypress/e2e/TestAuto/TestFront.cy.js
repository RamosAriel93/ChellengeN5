const BASE_URL = 'https://www.netflix.com';
import { IndexPage } from './IndexPage';
import { SignupPage } from './SignupPage';
import { Utils } from './Utils';
import { CreditoptionPage } from './creditoptionPage';


describe('Testing Web Netflix',function(){
    const pageIndex = new IndexPage();
    const pageRegistration = new SignupPage();
    const utils = new Utils;
    const pageCredit = new CreditoptionPage();
   
    before(function(){
        cy.log("Cargando Datos para iniciar set de pruebas");
    })
    after(function(){
        cy.log("Set de pruebas finalizado");
    })
    beforeEach(function(){
        cy.log("Empezando test");
        cy.visit(BASE_URL);
        cy.viewport(1360, 768);//Aumentar el tamaño de la pantalla ya que Cypress no tiene Maximize() como otros fraworks.
    })
    afterEach(function(){
        cy.log("Test finalizado");
        cy.screenshot(this.currentTest.title + '_screenshot');
    })
    it('Print Title & Print URL', function () {

    pageIndex.printTitle().then((title) => {
        let pageTitleExpected = 'Netflix Argentina - Watch TV Shows Online, Watch Movies Online';
        
        cy.log('Título de la página: ' + title);
        expect(title).to.equal(pageTitleExpected);
        cy.addContext('Título de la página: ' + title);
        });

    pageIndex.printUrl().then((url) => {
        let pageUrlExpected = 'https://www.netflix.com/ar-en/';

        cy.log('La URL es: ' + url);
        expect(url).to.equal(pageUrlExpected);
        cy.addContext('URL de la página: ' + url);
        });
      });

    it('Complete Registration',function(){
        this.emailRand = utils.emailRandom();
        pageIndex.emailIndex(this.emailRand);
        pageRegistration.nextButton();
        pageRegistration.passWordInput('1234567890');
        pageRegistration.nextButtonTwo();
        pageRegistration.planGrid('Premium');
        pageRegistration.nextButtonTree();
        pageRegistration.paymentPicker();
        pageCredit.completeCredit('5540500001000004', '12/24', '989', 'Juan Perez');
        pageCredit.membershipButton();
        cy.log('Formulario Completo Correctamente');
     }); 

     it('User Exist',function(){
        this.emailRand = utils.emailRandom();
        pageIndex.emailIndex('testing@gmail.com');
        pageRegistration.nextButton();
        pageRegistration.passWordInput(' ');
        pageRegistration.errorMessage().then((errorMessageText) => {
        let expectedText = 'Your password must contain between 4 and 60 characters.';
        expect(errorMessageText.trim()).to.equal(expectedText.trim());
        cy.log('El usuario ya existe');
        })
     }); 


})
