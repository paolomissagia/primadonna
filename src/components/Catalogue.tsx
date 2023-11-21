import Caruso from "../assets/images/singers/caruso.png";
import Gedda from "../assets/images/singers/gedda.png";
import Beniamino from "../assets/images/singers/beniamino.png";
import Jussi from "../assets/images/singers/jussi.jpg";
import Lanza from "../assets/images/singers/lanza.jpg";
import Monaco from "../assets/images/singers/monaco.jpg";
import Pavarotti from "../assets/images/singers/pavarotti.jpg";
import { scrollTo } from "../utils/scrollToView";

export default function Catalogue() {
  return (
    <div id="catalogue" className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg text-center items-center">
            <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
              brave the new world
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              below you will be able to discover the world of opera in a new
              way, based on the works of the greatest composers.
            </p>
            <button
              onClick={() => scrollTo("operas")}
              className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700 mt-8 hover:cursor-pointer"
            >
              operas
            </button>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-xl overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src={Caruso}
                          alt=""
                          className="w-full h-full object-center object-cover hover:ease-in-out"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Gedda}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Beniamino}
                          alt=""
                          className="w-full h-full object-center object-cover hover:ease-in-out"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Jussi}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Lanza}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Monaco}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-xl overflow-hidden">
                        <img
                          src={Pavarotti}
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}