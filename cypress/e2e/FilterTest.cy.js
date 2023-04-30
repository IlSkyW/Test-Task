import mainPage from "../support/pageObject/mainPage";
import productsListPage from "../support/pageObject/productsListPage";

describe("Filter Test", () => {
  it("Verify if the price filter working correctly for the following marketplaces", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "rozetka.com.ua");

    cy.wait(5000);
    mainPage.openCategory("Ноутбуки та комп’ютери");
    mainPage.openSubCategory("Ноутбуки");

    cy.wait(5000);
    productsListPage.filterPrice("20000", "30000");
    cy.wait(5000);
    productsListPage.selectBrand();

    cy.wait(5000);
    productsListPage.verifyProductPriceInRange(20000, 30000);

    cy.wait(5000);
    productsListPage.verifyProductsTitleContainBrand("asus");
  });
});
