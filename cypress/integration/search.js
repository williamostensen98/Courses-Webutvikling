describe('Testing the search bar', function() {
  it('Finds the search bar and searches for course code. Checks if result is correct.', function() {
    cy.visit('http://localhost:3000')
    cy.get('.mr-sm-2')
    .type('IT2805')
    .should('have.value', 'IT2805')
    cy.get('form').contains("Search").click()
    assert(cy.get('.col-9 > h5').contains('IT2805'))
    cy.get('.col > .fas').click()
  })
})

describe('Testing that searching for something not in the database returns an message that no results were found', function() {
  it('Finds the search bar and searches for an invlaid course code. Checks that it does not return any results.', function() {
    cy.visit('http://localhost:3000')
    cy.get('.mr-sm-2')
    .type('WEB2110')
    cy.get('form').contains("Search").click()
    cy.get('h4').contains("The search got no results")
    
  })
})