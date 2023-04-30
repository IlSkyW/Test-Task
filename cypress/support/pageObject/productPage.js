import product from "../../selectors/product.sel";
import cartPage from "./cartPage";

class productsListPage {
  getProductTitle() {
    return cy.get(product.productTitle);
  }

  clickBuyButton() {
    return cy.contains("Купити").should("be.visible").click();
  }

  verifyProductTitle() {
    this.getProductTitle().then(($title) => {
      const itemName = $title.text();
      this.clickBuyButton();
      cy.wait(10000);
      cartPage.getProductInCartTitle().should("have.text", itemName.trim());
    });
  }
}

export default new productsListPage();
