import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export const FAQ = () => {
  // Array of FAQ objects
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing?",
      answer:
        "Our toolbox includes a diverse set of technologies. We're proficient in various coding languages, design software, and cutting-edge technologies to ensure your project is developed with the latest tools available.",
    },
    {
      question: "What technolgies do you work with?",
      answer:
        "Project timelines vary based on complexity and scope. We'll provide a detailed timeline during our initial discussions, taking into account your project requirements and any specific deadlines.",
    },
    {
      question: "How long does it take to complelete a project",
      answer:
        "Client satisfaction is our priority. We maintain open communication, involve clients in the decision-making process, and provide regular updates. Our goal is to not just meet but exceed your expectations.",
    },
    {
      question: "What is your approach to project management?",
      answer:
        "We follow an agile project management approach, ensuring flexibility and adaptability throughout the project lifecycle. Regular feedback loops and iterative development allow us to deliver high-quality results.",
    },
  ];

  const faqsLeft = faqs.slice(0, Math.ceil(faqs.length / 2));
  const faqsRight = faqs.slice(Math.ceil(faqs.length / 2));

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 bg-white py-20 sm:py-32 px-6 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-start">
        <h1 className="text-4xl text-gray-900 lg:text-3xl">
          Frequently asked questions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          {faqsLeft.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 bg-gray-50">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between w-full px-6 py-6 text-left"
              >
                <h2 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h2>
                <span className="rounded-full bg-white p-1.5 text-gray-900">
                  {openIndex === index ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="px-6 pb-6 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div>
          {faqsRight.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 bg-gray-50">
              <button
                onClick={() => toggleAccordion(index + faqsLeft.length)}
                className="flex justify-between w-full px-6 py-6 text-left"
              >
                <h2 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h2>
                <span className="rounded-full bg-white p-1.5 text-gray-900">
                  {openIndex === index + faqsLeft.length ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </span>
              </button>
              {openIndex === index + faqsLeft.length && (
                <p className="px-6 pb-6 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
