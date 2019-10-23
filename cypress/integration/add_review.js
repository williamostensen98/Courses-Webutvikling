import axios from 'axios'
var REVIEW_TEXT = "This course is amazing!"

// Refering to the documentation for Cypress, this test sets up an local development server on localhost. 
// Src: https://docs.cypress.io/guides/getting-started/testing-your-app.html#Step-1-Start-your-server


describe('Test to write an invalid review with difficulty out of range', function() {
    it('Searches for a course and tries to add a invalid review and a rating of the difficulty out of range.', function() {
    //  Executing start of backend and frontend 
    //   cy.exec('npm start --prefix backend/')
    //   cy.exec('npm start --prefix frontend/')
      cy.visit('http://localhost:3000')
      cy.get('.mr-sm-2').type('IT2805')
      cy.get('form').contains("Search").click()
      cy.get('.col > .fas').click()
      cy.get('#rating > .mt-4').click()
      cy.get('#review').type(REVIEW_TEXT)
      cy.get('#difficulty').type('6')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.get('#review').should("have.value", 'This course is amazing!')
      cy.get('#difficulty').should("have.value", '6')
    })
  })

  describe('Test to write a valid review',  function() {
    it('Searches for a course and adds a review and a rating of the difficulty.', function() {
      cy.visit('http://localhost:3000')
      cy.get('.mr-sm-2').type('IT2805')
      cy.get('form').contains("Search").click()
      cy.get('.col > .fas').click()
      cy.get('#rating > .mt-4').click()
      cy.get('#review').type(REVIEW_TEXT)
      cy.get('#difficulty').type('5')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.get('#review').should("have.value", '')
      cy.get('#difficulty').should("have.value", '')

    })
  })

  describe('Test that database was updated with the written review', function() {
      it('Access the DB directly and searches the course document for the written review', function() {
      cy.request('GET', 'http://it2810-39.idi.ntnu.no:3001/courses/IT2805').as('course')
      cy.get('@course').should((response) => {
          expect(response.body[0].reviews).to.contain(REVIEW_TEXT)
      })
      })
  })

