class functionTest {
    element = {
        inputAutoComplete : () => cy.get('#autocomplete'),
        dropdown : () => cy.get('#dropdown-class-example'),
    }

    selectRadio(no) {
        cy.get(`[for="radio${no}"] > .radioButton`).click();
    }

    inputCountries(country) {
        this.element.inputAutoComplete().clear()
        this.element.inputAutoComplete().type(country)
        this.element.inputAutoComplete().type('{downArrow}').click()
        this.element.inputAutoComplete().type('{downArrow}')
        this.element.inputAutoComplete().type('{enter}')
    }

    shouldshowCountry(country) {
        this.element.inputAutoComplete().should('have.value', country)
    }

    selectDropdown(value) {
        this.element.dropdown().select(value)
        this.element.dropdown().contains(value)
    }

    selectCheckbox(no) {
        cy.get(`#checkBoxOption${no}`).click()
    }

    mouseHover() {
        cy.get('#mousehover').trigger('mouseover')
    }
}

module.exports = new functionTest();