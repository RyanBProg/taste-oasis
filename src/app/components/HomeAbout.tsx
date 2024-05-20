import React from "react";

export default function HomeAbout() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-10 py-10">
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl mb-1 border-b-2">
          Fresh Ingredients
        </h2>
        <p className="max-w-96 font-light text-sm sm:text-md">
          We source the freshest ingredients from local farms and trusted
          suppliers, ensuring every bite is filled with natural flavors and
          wholesome goodness.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl mb-1 border-b-2">
          Masterful Creations
        </h2>
        <p className="max-w-96 font-light text-sm sm:text-md">
          Our chefs craft each dish with precision and creativity, blending
          traditional techniques with modern flair to delight your palate.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl mb-1 border-b-2">
          Asian Experience
        </h2>
        <p className="max-w-96 font-light text-sm sm:text-md">
          Experience the diverse flavors of Asia, from spicy Thai curries to
          delicate Japanese sushi, bringing authentic tastes to your table.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl sm:text-2xl mb-1 border-b-2">
          Crafted Decor
        </h2>
        <p className="max-w-96 font-light text-sm sm:text-md">
          Our restaurant features elegant, Asian-inspired decor with handcrafted
          furniture and intricate wall art, enhancing your dining experience.
        </p>
      </div>
    </section>
  );
}
