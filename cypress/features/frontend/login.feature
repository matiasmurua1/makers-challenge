Feature: Validación iniciar sesion en Swag Labs

  @PASS
  Scenario:TC-LOGIN-001 Iniciar sesion con credenciales validas
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Examples:
      | userName       | password       |
      | standard_user  | secret_sauce   |
      | problem_user   | secret_sauce   |
      | performance_glitch_user | secret_sauce   |
  
  