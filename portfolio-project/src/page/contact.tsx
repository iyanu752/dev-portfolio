import Orb from "@/effects/Backgrounds/Orb/Orb";
import LagosClock from "@/pageComponents/clock";
import Footer from "@/pageComponents/footer";

export default function Contact() {
  return (
    <>
     
      <section className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 sm:px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-8">
        
          <div className="flex-1 md:flex-[2] flex flex-col justify-center w-full">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center md:text-left">
              Contact
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 text-center md:text-left">
              Remember, this is not just a story, this is our future
            </p>

            <form className="space-y-6 w-full">
              <div>
                <label className="block text-sm font-future mb-2 text-center md:text-left">
                  INQUIRY FORM
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full sm:w-1/2 px-4 py-3 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full sm:w-1/2 px-4 py-3 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <textarea
                placeholder="MESSAGE"
                className="w-full px-4 py-3 h-32 bg-neutral-900 text-gray-300 rounded-lg focus:outline-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition"
              >
                SEND EMAIL
              </button>
            </form>
          </div>

        
          <div className="flex-1 md:flex-[1] flex justify-center items-center w-full">
            <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-3xl overflow-hidden relative">
              <Orb
                hoverIntensity={0.97}
                rotateOnHover={true}
                hue={271}
                forceHoverState={false}
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4">
        <LagosClock />
      </section>

      <Footer />
    </>
  );
}
