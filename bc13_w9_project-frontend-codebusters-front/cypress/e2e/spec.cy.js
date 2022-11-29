/* eslint-disable no-undef */
const url = 'localhost:3000'


describe('empty spec', () => {
  it('passes', () => {

    cy.visit(url)
  })
})

describe('it loads the start page and clicks any language', () => {
  it('passes', () => {

    cy.visit(url)

    cy.get('.langButtonEnglish').click();

    cy.visit(url)

    cy.get('.langButtonSpanish').click();

    cy.visit(url)

    cy.get('.langButtonFrench').click();

    cy.visit(url)

    cy.get('.langButtonGerman').click();
  })
})

describe('testing language buttons', () => {
  it('passes', () => {

    cy.visit(url)

    cy.get('.langButtonEnglish').click();

    cy.get('.spanishButton').click()

    cy.get('.frenchButton').click()

    cy.get('.germanButton').click()

    cy.get('.englishButton').click()

    cy.visit(url)

    cy.get('.langButtonSpanish').click();

    cy.get('.englishButton').click()

    cy.get('.frenchButton').click()

    cy.get('.germanButton').click()

    cy.get('.spanishButton').click()

    cy.visit(url)

    cy.get('.langButtonGerman').click();

    cy.get('.englishButton').click()

    cy.get('.frenchButton').click() 

    cy.get('.spanishButton').click()

    cy.get('.germanButton').click()

    cy.visit(url)

    cy.get('.langButtonFrench').click();

    cy.get('.englishButton').click()

    cy.get('.spanishButton').click()

    cy.get('.germanButton').click()

    cy.get('.frenchButton').click() 

  })
})

describe('counts list elements', () => {
  it('passes', () => {

    cy.visit(url)

    cy.get('.langButtonEnglish').click();

    cy.get('.getAllButton').click();

    cy.get('.object-list-container > .list-container').should('have.length', 1)
  })
})

// cy.get('#tweets-list > li').should('have.length', 3)