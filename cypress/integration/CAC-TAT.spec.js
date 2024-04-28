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
    cy.get("[name=open-text-area]").type("testeeeeeeeeeeeeeeeeeeeee", {
      delay: 0,
    });
    cy.contains("button", "Enviar").click();
    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("[name=firstName]").type("Lorena");
    cy.get("[name=lastName]").type("Azevedo");
    cy.get("[id=email]").type("lorenaazevedo41");
    cy.get("[name=open-text-area]").type("testeeeeeeeeeeeeeeeeeeeee", {
      delay: 0,
    });
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("campo de telefone não aceita valores não numéricos", function () {
    cy.get("#phone").type("teste").should("have.text", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("[name=firstName]").type("Lorena");
    cy.get("[name=lastName]").type("Azevedo");
    cy.get("[id=email]").type("lorenaazevedo41");
    cy.get("#phone-checkbox").click();
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("[name=firstName]")
      .type("Lorena")
      .should("have.value", "Lorena")
      .clear()
      .should("have.value", "");
    cy.get("[name=lastName]")
      .type("Azevedo")
      .should("have.value", "Azevedo")
      .clear()
      .should("have.value", "");
    cy.get("[id=email]")
      .type("lorenaazevedo41")
      .should("have.value", "lorenaazevedo41")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("123456789")
      .should("have.value", "123456789")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit();
    cy.get(".success").should("be.visible");
  });

  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("seleciona um produto (Mentoria) por seu valor (value)", function () {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it.only("seleciona um produto (Blog) por seu índice", function () {
    cy.get("#product").select(1).should("have.value", "blog");
  });
});
