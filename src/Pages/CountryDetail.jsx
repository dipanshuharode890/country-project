import React, { useEffect, useState, useTransition } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getCountryFullData } from '../api/postApi';
import Loader from '../Components/Loader';
import './CountryDetail.css'; // Import the CSS file

function CountryDetail() {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryFullData(params.id);
            if (res.status === 200 && res.data && res.data.length > 0) {
                setCountry(res.data[0]);
            } else {
                console.error('Error fetching country data or no data found.');
                setCountry(null);
            }
        });
    }, [params.id]);

    if (isPending || !country) {
        return <Loader />;
    }

    return (
        <section className="country-detail-section">
            <div className="country-detail-container">
                <div className="country-grid">
                    <div className="flag-coat-container">
                        <h2 className="flag-coat-title">Flag of Country</h2>
                        {country?.flags?.svg && (
                            <img
                                src={country.flags.svg}
                                alt={country.flags.alt}
                                className="country-flag"
                            />
                        )}
                        <h2 className="flag-coat-title">Symbol of Country</h2>
                        {country.coatOfArms?.svg && (
                            <img
                                src={country.coatOfArms.svg}
                                alt={`${country.name.common}'s Coat of Arms`}
                                className="country-coat-of-arms"
                            />
                        )}
                    </div>
                    <div className="country-info">
                        <h1 className="country-official-name">{country.name.official}</h1>
                        <div className="country-info-container">
                            <p><span className="detail-label">Native Names:</span> {country.name?.nativeName ? Object.values(country.name.nativeName).map((nameObj) => `${nameObj.common} (${nameObj.official})`).join(', ') : 'N/A'}</p>
                            <p><span className="detail-label">Population:</span> {country.population?.toLocaleString() || 'N/A'}</p>
                            <p><span className="detail-label">Region:</span> {country.region || 'N/A'}</p>
                            <p><span className="detail-label">Subregion:</span> {country.subregion || 'N/A'}</p>
                            <p><span className="detail-label">Capital:</span> {country.capital?.join(', ') || 'N/A'}</p>
                            <p><span className="detail-label">Top Level Domain:</span> {country.tld?.join(', ') || 'N/A'}</p>
                            <p><span className="detail-label">Currencies:</span> {country.currencies ? Object.values(country.currencies).map((currency) => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A'}</p>
                            <p><span className="detail-label">Languages:</span> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
                            <p><span className="detail-label">Borders:</span> {country.borders?.join(', ') || 'N/A'}</p>
                            <p><span className="detail-label">Area:</span> {country.area?.toLocaleString()} sq km</p>
                            {country.demonyms && (<p><span className="detail-label">Demonyms (English):</span> {country.demonyms.eng?.m} ({country.demonyms.eng?.f})</p>)}
                            <p><span className="detail-label">CCA3:</span> {country.cca3}</p>
                            {country.translations && (<p><span className="detail-label">Common Name (German):</span> {country.translations.deu?.common}</p>)}
                            <p><span className="detail-label">Flag Emoji:</span> {country.flag}</p>
                            {country.maps && (<p><span className="detail-label">Maps:</span> <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a> | <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">OpenStreetMap</a></p>)}
                            {country.car && (<p><span className="detail-label">Car Side:</span> {country.car.side}</p>)}
                            <p><span className="detail-label">Timezones:</span> {country.timezones?.join(', ') || 'N/A'}</p>
                            <p><span className="detail-label">Continents:</span> {country.continents?.join(', ') || 'N/A'}</p>
                            <p><span className="detail-label">Start of Week:</span> {country.startOfWeek}</p>
                            {country.capitalInfo?.latlng && (<p><span className="detail-label">Capital Coordinates:</span> {country.capitalInfo.latlng.join(', ')}</p>)}
                            {country.postalCode && (<p><span className="detail-label">Postal Code Format:</span> {country.postalCode.format || 'N/A'} (Regex: {country.postalCode.regex || 'N/A'})</p>)}
                            {country.gini && (<p><span className="detail-label">Gini Coefficient ({Object.keys(country.gini)[0]}):</span> {Object.values(country.gini)[0]}</p>)}
                            <p><span className="detail-label">Independent:</span> {country.independent ? 'Yes' : 'No'}</p>
                            <p><span className="detail-label">Status:</span> {country.status}</p>
                            <p><span className="detail-label">UN Member:</span> {country.unMember ? 'Yes' : 'No'}</p>
                            <p><span className="detail-label">CCA2:</span> {country.cca2}</p>
                            <p><span className="detail-label">CCN3:</span> {country.ccn3 || 'N/A'}</p>
                            <p><span className="detail-label">CIOC:</span> {country.cioc || 'N/A'}</p>
                            <p><span className="detail-label">FIFA:</span> {country.fifa || 'N/A'}</p>
                        </div>
                    </div>
                </div>
                <div className="back-button-container">
                    <NavLink to="/country">
                        <button className="back-button">Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default CountryDetail;