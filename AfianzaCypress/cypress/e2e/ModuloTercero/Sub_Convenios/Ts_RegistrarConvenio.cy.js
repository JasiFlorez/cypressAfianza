import { loginInicio } from "../../InicioLogin/Login.cy";
import { RegistrarConvenio } from "./RegistrarConvenio.cy";

describe("Ejecutar Registrar un nuevo Convenio", () => {
  it("Registrar un nuevo Convenio exitosamente", () => {
    loginInicio();
    cy.wait(3000);
    RegistrarConvenio();
  });
});
