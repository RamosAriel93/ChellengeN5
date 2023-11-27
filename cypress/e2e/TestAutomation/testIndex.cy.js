import { IndexPage } from './indexpage';

describe('Testing index',function(){
    const pageIndex = new IndexPage();
   
    before(function(){
        cy.log("Cargando Datos para iniciar set de pruebas");
    })
    after(function(){
        cy.log("Set de pruebas finalizado");
    })
    beforeEach(function(){
        cy.log("Empezando test");
        cy.visit('https://purchase-testing.klimber.com/ar/GroupLife/Index');
    })
    afterEach(function(){
        cy.log("Test finalizado");
    })
    it('Check empty date of birth field',function(){
        cy.log('comprobar que no se pueda seguir sin dato de nacimiento');
        pageIndex.indexForm(' ', 'Buenos Aires{enter}', '11', '23496789', 500);
        pageIndex.getTextPopUp().then(textPopUp => {
        const textEspected = 'Falta completar este campo.';
        expect(textPopUp).to.equal(textEspected);
        cy.log('Corroboracion Exitosa');
            });
        });
    it('check invalid date of birth field',function(){
        cy.log('comprobar que no se pueda seguir con fecha de nacimiento invalida');
        pageIndex.indexForm('14/10/1066', 'Buenos Aires{enter}', '11', '23496789', 500);
        pageIndex.getTextPopUp().then(textPopUp => {
        const textEspected = 'La fecha que ingresaste es inválida';
        expect(textPopUp).to.equal(textEspected);
        cy.log('Corroboracion Exitosa');
            });
        });
    it('check empty phone number field',function(){
        cy.log('comprobar que no se pueda seguir sin numero de telefono');
        pageIndex.indexForm('14/10/1966', 'Buenos Aires{enter}', '11', ' ', 500);
        pageIndex.getTextPopUp().then(textPopUp => {
        const textEspected = 'Por favor, ingresá solo números.';
        expect(textPopUp).to.equal(textEspected);
        cy.log('Corroboracion Exitosa');
            });
        });
    it('check that it only supports numbers',function(){
        cy.log('comprobar que el campo solo admita numeros');
        pageIndex.indexForm('14/10/1966', 'Buenos Aires{enter}', '11', 'asdf', 500);
        pageIndex.getTextPopUp().then(textPopUp => {
        const textEspected = 'Por favor, ingresá solo números.';
        expect(textPopUp).to.equal(textEspected);
        cy.log('Corroboracion Exitosa');
            });
        });      
    it('check that the area code supports number',function(){
        cy.log('comprobar que el campo solo admita numeros');
        pageIndex.indexForm('14/10/1966', 'Buenos Aires{enter}', 'asdf', '23496789', 500);
        pageIndex.getTextPopUp().then(textPopUp => {
        const textEspected = 'Por favor, ingresá solo números.';
        expect(textPopUp).to.equal(textEspected);
        cy.log('Corroboracion Exitosa');
            });
        });     
    })
    
