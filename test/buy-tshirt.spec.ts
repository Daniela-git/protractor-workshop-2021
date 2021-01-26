import { browser } from "protractor";
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModal,
  SummaryStepPage,
  SignInStep,
  AddressStepPage,
  ShippingStep,
  PaymentStepPage,
  BankPaymentPage,
  OrderSummaryPage,
} from "../src/page";
describe("Buy a t-shirt", () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModal: ProductAddedModal = new ProductAddedModal();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStep: SignInStep = new SignInStep();
  const shippingStep: ShippingStep = new ShippingStep();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it("then should be bought a t-shirt", async () => {
    await browser.get("http://automationpractice.com/");
    await menuContentPage.goToTShirtMenu();

    await browser.sleep(2000); //product-list
    await productListPage.goToItem();

    await browser.sleep(2000); //add to car
    await productAddedModal.addProduct();

    await browser.sleep(2000); //summary
    await summaryStepPage.nextStep();
    await browser.sleep(2000);
    //sing in
    await signInStep.completeForm();
    await browser.sleep(2000);
    //address
    await addressStepPage.selectAddress();
    await browser.sleep(2000);
    //shiping
    await shippingStep.agreeTerms();
    await browser.sleep(2000);
    await shippingStep.nextStep();
    await browser.sleep(2000);
    //payment step
    await paymentStepPage.selectPay();
    await browser.sleep(2000);
    //bank noseque
    await bankPaymentPage.confirmOrder();
    await browser.sleep(2000);

    await expect(orderSummaryPage.result()).toBe(
      "Your order on My Store is complete."
    );
  });
});
