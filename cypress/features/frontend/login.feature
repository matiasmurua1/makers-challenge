Feature: Validación iniciar sesion en Swag Labs

  @PASS
  Scenario:TC-LOGIN-001 Login exitoso con credenciales validas
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Examples:
      | userName                | password       |
      | standard_user           | secret_sauce   |
      | problem_user            | secret_sauce   |
      | performance_glitch_user | secret_sauce   |
  
  @PASS
  Scenario:TC-LOGIN-002 Login fallido con contraseña incorrecta
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then verifico que se muestre el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    Examples:
      | userName                | password      |
      | standard_user           | fail_password |
      | problem_user            | fail_password |
      | performance_glitch_user | fail_password |