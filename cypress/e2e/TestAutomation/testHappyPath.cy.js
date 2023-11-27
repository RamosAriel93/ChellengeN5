import { IndexPage } from './indexpage';
import { Step2Page } from './step2page';
import { RegisterUserPage } from './registerpage';
import { Step4Page } from './step4page';
import { CompleteCardPage } from './completecardpage';
import { AddMorePeoplePage } from './addmorepeoplepage';
import { SummaryPage } from './sumarypage';
import { Utils } from './utils';



describe('pruebas',function(){
    const pageIndex = new IndexPage();
    const page2Step = new Step2Page();
    const pageRegister = new RegisterUserPage();
    const page4Step = new Step4Page();
    const pageCard = new CompleteCardPage();
    const pageAcept = new AddMorePeoplePage();
    const pageSummary = new SummaryPage();
    const utils = new Utils();
    


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
    it('Happy Path',function(){
        pageIndex.indexForm('01/07/1980', 'Buenos Aires{enter}', '11', '23496789', 500);//esperar a la pagina https://purchase-testing.klimber.com/ar/GroupLife/Step2
        page2Step.secondForm('180', '90');//Vamos a la pagina Registration/RegisterUser
        this.emailRand = utils.emailRandom();
        this.dniRand = utils.dniRandom();
        pageRegister.thirdForm('Juan', 'Ramirez', this.dniRand, 'Femenino', 'Femenino', 'Soltera/o', this.emailRand, 
        '1234567890', 'False', '1234', '01', '02', '1744', 'Cuartel V');//PAginaStep4
        page4Step.fourthForm('Argentina', 'Moreno', 'Empleado', '6000000', 'Sueldo');//PAginaStep5
        pageCard.creditCard('4548812049400004');//Step6
        pageAcept.next();//Step7Resume
        pageSummary.acept();
        //Finish
        cy.log("***Verificamos si el formulario se creo correctamente***");
        cy.get('.form-group-custom > .title') .invoke('text').then((actualText) => {
          const expectedText = '¡Felicitaciones!';
          expect(actualText.trim()).to.equal(expectedText.trim());
          cy.log("***Formulario completado con Exito***");
        });
    })
    
})
