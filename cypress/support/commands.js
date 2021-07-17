/// <reference types="Cypress" />

const faker = require('faker');
faker.locale = 'pt_BR';

Cypress.Commands.add('cadastrarSemNome', () => {
  cy.get('#email').type(faker.internet.email());
  cy.get('#password').type('12345678');
});

Cypress.Commands.add('cadastrarSemEmail', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#password').type('12345678');
});

Cypress.Commands.add('cadastrarSemSenha', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#email').type(faker.internet.email());
});

Cypress.Commands.add('cadastrarNomeIncorreto', () => {
  cy.get('#name').type(faker.random.word());
  cy.get('#email').type(faker.internet.email());
  cy.get('#password').type('12345678');
});

Cypress.Commands.add('cadastrarEmailIncorreto', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#email').type('testeemail.exemplo.com');
  cy.get('#password').type('12345678');
});

Cypress.Commands.add('cadastrarSenhaIncorreta', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#email').type(faker.internet.email());
  cy.get('#password').type('1234');
});

Cypress.Commands.add('cadastrarDadosCorretos', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#email').type(faker.internet.email());
  cy.get('#password').type('123456789');
});

Cypress.Commands.add('excluirUsuario', () => {
  cy.get('#name').type(faker.name.findName());
  cy.get('#email').type(faker.internet.email());
  cy.get('#password').type('123456789');
});