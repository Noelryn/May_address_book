describe('user can create a contact', () => {
  it('test', () =>{
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
    cy.get('#name').type ('Noel')
    cy.get('#email').type ('noel@email.com')
    cy.get('#phone').type ('0976452623')
    cy.get('#company').type('Craft Academy')
    cy.get('#notes').type ('Is a coach at craft academy')
    cy.get('#twitter').type('@NOELRYAN')
    cy.get('#submit').click()
  })

  it('displays a name of the new contact', () => {
    cy.get('#contact-list').should('contain', 'Noel')
  })

  it('displays a phone number of the new contact', () => {
    cy.get('#contact-list').should('contain', '0976452623')
  })

})