import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Slider() {
  const [perPage, setPerPage] = useState(calculatePerPage());

  // Function to calculate the number of slides per page based on screen size
  function calculatePerPage() {
    return window.innerWidth < 640 ? 1 : 2;
  }

  // Event listener to update perPage state on window resize
  useEffect(() => {
    function handleResize() {
      setPerPage(calculatePerPage());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        perMove: 1,
        perPage: perPage,
        gap: "2rem",
        arrows: false,
        pagination: false,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          speed: 0.7,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <section className="px-2 sm:py-26">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="bg-gray-900 rounded-md">
              <blockquote className="px-6 pt-8 text-white text-center text-sm md:text-md leading-6 text-primary sm:leading-7">
                <p>
                  <span>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      color="#1287A8"
                      size="2x"
                      className="px-4"
                    />
                  </span>
                  ASMByte has been an exceptional partner in our digital
                  transformation journey. Their team's expertise and dedication
                  have driven outstanding results for our business, and we look
                  forward to continuing our collaboration for future success.
                </p>
              </blockquote>
              <figcaption className="mt-6 pb-6">
                <img
                  className="mx-auto h-14 w-14 rounded-full"
                  src="homepage.jpg"
                  alt=""
                />
                <div className="mt-4 text-center">
                  <div className="font-semibold text-sm text-primary">Abdul Hadi</div>
                  <div className="text-secondary text-sm">CEO of Locate</div>
                </div>
                <img
                  className="mx-auto h-8 px-4"
                  src="tum.png"
                  alt=""
                />
              </figcaption>
            </figure>
          </div>
        </section>
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
