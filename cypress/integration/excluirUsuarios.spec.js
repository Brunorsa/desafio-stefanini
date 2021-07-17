/// <reference types="Cypress" />

describe('Cadastrar Usuários', () => {
  context('Cenário 1 - Excluir Usuários', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('E possui usuários cadastrados', () => {
        beforeEach(() => {
          cy.cadastrarDadosCorretos();
          cy.get('#register').click();

          cy.cadastrarDadosCorretos();
          cy.get('#register').click();
        });
        context('Quando clico para remover o primeiro usuário da lista', () => {
          it('Então o usuário não deve ser exibido mais na lista', () => {
            cy.screenshot('antes-de-remover');
            cy.get('#removeUser1').click();
            cy.screenshot('depois-de-remover');
            cy.get('tr').should('have.length', '1');
          });
        });
      });
    });
  });
});