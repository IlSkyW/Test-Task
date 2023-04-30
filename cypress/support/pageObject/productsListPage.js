import productList from "../../selectors/productList.sel";
import filter from "../../selectors/filter.sel";

class productListPage {
  get productTiles() {
    return cy.get(productList.productTitle);
  }

  get minPriceFilter() {
    return cy.get(filter.minPirceInput);
  }

  get maxPriceFilter() {
    return cy.get(filter.maxPriceInput);
  }

  get OkFilterButton() {
    return cy.get(filter.okButton);
  }

  filterPrice(min, max) {
    this.minPriceFilter.click().clear().type(min);
    this.maxPriceFilter.click().clear().type(max);
    this.OkFilterButton.click();
  }

  get brandAsus() {
    return cy.get(filter.brandCheckBox);
  }

  selectBrand() {
    this.brandAsus.click();
  }

  get productsPrice() {
    return cy.get(productList.productPrice);
  }

  verifyProductPriceInRange(minPrice, maxPrice) {
    this.productsPrice.each(($el) => {
      const price = $el.text().replace(/\s/g, "");
      expect(parseInt(price)).to.be.within(minPrice, maxPrice);
    });
  }

  verifyProductsTitleContainBrand(brand) {
    this.productTiles.each(($el) => {
      const title = $el.text().toLowerCase();
      expect(title.includes(brand)).to.eq(true);
    });
  }

  get Products() {
    return cy.get(productList.productPicture);
  }

  openFirstProduct() {
    this.Products.first().click();
  }

  verifyProductTitles(itemName) {
    this.productTiles.each(($title) => {
      expect($title.text().toLowerCase()).to.contain(itemName);
    });
  }
}

export default new productListPage();
