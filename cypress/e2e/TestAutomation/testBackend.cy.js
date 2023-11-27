
  class BackendTest {
    getToken() {
      return cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
        username: "admin",
        password: "password123",
        failOnStatusCode: false
      }).then((response) => {
        const statusResponse = response.status;
        Cypress.env('responseStatus', statusResponse);
        const token = response.body.token;
        Cypress.env('authToken', token);
        cy.log('Token: ' + token);
      });
    }
  
    createReservation(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) {
      return cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: {
            "firstname": firstname,
            "lastname": lastname,
            "totalprice": totalprice,
            "depositpaid": depositpaid,
            "bookingdates": {
              "checkin": checkin,
              "checkout": checkout
                },
            "additionalneeds": additionalneeds
        },
        
      }).then((response) => {
        const statusResponse = response.status;
        Cypress.env('responseStatus', statusResponse);
        const bookingid = response.body.bookingid;
        Cypress.env('bookingId', bookingid);
        const bodyFirtsName = response.body.booking.firstname;
        Cypress.env('bodyFirtsName', bodyFirtsName);
        cy.log('Numero de Reserva ' + JSON.stringify(response.body.bookingid));
      });
    }

    errorCreateReservation(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) {
        return cy.request({
          method: 'POST',
          url: 'https://restful-booker.herokuapp.com/booking',
          failOnStatusCode: false,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: {
              "firstname": firstname,
              "lastname": lastname,
              "totalprice": totalprice,
              "depositpaid": depositpaid,
              "bookingdates": {
                "checkin": checkin,
                "checkout": checkout
                  },
              "additionalneeds": additionalneeds
          },
          
        }).then((response) => {
          const statusResponse = response.status;
          Cypress.env('responseStatus', statusResponse);
        });
      }
  
    showReservationDetails() {
      const idBooking = Cypress.env('bookingId');
      return cy.request({
        method: 'GET',
        url: 'https://restful-booker.herokuapp.com/booking/' + idBooking,
        headers: {
          Accept: 'application/json'
        }
      }).then((response) => {
        const statusResponse = response.status;
        Cypress.env('responseStatus', statusResponse);
        const bodyLastName = response.body.lastname;
        Cypress.env('lastName', bodyLastName);
        const reservationDetails = response.body;
        cy.log('Detalles de la reserva :');
        for (const key in reservationDetails) {
          if (Object.prototype.hasOwnProperty.call(reservationDetails, key)) {
            cy.log(`${key}: ${JSON.stringify(reservationDetails[key])}`)
          }
        }
      });
    }
  
    editReservation(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) {
      const token = Cypress.env('authToken');
      const idBooking = Cypress.env('bookingId');
      return cy.request({
        method: 'PUT',
        url: 'https://restful-booker.herokuapp.com/booking/' + idBooking,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Cookie': 'token=' + token
        },
        body: {
                "firstname": firstname,
                "lastname": lastname,
                "totalprice": totalprice,
                "depositpaid": depositpaid,
                "bookingdates": {
                  "checkin": checkin,
                  "checkout": checkout
                    },
                "additionalneeds": additionalneeds
              }
      }).then((response) => {
        const statusResponse = response.status;
        Cypress.env('responseStatus', statusResponse);
        const bodyLastName = response.body.lastname;
        Cypress.env('lastName', bodyLastName);
        const bodyFirtsName = response.body.firstname;
        Cypress.env('bodyFirtsName', bodyFirtsName);
        const reservationDetails = response.body;
        cy.log('Detalles de la reserva :');
        for (const key in reservationDetails) {
          if (Object.prototype.hasOwnProperty.call(reservationDetails, key)) {
            cy.log(`${key}: ${JSON.stringify(reservationDetails[key])}`)
          }
        }
      });
    }
    parcialEditReservation(firstname, lastname, totalprice, depositpaid, checkin, checkout, additionalneeds) {
        const token = Cypress.env('authToken');
        const idBooking = Cypress.env('bookingId');
        return cy.request({
          method: 'PATCH',
          url: 'https://restful-booker.herokuapp.com/booking/' + idBooking,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cookie': 'token=' + token,
            failOnStatusCode: false
          },
          body:  {
            ...(firstname && { "firstname": firstname }),
            ...(lastname&&{"lastname": lastname}),
            ...(totalprice&&{"totalprice": totalprice}),
            ...(depositpaid&&{"depositpaid": depositpaid}),
            "bookingdates": {
                ...(checkin && { "checkin": checkin }),
                ...(checkout && { "checkout": checkout })
                },
            ...(additionalneeds&&{"additionalneeds": additionalneeds})
          }
        }).then((response) => {
          const statusResponse = response.status;
          Cypress.env('responseStatus', statusResponse);
          const dayCheckout = response.body.bookingdates.checkout;
          Cypress.env('checkout', dayCheckout);
          const additional = response.body.additionalneeds;
          Cypress.env('additionalneeds', additional);
          const reservationDetails = response.body;
          cy.log('Detalles de la reserva :');
          for (const key in reservationDetails) {
            if (Object.prototype.hasOwnProperty.call(reservationDetails, key)) {
              cy.log(`${key}: ${JSON.stringify(reservationDetails[key])}`)
            }
          }
        });
      }
      deleteReservation() {
        const token = Cypress.env('authToken');
        const idBooking = Cypress.env('bookingId');
        return cy.request({
          method: 'DELETE',
          url: 'https://restful-booker.herokuapp.com/booking/' + idBooking,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cookie': 'token=' + token
          },
          body:  {}
        }).then((response) => {
          const statusResponse = response.status;
          Cypress.env('responseStatus', statusResponse);
          cy.log('Reserva eliminada');
        });
      }
  }
  


  describe('backend test', () => {
    const backendTest = new BackendTest();

    before(function(){
        cy.log("Cargando Datos para iniciar set de pruebas");
    })
    after(function(){
        cy.log("Set de pruebas finalizado");
    })
    beforeEach(function(){
        cy.log("Empezando test");
    })
    afterEach(function(){
        cy.log("Test finalizado");
    })
  
    it('Token', () => {
        backendTest.getToken().then(() => {
        const authToken = Cypress.env('authToken');
        const status = Cypress.env('responseStatus');
        expect(status).to.eq(200);
        expect(authToken).to.be.a('string');
        });
    });
  
    it('Create a new reservation', () => {
        backendTest.createReservation('Alex', "Peres", 5000, true, "2024-03-01", "2024-02-01","Breakfast").then(() => {
        const status = Cypress.env('responseStatus');
        expect(status).to.eq(200);
        const bookingid = Cypress.env('bookingId');
        expect(bookingid).to.not.be.null;
        const firtsName = Cypress.env('bodyFirtsName');
        expect(firtsName).to.contains('Alex');
        });

    });
  
    it('Show reservation details', () => {
        backendTest.showReservationDetails().then(() => {
        const status = Cypress.env('responseStatus');
        expect(status).to.eq(200);
        const bookingid = Cypress.env('bookingId');
        expect(bookingid).to.not.be.null;
        const lastName = Cypress.env('lastName');
        expect(lastName).to.contains('Peres');
        });
    });
  
    it('Edit reservation', () => {
        backendTest.editReservation("Alejandro", "Perez", 4500, true, "2024-03-10", "2024-02-01","No Breakfast").then(() => {
            const status = Cypress.env('responseStatus');
            expect(status).to.eq(200);
            const bookingid = Cypress.env('bookingId');
            expect(bookingid).to.not.be.null;
            const firtsName = Cypress.env('bodyFirtsName');
            expect(firtsName).to.contains('Alejandro');
            const lastName = Cypress.env('lastName');
            expect(lastName).to.contains('Perez');
            });
    });

    it('Parcial edit reservation', () => {
        backendTest.parcialEditReservation(null, null, null, null, null, "2024-02-10","Breakfast Veggie").then(() => {
            const status = Cypress.env('responseStatus');
            expect(status).to.eq(200);
            const bookingid = Cypress.env('bookingId');
            expect(bookingid).to.not.be.null;
            const dayCheckout = Cypress.env('checkout');
            expect(dayCheckout).to.contains('2024-02-10');
            const additional = Cypress.env('additionalneeds');
            expect(additional).to.contains('Breakfast Veggie');
        });
    });

    it('Delete reservation', () => {
        const status = Cypress.env('responseStatus');
        backendTest.deleteReservation();
        expect(status).to.eq(200);
    });

    it('Pass Faill new reservation', () => {
        backendTest.errorCreateReservation(null, null, 5000, true, "2024-03-01", "2024-02-01","Breakfast" ).then(() => {
            const status = Cypress.env('responseStatus');
            expect(status).to.eq(500);
        });
    });

    it('Faill new reservation', () => {
        backendTest.createReservation(null, null, 5000, true, "2024-03-01", "2024-02-01","Breakfast" ).then(() => {
            const status = Cypress.env('responseStatus');
            expect(status).to.eq(500);
        });
    });

  });