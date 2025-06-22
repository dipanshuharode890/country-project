import { FaLongArrowAltRight } from "react-icons/fa";


function Hero(){
    return(
        <>
            <main className="hero">
                <div className="container-hero grid grid-two-cols">
                    <div className="hero-content">
                        <h1 className="heading-xl">
                            Explore the world, One Country at a Time
                        </h1>
                        <p className="paragraph">
                            Discover the history, culture, and beuty of every nation. Sort
                            search and filter through countries to find the details you need.
                        </p>
                        <button>
                            Start Exploring <FaLongArrowAltRight />
                        </button>
                        
                    </div>

                    <div className="hero-image">
                        <img className="hero-image" src="https://freepngimg.com/save/30765-travel-photos/1024x354" alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hero;