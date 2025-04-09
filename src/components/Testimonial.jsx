export default function Testimonial() {
  return (
    <section className="relative w-full px-4 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="relative z-10 mx-auto max-w-7xl text-center py-12">
        <div className="relative flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-200 p-6 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <img
            className="absolute right-4 top-4 h-6 w-6 sm:right-6 sm:top-6 md:right-8 md:top-8 lg:right-12 lg:top-12 lg:h-10 lg:w-10"
            src="assets/images/home-page/quotes.png"
            alt="Inspirational Quotes"
          />
          <div className="flex flex-col items-center gap-4 px-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white sm:text-2xl md:text-3xl lg:text-4xl">
              "Found a Community <br /> Of Passionate Founders"
            </h2>
            <div className="text-sm font-light text-gray-600 dark:text-gray-300 sm:text-base md:text-lg lg:text-xl max-w-lg mx-auto">
              In CoFoundersLab I have found a community of passionate founders and advisors who help each other by
              sharing their experiences with direct feedback that allows a founder to grow and develop their company
              to its potential. It's been my favorite group to network with like-minded professionals.
            </div>
            <div className="mt-5 flex items-center gap-4 sm:gap-6">
              <img
                className="h-12 w-12 rounded-full border-2 border-gray-200 dark:border-gray-700"
                src="assets/images/home-page/heather-dawson.png"
                alt="Heather Dawson"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white sm:text-xl md:text-2xl">
                  Heather Dawson
                </h3>
                <p className="text-sm font-light text-gray-600 dark:text-gray-300 sm:text-base md:text-lg">
                  CEO, Xiggit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
