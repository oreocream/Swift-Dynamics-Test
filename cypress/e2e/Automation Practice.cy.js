import functionTest from "../pageObject/functionTest"

describe('Swift dynamics Automated Test', () => {

    before(() => {
      // เข้าสู่เว็บไซต์
      cy.visit('https://codenboxautomationlab.com/practice/');
    })

    it('Radio Button Example', () => {
      // เลือก Radio 2
      functionTest.selectRadio(2);
    })  

    it('Dynamic Dropdown Example', () => {
      // ค้นหาคำว่า Thai แล้วเลือก Auto Complete : Thailand
      functionTest.inputCountries('Thai');
      functionTest.shouldshowCountry('Thailand');
    })

    it('Static Dropdown Example', () => {
      // เลือก Drop Down List : API
      functionTest.selectDropdown('API');
    })  

    it('Checkbox Example', () => {
      // เลือก Checkbox Option 1 and Option 3
      functionTest.selectCheckbox(1);
      functionTest.selectCheckbox(3);
    })
    
    it('Mouse Hover Example', () => {
      // Mouse Hover
      functionTest.mouseHover();
    })
})