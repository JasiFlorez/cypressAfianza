export const RegistrarConvenio = () => {
  // seleccion de modulo >>>>>>>>
  cy.get("#panel1bh-header").click();
  cy.get('[style="min-height: 0px; height: auto; transition-duration: 245ms;"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > #panel1bh-header > .MuiAccordionSummary-content').click();
  cy.get('[href="/convenio/registrarConvenio"] > .sc-bjCGfv > .MuiTypography-root').click();
  //Informacion ingresadad en los campo abajo >>>>>>
  cy.get(':nth-child(2) > .sc-djTcra').contains("INFORMACIÓN BÁSICA")
  cy.get("[name = 'legalInformation.nit']").click().type("1043660333")
  cy.get("[name = 'legalInformation.bussinesName']").click().type("TestingPrueba")
  cy.get("[name = 'legalInformation.invoicingName']").click().type("TestingTS")
  cy.get("[name = 'legalInformation.legalRepresentative']").click().type("TestingJS")
  cy.get("[name = 'legalInformation.issueDate']").type("2024-01-13")
  cy.get("[name = 'legalInformation.dateConstitution']").type("2030-01-13")
  cy.get("#mui-2").invoke('val', 'SALUD')
  cy.get("#mui-4").invoke('val', 'SI')


  cy.get(':nth-child(3) > .sc-djTcra').contains("INFORMACIÓN DE RESIDENCIA Y CONTACTO")
  cy.get('#mui-6').invoke('val','ATLANTICO')
  cy.get("[name ='address.neighBorhood']").click().type("Testing QA")
  cy.get('#mui-11').invoke('val','CALLE')
  cy.get("[name ='address.firstStreetNumber']").click().type("23")
  cy.get('#mui-13').invoke('val','CARRERA')
  cy.get("[name ='address.secondStreetNumber']").click().type("52")
  cy.get("[name ='address.thirdStreetNumber']").click().type("102")
  cy.get("[name ='address.description']").click().type("CASA ROJA CON BLANCO")
  cy.get("[name ='contact.phone']").click().type("3206536799")
  cy.get("[name ='contact.telePhone']").click().type("3206536799")
  cy.get("[name ='contact.email']").click().type("Testing@gmail.com")
  

  
};
