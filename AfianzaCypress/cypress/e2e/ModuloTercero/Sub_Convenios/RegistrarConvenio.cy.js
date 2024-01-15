import 'cypress-file-upload';
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
  cy.get("#mui-2").type('SALUD').click()
  cy.get('#mui-2-option-0').contains("SALUD").click()
  cy.get('#mui-4').click()
  cy.get('#mui-4-option-0').contains("SI").click()
  
  cy.get(':nth-child(3) > .sc-djTcra').contains("INFORMACIÓN DE RESIDENCIA Y CONTACTO")
  
  cy.get('#mui-6').type("ATLANTICO").click()
  cy.get('#mui-6-option-0').contains("ATLANTICO").click()
  
  cy.get('#mui-8').type("BARRANQUILLA").click()
  cy.get('#mui-8-option-0').contains("BARRANQUILLA").click()
  cy.get("[name ='address.neighBorhood']").click().type("Testing QA")
  
  cy.get('#mui-11').click()
  cy.get('#mui-11-option-14').contains('CARRERA').click()
  
  cy.get("[name ='address.firstStreetNumber']").click().type("23")
  
  cy.get('#mui-13').click()
  cy.get('#mui-13-option-8').contains("CALLE").click()
  
  cy.get("[name ='address.secondStreetNumber']").click().type("52")
  cy.get("[name ='address.thirdStreetNumber']").click().type("102")
  cy.get("[name ='address.description']").click().type("CASA ROJA CON BLANCO")
  cy.get("[name ='contact.phone']").click().type("3206536799")
  cy.get("[name ='contact.telePhone']").click().type("3206536799")
  cy.get("[name ='contact.email']").click().type("Testing@gmail.com")
  
  cy.get('#mui-15').type("EMPRESA DEL ESTADO").click()
  cy.get('#mui-15-option-0').contains("EMPRESA DEL ESTADO").click()
  
  cy.get('#mui-17').type("1811  ACTIVIDADES DE IMPRESIÓN").click()
  cy.get('#mui-17-option-0').contains("ACTIVIDADES DE IMPRESIÓN").click()
  
  cy.get("[name ='taxInfo.FATCAobservation']").click().type("1043660366")
  cy.get("[name ='taxInfo.originOfFundsObservation']").click().type("TestingKing")
  cy.get("[name ='taxInfo.SARLAFTObservation']").click().type("PruebaQA")
  cy.get("[name ='taxInfo.restrictiveListsObservation']").click().type("PruebaQA")
  cy.get("[name ='taxInfo.responsible']").click().type("QA")
  cy.get('#mui-19').click()
  cy.get('#mui-19-option-0').contains("SI").click()
  
  cy.get('#mui-21').click()
  cy.get('#mui-21-option-0').contains("SI").click()
  
  cy.get('#mui-23').click()
  cy.get('#mui-23-option-0').contains("SI").click()
  
  cy.get('#mui-25').click()
  cy.get('#mui-25-option-0').contains("SI").click()
  
  cy.get('#mui-27').click()
  cy.get('#mui-27-option-1').contains("NO").click()
  
  cy.get('#mui-29').click()
  cy.get('#mui-29-option-0').contains("SI").click()
  
  cy.get("[name ='taxInfo.serviceDescription']").click().type("PruebaDelTesting")
  
  
  cy.get("[name ='detailBank.accountNumber']").click().type("GB33BUKB20201555555555")
  
  cy.get('#mui-31').click()
  cy.get('#mui-31-option-0').contains("CUENTA CORRIENTE").click()
  
  cy.get('#mui-33').type("BANCOLOMBIA S.A.").click()
  cy.get('#mui-33-option-0').contains("BANCOLOMBIA S.A.").click()
  
  cy.get("[name ='financialInfo.monthlyIncome']").click().type("2000000")
  cy.get("[name ='financialInfo.incomeLevel']").click().type("3")
  cy.get("[name ='financialInfo.monthlyExpense']").click().type("600000")
  cy.get("[name ='financialInfo.actives']").click().type("1400000")
  cy.get("[name ='financialInfo.passives']").click().type("400000")
  cy.get("[name ='financialInfo.otherIncome']").click().type("100000")
  
  cy.get("[name ='minimumAmount']").click().type("350000")
  cy.get('#mui-35').type("PAGO TOTAL").click()
  cy.get('#mui-35-option-0').contains("PAGO TOTAL").click()
  
  const filePath = 'testing.pdf'
  cy.get("[name ='rut']").attachFile(filePath)
};
