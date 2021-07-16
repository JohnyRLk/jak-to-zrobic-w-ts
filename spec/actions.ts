import {
  browser,
  protractor,
  ElementFinder,
  ElementArrayFinder,
  $,
  element,
  by,
} from "protractor";
let ec = protractor.ExpectedConditions;

export async function browserWaitVisibility(el: ElementFinder) {
  await browser.wait(ec.presenceOf(el), 5000);
}

export async function browserWaitClick(el: ElementFinder) {
  await browser.wait(ec.elementToBeClickable(el), 5000, "wait for click");
}

export async function getTextFormElement(el: ElementFinder) {
  return el.getText();
}

export async function getAlwaysFirst(el: ElementArrayFinder) {
  return el.get(0).getText();
}

export async function getAllText(el: ElementArrayFinder) {
  return el.map((text) => text.getText());
}
export async function getTextTires() {
  let tiresText = element(by.xpath('//div/h1[text()="Lista opon"]'));
  return tiresText.getText();
}

export async function getAllAtribute(el: ElementArrayFinder) {
  return el.map((text) => text.getAttribute("href"));
}
export async function getServiceName(text: string) {
  let inputChoose = await $(text);
  return inputChoose.getText();
}
export async function getValueFromInput(text: string) {
  let inputChoose = await $(text);
  return inputChoose.getAttribute("value");
}
export async function chooseCarType(text: string) {
  let el = await $(`#opony-wybor-button-${text}`);
  return el;
}
export async function aClick(el: ElementFinder) {
  await browserWaitClick(el);
  await el.click();
  console.log("click at", el.locator);
}

export async function fillInputWithData(el: ElementFinder, value: string) {
  await browserWaitClick(el);
  await el.click();
  await el.clear();
  await el.sendKeys(value);
}
