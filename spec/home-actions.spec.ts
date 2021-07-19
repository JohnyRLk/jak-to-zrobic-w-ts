import { mainPage } from "./components/mainPage";
describe("Wyszukiwarka", function () {
  describe("Strona główna bestdrive", function () {
    let homePageObject: mainPage = new mainPage();
    beforeEach(() => {
      homePageObject.get();
    });

    it("powinna mieć ustawioną domyślną szerokość opon", async function () {
      let getValue = await homePageObject.getValueInput("opona-szerokosc");
      expect(getValue).toEqual("205");
    });

    it("powinna mieć ustawioną domyślną wysokość opon", async function () {
      let getValue = await homePageObject.getValueInput("opona-profil");
      expect(getValue).toEqual("55");
    });

    it("powinna mieć ustawiony domyślny promień opon", async function () {
      let getValue = await homePageObject.getValueInput("opona-srednica");
      expect(getValue).toEqual("16");
    });

    it("powinna wyświetlić listę opon po naciśnięciu przycisku 'Szukaj opon'", async function () {
      let getText = await homePageObject.getTiresText();
      expect(getText).toEqual("Lista opon");
    });
  });
});
