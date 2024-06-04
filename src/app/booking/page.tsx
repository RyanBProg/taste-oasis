import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Booking | Taste Oasis",
  description:
    "Book your table at Taste Oasis easily online. Ensure your spot at our popular dining destination and enjoy an exceptional culinary experience. Make your reservation now!",
};

export default async function Booking() {
  return (
    <>
      <div className="px-4 mt-14 mb-20 max-w-[500px] mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold text-black">
          <span className="text-orange-400">Book</span>ing
        </h1>
        <p className="my-4">
          Looking to book a table? Fill in our request form and we will get back
          to you with a confirmation of your booking.
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
