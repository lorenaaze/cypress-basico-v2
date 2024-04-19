/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  beforeEach(() => cy.visit("./src/index.html"));
  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.get("[name=firstName]").type("Lorena");
    cy.get("[name=lastName]").type("Azevedo");
    cy.get("[id=email]").type("lorenaazevedo41@hotmail.com");
    cy.get("[name=open-text-area]").type("teste");
    cy.get("[class=button]").click();
    cy.get(".success").should("be.visible");
  });
});
