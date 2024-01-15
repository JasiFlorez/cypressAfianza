export const loginInicio = () => {
  cy.visit("https://qa.mifianza.online");
  cy.get("#email").click().type("admin@afianza.com");
  cy.get("#password").click().type("123123");
  cy.get(".MuiButtonBase-root").click();
};
