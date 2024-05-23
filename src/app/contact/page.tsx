import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Taste Oasis",
  description:
    "Get in touch with Taste Oasis. Find our location, contact details, and opening hours. We are here to assist you with any inquiries or special requests. Reach out to us today!",
};

export default async function Contact() {
  return (
    <>
      <div className="px-4 mt-14 mb-20 max-w-[500px] mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold text-black">
          <span className="text-orange-400">Contact</span> Us
        </h1>
        <p className="my-4">
          Have a request or need further help? Just fill in our contact form and
          we'll get back to you as soon as we can.
        </p>
        <ContactForm />
        <div className="mt-14">
          <h2 className="font-semibold text-4xl mb-3">Our Contact Details</h2>
          <p className="text-orange-400 mb-1">Opening Hours:</p>
          <p>
            <span className="font-light text-sm">Mon:</span> Closed
          </p>
          <p>
            <span className="font-light text-sm">Tue - Thu:</span> 9am - 9pm
          </p>
          <p>
            <span className="font-light text-sm">Fri - Sun:</span> 10am - 10pm
          </p>
          <p className="mt-6">
            <span className="font-light text-sm">Tel:</span> 0466789876
          </p>
          <address className="mt-1">
            21 Bluebird Court, Cutterfield, 87564, PA
          </address>
        </div>
      </div>
    </>
  );
}
