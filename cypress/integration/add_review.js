import axios from 'axios'

describe('Test to write an invalid review with difficulty out of range', function() {
    it('Searches for a course and tries to add a invalid review and a rating of the difficulty out of range.', function() {
      cy.visit('http://localhost:3000')
      cy.get('.mr-sm-2').type('IT2805')
      cy.get('form').contains("Search").click()
      cy.get('.col > .fas').click()
      cy.get('#rating > .mt-4').click()
      cy.get('#review').type("This course is amazing!")
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
      cy.get('#review').type("This course is amazing!")
      cy.get('#difficulty').type('5')
      cy.get(':nth-child(2) > form > .btn').click()
      cy.get('#review').should("have.value", '')
      cy.get('#difficulty').should("have.value", '')
      // Tests that form field clears after submiting a valid review.

    })
  })

