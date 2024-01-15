import { loginInicio } from "./Login.cy";

describe("Prueba inicio session de Login", () => {
  it("Caso de prueba iniciar session exitosamente", () => {
    loginInicio()
  });
});
