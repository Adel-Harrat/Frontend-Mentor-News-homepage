const Grid = () => {
  return (
    <>
      <section className="mt-8 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col-dense lg:gap-6 my-grid overflow-hidden">
        <article className="col-span-2">
          <img
            src="./images/image-web-3-mobile.jpg"
            alt="web 3 image"
            className="h-full w-full object-cover"
          />
        </article>

        <article>
          <h1 className="text-4xl font-extrabold mt-5 text-custom-very-dark-blue lg:text-[2.75rem]  xl:text-6xl">
            The Bright <br className="lg:hidden" /> Future of Web{" "}
            <br className="lg:hidden" /> 3.0?
          </h1>
        </article>

        <article className="lg:flex lg:flex-col lg:justify-between">
          <p className="mt-3 text-custom-dark-grayish-blue xl:text-lg">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            href="#"
            className="bg-custom-soft-red text-white uppercase tracking-widest text-sm px-8 py-4 inline-block mt-5 font-bold w-44 hover:bg-custom-very-dark-blue transition-all ease-in-out duration-500"
          >
            Read More
          </a>
        </article>

        <article className="bg-custom-very-dark-blue px-5 py-6 mt-16 lg:mt-0 lg:row-span-2">
          <h2 className="text-custom-soft-orange text-2xl font-bold mb-6">
            New
          </h2>
          <ul className="divide-y divide-custom-dark-grayish-blue flex flex-col space-y-6">
            <li>
              <a
                href="#"
                className="block text-white text-lg font-bold hover:text-custom-soft-orange transition-all ease-in-out duration-500"
              >
                Hydrogen VS Electric Cars
              </a>
              <p className="text-custom-grayish-blue text-sm mt-1">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </li>
            <li>
              <a
                href="#"
                className="block pt-6 text-white text-lg font-bold hover:text-custom-soft-orange transition-all ease-in-out duration-500"
              >
                The Downsides of AI Artistry
              </a>
              <p className="text-custom-grayish-blue text-sm mt-1">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>

            <li>
              <a
                href="#"
                className="block pt-6 text-white text-lg font-bold hover:text-custom-soft-orange transition-all ease-in-out duration-500"
              >
                Is VC Funding Drying Up?
              </a>
              <p className="text-custom-grayish-blue text-sm mt-1">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Grid;
