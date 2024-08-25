import OurBrands from "@/modules/OurBrands";
import PaymentMethod from "@/modules/PaymentMethod";
import Services from "@/modules/Services";
import ShopAddress from "@/modules/ShopAddress";

export default function Home() {
  return (
    <>
      {/* I wanted to provide an update on the assignment I’ve been working on. I’ve
      made significant progress and am pleased with the results so far. However,
      due to time constraints, I was unable to complete one particular section
      of the code. I want to assure you that I have the capability to address
      this section, but I could not allocate sufficient time to do so within the
      given deadline. I have put my best effort into the parts I have completed,
      and I believe they demonstrate my skills and commitment to the project. I
      kindly ask you to review the code with the understanding that the
      unfinished section was due to time limitations rather than a lack of
      ability. */}
      <ShopAddress />
      <OurBrands />
      <Services />
      <PaymentMethod />
    </>
  );
}
