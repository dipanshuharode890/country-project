import '../Components/header.css'
import { NavLink } from "react-router";

function CountryCard({ country }) {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="country-card-item">
            <div className="container-card bg-white-box">
                <img className="country-flag" src={flags.svg} alt={flags.alt} />

                <div className="country-info">
                    <p className="card-title">{name.common}</p>
                    <p>
                        <span className="card-description">Population : </span>
                        {population.toLocaleString()}
                    </p>
                    <p>
                        <span>Region : </span> {region}
                    </p>
                    <p>
                        <span>Capital : </span> {capital[0]}
                    </p>
                    <NavLink to={`/country/${name.common}`}>
                        <button className="country-button">Read more..</button>
                    </NavLink>
                </div>
            </div>
        </li>
    );
}

export default CountryCard;