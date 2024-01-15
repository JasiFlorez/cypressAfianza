export const RegistrarProveedores = () => {
    cy.get("#panel1bh-header").click();
    cy.get('.MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root').click()
    cy.get('[href="/proveedores/register"] > .sc-bjCGfv > .MuiTypography-root').click()
};
