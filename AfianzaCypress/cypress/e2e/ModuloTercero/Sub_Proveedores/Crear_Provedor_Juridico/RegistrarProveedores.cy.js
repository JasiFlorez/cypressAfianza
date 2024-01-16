import 'cypress-file-upload';
export const RegistrarProveedores = () => {
            //Panel de control
            cy.get("#panel1bh-header").click();
            cy.get(".MuiCollapse-entered > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > #panel1bh-header > .MuiAccordionSummary-content > .MuiTypography-root").click();
            cy.get('[href="/proveedores/register"] > .sc-bjCGfv > .MuiTypography-root').click();
            
            //APARTADO DE INFORMACIÓN BÁSICA
            cy.get('[name ="legalInformation.nit"]').click().type("10433660311")
            cy.get('[name ="legalInformation.bussinesName"]').click().type("TestingPrueba")
            cy.get('[name ="legalInformation.legalRepresentative"]').click().type("QA")
            cy.get('[name ="legalInformation.dateConstitution"]').type("2030-01-13")
            
            cy.get('#mui-2').type("SALUD").click()
            cy.get('#mui-2-option-0').contains("SALUD").click()
            
            cy.get('#mui-4').click().type("SI")
            cy.get('#mui-4-option-0').contains("SI").click()
            
            //APARTADO DE ASOCIADO
            cy.get('#mui-6').click().type("SI")
            cy.get('#mui-6-option-0').contains("SI").click()
            cy.get('[name ="thirdPartyAssociate.issueDate"]').type("2021-01-13")
            cy.get('[name ="thirdPartyAssociate.retirementDate"]').type("2030-01-13")
            
            cy.get('#mui-8').click().type("NO")
            cy.get('#mui-8-option-0').contains("NO").click()
            
            cy.get('[name ="thirdPartyAssociate.assemblyDate"]').type("2022-01-13")
            
            //APARTADO DE INFORMACIÓN DE RESIDENCIA Y CONTACTO
            cy.get('#mui-10').click().type("ATLANTICO")
            cy.get('#mui-10-option-0').contains("ATLANTICO").click()
            
            cy.get('#mui-12').click().type("BARRANQUILLA")
            cy.get('#mui-12-option-0').contains("BARRANQUILLA").click()
            
            cy.get('[name ="address.neighBorhood"]').type("Testing")
            
            cy.get('#mui-15').click().type("CARRERA")
            cy.get('#mui-15-option-1').contains("CARRERA").click()
            
            cy.get('[name ="address.firstStreetNumber"]').type("13")
            
            cy.get('#mui-17').click().type("CALLE")
            cy.get('#mui-17-option-1').contains("CALLE").click()
            
            cy.get('[name ="address.secondStreetNumber"]').type("45E")
            cy.get('[name ="address.thirdStreetNumber"]').type("#95")
            cy.get('[name ="address.description"]').type("Casa testing blanca")
            cy.get('[name ="contact.phone"]').type("3206536744")
            cy.get('[name ="contact.telePhone"]').type("3206536744")
            cy.get('[name ="contact.email"]').type("testing@gmail.com")
            
            //APARTADO DE INFORMACIÓN TRIBUTARIA
            
            cy.get('#mui-19').click().type("RESPONSABLE DE IVA")
            cy.get('#mui-19-option-0').contains("RESPONSABLE DE IVA").click()
            
            cy.get('#mui-21').click().type("1811  ACTIVIDADES DE IMPRESIÓN")
            cy.get('#mui-21-option-0').contains("1811 ACTIVIDADES DE IMPRESIÓN").click()
            
            cy.get('[name ="taxInfo.FATCAobservation"]').type("Testing")
            cy.get('[name ="taxInfo.originOfFundsObservation"]').type("Testing")
            cy.get('[name ="taxInfo.SARLAFTObservation"]').type("Testing")
            cy.get('[name ="taxInfo.restrictiveListsObservation"]').type("PruebaQA")
            cy.get('[name ="taxInfo.responsible"]').type("Testing Responsable")
            
            
            cy.get('#mui-23').click().type("SI")
            cy.get('#mui-23-option-0').contains("SI").click()
            
            cy.get('#mui-25').click().type("SI")
            cy.get('#mui-25-option-0').contains("SI").click()
            
            cy.get('#mui-27').click().type("SI")
            cy.get('#mui-27-option-0').contains("SI").click()
            
            cy.get('#mui-29').click().type("SI")
            cy.get('#mui-29-option-0').contains("SI").click()
           
            cy.get('#mui-31').click().type("SI")
            cy.get('#mui-31-option-0').contains("SI").click()
            
            cy.get('#mui-33').click().type("SI")
            cy.get('#mui-33-option-0').contains("SI").click()
            
            cy.get('[name ="taxInfo.serviceDescription"]').type("Testing Responsable")
            
            //APARTADO DE INFORMACIÓN BANCARIA Y FINANCIERA
            cy.get('[name ="detailBank.accountNumber"]').type("332020155555555")
            
            cy.get('#mui-35').click().type("CUENTA CORRIENTE")
            cy.get('#mui-35-option-0').contains("CUENTA CORRIENTE").click()
            
            cy.get('#mui-37').click().type("BANCOLOMBIA S.A.")
            cy.get('#mui-37-option-0').contains("BANCOLOMBIA S.A.").click()
            
            cy.get('[name ="financialInfo.monthlyIncome"]').type("2000000")
            cy.get('[name ="financialInfo.incomeLevel"]').type("2")
            cy.get('[name ="financialInfo.monthlyExpense"]').type("600000")
            cy.get('[name ="financialInfo.actives"]').type("1400000")
            cy.get('[name ="financialInfo.passives"]').type("200000")
            cy.get('[name ="financialInfo.otherIncome"]').type("300000")

            //APARTADO DE CARGA DE DOCUMENTO
            const document = 'prueba22.pdf'
            cy.get('[name ="rut"]').attachFile(document)
        }
        