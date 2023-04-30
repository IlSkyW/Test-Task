import mainPage from "../support/pageObject/mainPage";
import productList from "../support/pageObject/productsListPage";

describe("Search Item Test", () => {
  it("should open the marketplace url and verify search on it", () => {
    mainPage.visit();
    mainPage.siteUrl.should("include", "rozetka.com.ua");

    const itemName = "iphone 12";

    mainPage.search(itemName);

    productList.verifyProductTitles(itemName);
  });
});
