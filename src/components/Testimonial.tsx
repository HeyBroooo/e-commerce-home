import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">    
          <img
                src="fruser.jpg"
                alt="User Profile"
                className="w-30 h-20 rounded-full inline-flex object-cover object-center"
              />            
              
            <p className="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90s cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90s pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              MR UNKNOWN
            </h2>
            <p className="text-gray-500">Senior User</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
