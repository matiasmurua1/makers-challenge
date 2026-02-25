class LoginPage{
    
    elements = {
        loginLogo: () => cy.get('.login_logo'),
        usernameInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        blockedUserErrorMessage: () => cy.get('[data-test="error"]')
    }

    getLoginLogo(){
        return this.elements.loginLogo();
    }
    setUsername(username){
        this.elements.usernameInput().type(username);
    }
    setPassword(password){
        this.elements.passwordInput().type(password);
    }
    clickLoginButton(){
        this.elements.loginButton().click();
    }
    getBlockedUserErrorMessage(){
        return this.elements.blockedUserErrorMessage();
    }
}
export default LoginPage;
