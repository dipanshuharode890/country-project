import countryFacts from "../api/countryData.json";

function About() {
    return (
        <>
            <section>
                <div className="section-about">
                    <h2 className="container-title">
                        Here are the Interesting Facts
                        <br />
                        we're proud of
                    </h2>
                </div>

                <div className="gradient-cards">
                    {
                        countryFacts.map((country) => {
                            const { id, countryName, capital, population, interestingFact } = country;
                            return (
                                <div className="card" key={id}>
                                    <div className="container-card bg-orange-box">
                                        <h3 className="card-title">{countryName}</h3>
                                        <p>
                                            <span className="card-discription">Capital :</span>
                                            {capital}
                                        </p>
                                        <p>
                                            <span className="card-discription">Population :</span>
                                            {population}
                                        </p>
                                        <p>
                                            <span className="card-discription">Interesting Facts :</span>
                                            {interestingFact}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default About;