import mainPage from "../support/pageObject/mainPage";

describe("Main page", () => {
  it("All items cost less than 1000 UAH", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "rozetka.com.ua"); 
    mainPage.checkProductPrices(1000);
  });
});
