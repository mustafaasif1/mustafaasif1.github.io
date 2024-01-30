import React from "react";
import { Seperator } from "../components/Seperator";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const navigation = [
  { name: "Products", link: "/products" },
  { name: "Our Values", link: "/values" },
  { name: "Open Roles", link: "/openroles" },
  { name: "Blog", link: "/blog" },
];

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="px-6 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <span className="text-4xl font-bold tracking-wide text-gray-200 uppercase">
                Mustafa Asif
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-200">
                Connect with me.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-300">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-200">Phone:</p>
              <a
                href="tel:+4915213255990"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +49 (152) 13255990
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-200">Email:</p>
              <a
                href="mailto:mustafaasif1@hotmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                mustafaasif1@hotmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-200">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Munich, DE
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-100">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <Facebook size={24} />
              </a>
              <a
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <Twitter size={24} />
              </a>
              <a
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
              spare ribs salami.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-300">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
