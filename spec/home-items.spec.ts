import { mainPage } from "./components/mainPage";

describe("Strona główna bestdrive", function () {
  let homePageObject: mainPage = new mainPage();
  beforeEach(() => {
    homePageObject.get();
  });
  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    let titleGet = await homePageObject.getTtitle();
    expect(titleGet).toMatch("Bestdrive - Opony online - bestdrive.webshop.pl");
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function () {
    let getService = await homePageObject.getServiceName("serwis-nazwa");
    expect(getService).toEqual("Navigator");
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function () {
    expect(await homePageObject.present()).toBe(true);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function () {
    let menuItemsArray = [
      "OPONY WG ROZMIARU",
      "OPONY WG POJAZDU",
      "PROMOCJE",
      "KOSZYK (0)",
      "",
    ];
    let getElementsFrommenu = await homePageObject.getTextFromMenu();
    expect(getElementsFrommenu).toEqual(menuItemsArray);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function () {
    let getFirstElment = await homePageObject.getFirst();
    expect(getFirstElment).toEqual("OPONY WG ROZMIARU");
  });

  it("powinna posiadac stopkę z linkami do ...", async function () {
    let arrayHref = [
      "/",
      "/opony-pojazdu",
      "/promocje-opon",
      "",
      "/Koszyk/Podsumowanie",
      "/Koszyk/Podsumowanie",
    ];
    let getAllHrefs = await homePageObject.getAllAtributeHref();
    expect(getAllHrefs).toEqual(arrayHref);
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów dostawczych", async function () {
    await homePageObject.choseTiresSizeForm("truck", "255", "50", "19");
    expect(await homePageObject.getCurrentUrl()).toContain("dostawcza");
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    await homePageObject.choseTiresSizeForm("jeep", "235", "55", "17");
    expect(await homePageObject.getCurrentUrl()).toContain("4x4");
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    await homePageObject.choseTiresSizeForm("car", "215", "40", "16");
    expect(await homePageObject.getCurrentUrl()).toContain("215-40-16");
  });
});
