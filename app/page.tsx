export default function Home() {
  return (
    <>
      <div className="pt-2 text-3xl">Not Vegan Yet?</div>
      <p className="py-4">
        Please watch this speech. It will explain you why <em>a vegan future is a kinder future</em>.
      </p>
      <div className="py-2">
        <iframe
          src="https://iframe.mediadelivery.net/embed/245757/2a6340bf-0355-4387-8ce1-1a8e6ff74dfe?autoplay=true&amp;loop=false&amp;muted=false&amp;preload=true&amp;captions=en"
          allowFullScreen
          className="w-full md:h-96 lg:h-[500px]"
        />
      </div>
      <p className="pt-8 pb-2">
        Or watch this documentary. It reveals <em>what you're truly paying for</em> as a customer of modern animal agriculture.
      </p>
      <div className="pb-4">
        <iframe
          src="https://iframe.mediadelivery.net/embed/135301/89232d42-e290-40fc-917d-5669478ee73b?autoplay=true&amp;loop=false&amp;muted=false&amp;preload=true&amp;captions=au&amp;t=40s"
          allowFullScreen
          className="w-full md:h-96 lg:h-[500px]"
        />
      </div>
      <div className="py-6 text-3xl">Ready for a change?</div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4">
        <div className="flex-1 min-h-[200px] p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <div className="pb-4">
            Find vegan food with the free app Happy Cow:
          </div>
          <div className="flex">
            <div className="px-4">
              <a href="https://www.happycow.net/" target="_blank">
                <img src="happycow-logo.png" alt="Happy Cow Logo" width={100} />
              </a>
            </div>
            <div>
              <div className="pb-2">
                <a href="https://play.google.com/store/apps/details?id=com.hcceg.veg.compassionfree&referrer=utm_source%3Dhappycow%26utm_campaign%3Dmobile_page">
                  <img
                    src="google-play-badge.png"
                    alt="Google play store"
                    width={100}
                  />
                </a>
              </div>
              <div>
                <a href="https://apple.co/2n3sNti">
                  <img
                    src="app-store-badge.png"
                    alt="Apple app store"
                    width={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[200px] p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
          <h2 className="pb-2">Try going vegan in 22 days with:</h2>
          <a href="https://challenge22.com/" target="_blank">
            <img
              src="challenge22-logo.png"
              alt="Challenge 22 Logo"
              width={190}
            />
          </a>
          <h2 className="pt-4">Registered dietitians help you out for free</h2>
        </div>
      </div>
    </>
  );
}
