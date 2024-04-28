Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("[name=firstName]").type("Lorena");
  cy.get("[name=lastName]").type("Azevedo");
  cy.get("[id=email]").type("lorenaazevedo41@hotmail.com");
  cy.get("[name=open-text-area]").type("teste");
  cy.contains("button", "Enviar").click();
});
