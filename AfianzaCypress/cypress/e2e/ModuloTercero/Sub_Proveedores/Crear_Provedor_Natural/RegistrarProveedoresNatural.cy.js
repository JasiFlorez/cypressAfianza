export const registrarProveedores = ()=>{
    //Panel De Controll
    cy.get("#panel1bh-header").click();
    cy.get(".MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root").click();
    cy.get('[href="/proveedores/naturalRegister"] > .sc-bjCGfv > .MuiTypography-root').click();

    //Apartado de INFORMACIÓN BÁSICA
    cy.get('#mui-2').click().type("CEDULA")
    cy.get('#mui-2-option-0').contains("CEDULA").click()

    cy.get("[name ='personalInfo.numberIde']").click().type("1043660342")
    cy.get("[name ='personalInfo.expeditionDate']").click().type("2030-01-13")
   
    cy.get('#mui-4').click().type("BARRANQUILLA")
    cy.get('#mui-4-option-0').contains("BARRANQUILLA").click()
    
    
    cy.get("[name ='personalInfo.firstName']").click().type("TestingPro")
    cy.get("[name ='personalInfo.secondName']").click().type("TestingCrack")
    cy.get("[name ='personalInfo.lastName']").click().type("TestingQA")
    cy.get("[name ='personalInfo.secondLastName']").click().type("QATesting")
 
    
    cy.get('#mui-6').click().type("MASCULINO")
    cy.get('#mui-6-option-0').contains("MASCULINO").click()
    
    
    cy.get("[name ='personalInfo.birthDate']").click().type("2030-01-13")
    
    cy.get('#mui-8').click().type("BARRANQUILLA")
    cy.get('#mui-8-option-0').contains("BARRANQUILLA").click()
    
    cy.get('#mui-10').click().type("SOLTERO/A")
    cy.get('#mui-10-option-0').contains("SOLTERO/A").click()
    
    cy.get('#mui-12').click().type("TECNICO")
    cy.get('#mui-12-option-0').contains("TECNICO").click()
    
    cy.get('#mui-14').click().type("NO")
    cy.get('#mui-14-option-0').contains("NO").click()

    cy.get('#mui-16').click().type("NO")
    cy.get('#mui-16-option-0').contains("NO").click()
    
    cy.get("[name ='personalInfo.numberDependants']").click().type("1")
    
    cy.get('#mui-18').click().type("SALUD")
    cy.get('#mui-18-option-0').contains("SALUD").click()
    
    //Apartado De ASOCIADO
    cy.get('#mui-20').click().type("SI")
    cy.get('#mui-20-option-0').contains("SI").click()
    
    cy.get("[name ='thirdPartyAssociate.issueDate']").click().type("2023-05-15")
    cy.get("[name ='thirdPartyAssociate.retirementDate']").click().type("2030-05-15")
    
    cy.get('#mui-22').click().type("SI")
    cy.get('#mui-22-option-0').contains("SI").click()
    
    cy.get("[name ='thirdPartyAssociate.assemblyDate']").click().type("2030-05-15")
    
    //Apartado De INFORMACIÓN DE RESIDENCIA Y CONTACTO
    cy.get('#mui-24').click().type("ATLANTICO")
    cy.get('#mui-24-option-0').contains("ATLANTICO").click()
    
    cy.get('#mui-26').click().type("BARRANQUILLA")
    cy.get('#mui-26-option-0').contains("BARRANQUILLA").click()
    
    cy.get("[name ='address.neighBorhood']").click().type("TestingColombia")
    
    cy.get('#mui-29').click().type("CARRERA")
    cy.get('#mui-29-option-0').contains("CARRERA").click()
    
    cy.get("[name ='address.firstStreetNumber']").click().type("24")
    
    cy.get('#mui-31').click().type("CALLE")
    cy.get('#mui-31-option-0').contains("CALLE").click()
    
    cy.get("[name ='address.secondStreetNumber']").click().type("39")
    cy.get("[name ='address.thirdStreetNumber']").click().type("#78")
    cy.get("[name ='address.description']").click().type("Casa Color TestingKing")
    cy.get("[name ='address.stratum']").click().type("4")
    cy.get("[name ='personalInfo.phone']").click().type("3058796879")
    cy.get("[name ='personalInfo.telePhone']").click().type("3206536742")
    cy.get("[name ='personalInfo.email']").click().type("FundacionTestingDevolep@gmail.com")
    
    //Apartado de REFERENCIAS
    cy.get("[name ='contacts.0.name']").click().type("FundacionTesting")
    cy.get("[name ='contacts.0.middleName']").click().type("Devolep")
    cy.get("[name ='contacts.0.lastName']").click().type("Qa")
    cy.get("[name ='contacts.0.secondLastName']").click().type("Qa")
    
    
    cy.get('#mui-33').click().type("AMIGO")
    cy.get('#mui-33-option-0').contains("AMIGO").click()
    
    cy.get("[name ='contacts.0.phone']").click().type("3206586987")
    cy.get("[name ='contacts.0.telePhone']").click().type("3145582142")
    cy.get("[name ='contacts.0.email']").click().type("Testing@hotmail.com")

    //INFORMACIÓN LABORAL
    
}