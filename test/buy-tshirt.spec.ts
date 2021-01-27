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
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStep: SignInStep = new SignInStep();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStep: ShippingStep = new ShippingStep();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it("then should be bought a t-shirt", async () => {
    await browser.get("http://automationpractice.com/");
    await menuContentPage.goToTShirtMenu();

    //product-list
    await productListPage.goToItem();

    await browser.sleep(2000);
    //add to car
    await productAddedModal.addProduct();

    //summary
    await summaryStepPage.nextStep();
    //sing in
    await signInStep.completeForm();
    //address
    await addressStepPage.selectAddress();
    //shiping
    await shippingStep.agreeTerms();
    await shippingStep.nextStep();
    //payment step
    await paymentStepPage.selectPay();
    //bank
    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.result()).toBe(
      "Your order on My Store is complete."
    );
  });
});
