import { mainPage } from "./components/mainPage";
describe("Wyszukiwarka", function () {
  describe("Strona główna bestdrive", function () {
    let homePageObject: mainPage = new mainPage();
    beforeEach(() => {
      homePageObject.get();
    });

    it("powinna mieć ustawioną domyślną szerokość opon", async function () {
      expect(await homePageObject.getValueInput("opona-szerokosc")).toEqual(
        "205"
      );
    });

    it("powinna mieć ustawioną domyślną wysokość opon", async function () {
      expect(await homePageObject.getValueInput("opona-profil")).toEqual("55");
    });

    it("powinna mieć ustawiony domyślny promień opon", async function () {
      expect(await homePageObject.getValueInput("opona-srednica")).toEqual(
        "16"
      );
    });

    it("powinna wyświetlić listę opon po naciśnięciu przycisku 'Szukaj opon'", async function () {
      await homePageObject.clickSearch();
      expect(await homePageObject.getTiresText()).toEqual("Lista opon");
    });
  });
});
