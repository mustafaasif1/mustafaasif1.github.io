import { useState } from "react";

const navigation = [
  { name: "Our Services", link: "#ourservices" },
  { name: "Our Values", link: "#ourvalues" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Work with Us", link: "#workwithus" },
  { name: "Leadership", link: "#leadership" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="py-16 bg-gray-900">
      Hello
      {/* <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between px-6 md:px-10 lg:px-16"
          aria-label="Global"
        >
          
            <span className="sr-only">ASMBYTE</span>
            <img
              className="h-64 w-auto -mb-16 -mt-16 -ml-5"
              src={whitelogo}
              alt=""
            />

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex items-center hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <div
                className="text-sm font-semibold leading-6 text-white cursor-pointer"
                onClick={() => {
                  closeMobileMenu();
                  window.location.replace(item.link);
                }}
                key={item.name}
              >
                <span>{item.name}</span>
              </div>
            ))}
            <div
              className="block w-full rounded border border-blue-700 bg-blue-700 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
              onClick={() => {
                closeMobileMenu();
                window.location.replace("#contactus");
              }}
            >
              Contact us
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-8 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-36 w-auto -ml-4 -mb-12 -mt-12"
                  src={blacklogo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        closeMobileMenu();
                        window.location.replace(item.link);
                      }}
                      key={item.name}
                    >
                      <span>{item.name}</span>
                    </div>
                  ))}
                  <div className="py-7">
                    <div
                      className="block flex justify-center rounded border border-blue-600 bg-blue-600 px-20 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto cursor-pointer"
                      onClick={() => window.location.replace("#contactus")}
                    >
                      Contact us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header> */}
    </div>
  );
};