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

describe("Open the browser", () => {
  beforeAll(async () => {
    await browser.get("http://automationpractice.com/");
  });

  describe("I try to buy a t-shirt", () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModal: ProductAddedModal = new ProductAddedModal();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      //product-list
      await productListPage.goToItem();
      await browser.sleep(2000);
      //add to car
      await productAddedModal.addProduct();
      //summary
      await summaryStepPage.nextStep();
    });

    describe("try to ligin", () => {
      const signInStep: SignInStep = new SignInStep();
      beforeAll(async () => {
        //sing in
        await signInStep.completeForm();
      });

      describe("select the default address", () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStep: ShippingStep = new ShippingStep();
        beforeAll(async () => {
          //address
          await addressStepPage.selectAddress();
          //shiping
          await shippingStep.agreeTerms();
          await shippingStep.nextStep();
        });

        describe("payment step", () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
          it("then should be bought a t-shirt", async () => {
            //payment step
            await paymentStepPage.selectPay();
            //bank
            await bankPaymentPage.confirmOrder();

            await expect(orderSummaryPage.result()).toBe(
              "Your order on My Store is complete."
            );
          });
        });
      });
    });
  });
});
