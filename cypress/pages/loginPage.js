class LoginPage{
    
    elements = {
        loginLogo: () => cy.get('.login_logo'),
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        ErrorMessage: () => cy.get('[data-test="error"]')
    }

    getLoginLogo(){
        return this.elements.loginLogo();
    }
    setUsername(username) {
        if (username && username.trim().length > 0) {
            this.elements.usernameInput().type(username);
    }
    }

    setPassword(password) {
        if (password && password.trim().length > 0) {
            this.elements.passwordInput().type(password);
    }
    }
    clickLoginButton(){
        this.elements.loginButton().click();
    }
    getErrorMessage(){
        return this.elements.ErrorMessage();
    }
}
export default LoginPage;
