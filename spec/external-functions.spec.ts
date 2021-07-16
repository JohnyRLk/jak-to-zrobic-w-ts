import { mainPage } from "./components/mainPage";
describe("Wyszukiwarka", function () {
  let homePageObject: mainPage = new mainPage();
  beforeEach(() => {
    homePageObject.get();
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    await homePageObject.choseTiresSizeForm("car", "215", "40", "16");
    expect(await homePageObject.getCurrentUrl()).toContain("215-40-16");
  });
});
