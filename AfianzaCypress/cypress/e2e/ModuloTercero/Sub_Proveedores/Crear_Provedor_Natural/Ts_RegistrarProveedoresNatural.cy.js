import { loginInicio } from "../../../InicioLogin/Login.cy";
import { registrarProveedores } from "./RegistrarProveedoresNatural.cy";

describe("Ts_Registrar Un proveedor Natural", () => {
  it("Proveedor Natural", () => {
    // Realizar inicio de sesión
    loginInicio()

    // Realizar registro de proveedor natural después del inicio de sesión
    registrarProveedores()
  })
})
