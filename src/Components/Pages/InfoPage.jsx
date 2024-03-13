import { DescriptionSection } from "../DescriptionSection/DescriptionSection"
import { Footer } from "../Footer/Footer"
import { HomeSection } from "../HomeSection/HomeSection"
import { MobileAppSection } from "../MobileAppSection/MobileAppSection"
import { PricingSection } from "../PricingSection/PricingSection"
import { TestimonialSection } from "../TestimonialSection/TestimonialSection"
import "../../../index.css"

export const InfoPage = ()=>{
    return (
    <>
        <main>
            {/* HOME SECTION */}
            
            <HomeSection />
            {/* DESCRIPTION SECTION  */}
            <DescriptionSection />
            {/* PRICING SECTION  */}
            <PricingSection />
            {/* {MOBILEAPP SECTION} */}
            <MobileAppSection />
            {/* TESTIMONIALS SECTION */}
            <TestimonialSection />
        </main>
        <Footer />
      </>
    )
}