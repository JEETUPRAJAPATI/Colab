export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-[#FFFFFF80] bg-[#000] text-[#FFF]">
      <div
        className="px-0 py-5 sm:px-6 md:px-8 lg:px-10"
        style={{
          background: 'linear-gradient(360deg, rgba(185, 8, 118, 0.21), rgba(3, 1, 2, 0))',
        }}
      >
        <div className="container mx-auto py-10 text-center">
          <div className="pb-10">
            <img
              src="/white-logo.png"
              alt="CoFoundersLab"
              className="mx-auto hidden max-w-[200px] dark:block md:max-w-[275px] lg:max-w-[362px]"
            />
            <img
              src="/logo.png"
              alt="CoFoundersLab"
              className="mx-auto block max-w-[200px] dark:hidden md:max-w-[275px] lg:max-w-[362px]"
            />
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-6 sm:flex-row lg:gap-8">
            {/* Product */}
            <div className="min-w-[200px] flex-1 px-4 md:min-w-[250px] lg:min-w-[300px]">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:text-xl lg:text-2xl">
                Product
              </h4>
              <ul className="space-y-2">
                <li className="text-base font-light text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white md:text-lg">
                  <a className="block py-1.5" href="/premium">
                    Premium
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="min-w-[200px] flex-1 px-4 md:min-w-[250px] lg:min-w-[300px]">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:text-xl lg:text-2xl">
                Resources
              </h4>
              <ul className="space-y-2">
                <li className="text-base font-light text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white md:text-lg">
                  <a className="block py-1.5" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="min-w-[200px] flex-1 px-4 md:min-w-[250px] lg:min-w-[300px]">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:text-xl lg:text-2xl">
                Company
              </h4>
              <ul className="space-y-2">
                <li className="text-base font-light text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white md:text-lg">
                  <a className="block py-1.5" href="/support">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="min-w-[200px] flex-1 px-4 md:min-w-[250px] lg:min-w-[300px]">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:text-xl lg:text-2xl">
                Join Newsletter
              </h4>
              <form
                id="newsletter-form"
                className="mx-auto flex transform-gpu flex-row items-center gap-2 rounded-xl border border-[#00000080] bg-[#FFFFFF26] p-1 transition-transform dark:border-[#FFFFFF80] lg:max-w-[350px]"
              >
                <input
                  type="email"
                  className="w-full flex-1 border-0 bg-transparent px-4 py-2 text-sm font-normal leading-4 text-[#8F8F8F] outline-0"
                  name="email"
                  id="email"
                  placeholder="Type email here"
                />
                <input
                  type="submit"
                  className="cursor-pointer rounded-xl bg-[#33A0FF] p-3 text-white"
                  value="Subscribe"
                />
              </form>
            </div>

            {/* Social Links */}
            <div className="min-w-[200px] flex-1 px-4 md:min-w-[250px] lg:min-w-[300px]">
              <h4 className="mb-4 text-lg font-medium text-black dark:text-white md:text-xl lg:text-2xl">
                Connect with us
              </h4>
              <div className="flex justify-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/cofounderslab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white"
                >
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/cofounderslab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white"
                >
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/cofounderslab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#344054] transition-colors duration-300 hover:text-[#33A0FF] dark:text-white"
                >
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
