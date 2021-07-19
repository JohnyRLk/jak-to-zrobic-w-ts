import { element, by, $, $$, browser, ElementFinder } from "protractor";
import {
  getValueFromInput,
  getTextTires,
  getServiceName,
  getAllAtribute,
  getAllText,
  chooseCarType,
  getAlwaysFirst,
  aClick,
  fillInputWithData,
} from "../actions";
export class mainPage {
  public btnJeep = $("#opony-wybor-button-jeep");
  public btnTruck = $("#opony-wybor-button-truck");
  public btnCar = $("#opony-wybor-button-car");
  public tireWidth = element(
    by.xpath(
      '//input[@aria-owns="opona-szerokosc_listbox"][@aria-busy="false"]'
    )
  );
  public tireHeight = element(
    by.xpath('//input[@aria-owns="opona-profil_listbox"][@aria-busy="false"]')
  );
  public tireRadius = element(
    by.xpath('//input[@aria-owns="opona-srednica_listbox"][@aria-busy="false"]')
  );
  public btnSearch = $("#btnSzukajOponyWgRozmiar");
  public ServiceName = $(".serwis-nazwa");
  public sizeForm = $("#WyborOpon");
  public MenuItems = $$("ul.nav li");
  public TextFromMenu = $$("ul.nav li");
  public hrefFromMenu = $$(".navbar-nav li a");
  public width = $("#opona-szerokosc");
  public diameter = $("#opona-srednica");
  public height = $("#opona-profil");
  public TiresText = element(by.xpath('//div/h1[text()="Lista opon"]'));

  async choseTiresSizeForm(
    carType: string,
    sizeWidth: string,
    sizeHeight: string,
    sizeRadius: string
  ) {
    let carChoose = await chooseCarType(`${carType}`);
    await aClick(carChoose);
    await fillInputWithData(this.tireWidth, sizeWidth);
    await aClick(carChoose);
    await fillInputWithData(this.tireHeight, sizeHeight);
    await aClick(carChoose);
    await fillInputWithData(this.tireRadius, sizeRadius);
    await aClick(this.btnSearch);
  }

  async getAllAtributeHref() {
    return getAllAtribute(this.hrefFromMenu);
  }
  async getServiceName(text: string) {
    return getServiceName(`.${text}`);
  }
  async getFirst() {
    return getAlwaysFirst(this.TextFromMenu);
  }

  async getCurrentUrl() {
    return browser.getCurrentUrl();
  }
  async getTextFromMenu() {
    return getAllText(this.MenuItems);
  }
  async getTtitle() {
    return browser.getTitle();
  }
  async get() {
    await browser.get(
      "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl="
    );
  }
  async getValueInput(text: string) {
    return getValueFromInput(`#${text}`);
  }
  async getTiresText() {
    await aClick(this.btnSearch);
    return getTextTires();
  }
  async present() {
    return this.sizeForm.isPresent();
  }
}
