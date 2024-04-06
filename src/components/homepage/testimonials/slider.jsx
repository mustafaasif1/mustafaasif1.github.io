import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Slider({ testimonials }) {
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
				perMove: perPage,
        perPage: perPage,
				gap: "1rem",
        drag: "free",
        focus  : 'center',
				arrows: false,
        lazyLoad: "nearby",
				autoScroll: {
					pauseOnHover: true,
					pauseOnFocus: false,
					speed: 0.6,
				},
			}}
			extensions={{ AutoScroll }}
		>
			{testimonials.map((testimonial, index) => (
				<SplideSlide key={index}>
					<section className="px-2 sm:py-26 flex h-full items-center">
						<div className="mx-auto max-w-2xl lg:max-w-4xl">
							<figure className="rounded-md">
								<blockquote className="px-6 pt-8 text-center text-sm md:text-md leading-6 text-primary sm:leading-7">
									<p>
										<span>
											<FontAwesomeIcon
												icon={faQuoteLeft}
												color="#1287A8"
												size="2x"
												className="px-4"
											/>
										</span>
										{testimonial.quote}
									</p>
								</blockquote>
								<figcaption className="mt-6 pb-6">
									<div className="relative">
										<img
											className="mx-auto h-16 w-16 rounded-full"
											src={testimonial.authorImage}
											alt=""
										/>
										<img
											className="mx-auto h-10 w-10 rounded-full absolute left-1/2 top-1/2 border border-quaternary shadow-md object-contain"
											src={testimonial.companyImage}
											alt=""
										/>
									</div>

									<div className="mt-4 text-center">
										<div className="font-semibold text-sm text-primary">
											{testimonial.author}
										</div>
										<div className="text-secondary text-sm">
											{testimonial.position}
										</div>
									</div>
								</figcaption>
							</figure>
						</div>
					</section>
				</SplideSlide>
			))}
		</Splide>
	);
}

export default Slider;
