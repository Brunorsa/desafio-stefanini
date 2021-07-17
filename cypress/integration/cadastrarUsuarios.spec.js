/// <reference types="Cypress" />

describe('Cadastrar Usuários', () => {
  context('Cenário 1 - Cadastrar Sem Nome', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });

      context('Quando preencho os campos menos o campo "Nome"', () => {
        beforeEach(() => {
          cy.cadastrarSemNome();
        });
        it('Então deverá exibir um erro no campo Nome', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'O campo Nome é obrigatório.')
        });
      });
    });
  });

  context('Cenário 2 - Cadastrar Sem E-mail', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho os campos menos o campo "E-mail"', () => {
        beforeEach(() => {
          cy.cadastrarSemEmail();
        });
        it('Então deverá exibir um erro no campo Email', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'O campo E-mail é obrigatório.')
        });
      });
    });
  });

  context('Cenário 3 - Cadastrar sem Senha', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho os campos menos o campo "Senha"', () => {
        beforeEach(() => {
          cy.cadastrarSemSenha();
        });
        it('Então deverá exibir um erro no campo Email', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'O campo Senha é obrigatório.')
        });
      });
    });
  });

  context('Cenário 4 - Cadastrar com Nome incorreto', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho o campo Nome incorretamente', () => {
        beforeEach(() => {
          cy.cadastrarNomeIncorreto();
        });
        it('Então deverá exibir um erro no campo Nome informando que está incorreto', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'Por favor, insira um nome completo.')
        });
      });
    });
  });

  context('Cenário 5 - Cadastrar com E-mail incorreto', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho o campo E-mail sem a máscara de e-mail', () => {
        beforeEach(() => {
          cy.cadastrarEmailIncorreto();
        });
        it('Então deverá exibir um erro no campo E-mail informando que está incorreto', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'Por favor, insira um e-mail válido.')
        });
      });
    });
  });

  context('Cenário 6 - Cadastrar com Senha incorreta', () => {
    context('Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho o campo Senha com menos de 8 caracteres', () => {
        beforeEach(() => {
          cy.cadastrarSenhaIncorreta();
        });
        it('Então deverá exibir um erro no campo Senha informando que está incorreto', () => {
          cy.get('#register').click();
          cy.get('.error').should('contain.text', 'A senha deve conter ao menos 8 caracteres.')
        });
      });
    });
  });
  
  context('Cenário 7 - Cadastrar com todos os dados corretos', () => {
    context('- Dado que visito a página de cadastro', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      context('Quando preencho todos os campos corretamente', () => {
        beforeEach(() => {
          cy.cadastrarDadosCorretos();
        });
        it('Então deverá exibir uma lista com o usuário que foi cadastrado', () => {
          cy.get('#register').click();
          cy.get('.table-title').should('have.text', 'Usuários cadastrados');
          cy.get('#tdUserId1').should('be.visible');
        });
      })
    });
  });
});