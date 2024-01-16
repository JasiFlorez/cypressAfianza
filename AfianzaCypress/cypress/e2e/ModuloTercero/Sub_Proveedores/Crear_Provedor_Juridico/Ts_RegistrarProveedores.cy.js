import { loginInicio  } from "../../../InicioLogin/Login.cy";
import { RegistrarProveedores } from "./RegistrarProveedores.cy";
describe("Ejecutador De RegistrarProvedores",()=>{
    it("TestRegistrar",()=>{
        loginInicio()
        RegistrarProveedores()
    })
})