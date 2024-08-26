import OurBrands from "@/modules/OurBrands";
import OurTyres from "@/modules/OurTyres";
import PaymentMethod from "@/modules/PaymentMethod";
import Services from "@/modules/Services";
import ShopAddress from "@/modules/ShopAddress";

export default function Home() {
  return (
    <>
      <ShopAddress />
      <OurBrands />
      <Services />
      <OurTyres/>
      <PaymentMethod />
    </>
  );
}
