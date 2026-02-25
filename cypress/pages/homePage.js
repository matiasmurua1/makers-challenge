class HomePage {
    elements = {
        logoSwagLabs: () => cy.get('.app_logo'),
    }

    getlogoSwagLabs(){
        return this.elements.logoSwagLabs();
    }

}
export default HomePage;