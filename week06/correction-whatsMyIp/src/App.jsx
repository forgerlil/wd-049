import { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer } from 'react-leaflet';
import { DateTime } from 'luxon';
import Loading from './components/Loading';
import 'leaflet/dist/leaflet.css';

const App = () => {
  const [ipInfo, setIpInfo] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [timeNow, setTimeNow] = useState(DateTime.local().c);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const ipData = await axios(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_GEO_API_KEY
          }`
        );

        const countryData = await axios(
          `https://restcountries.com/v3.1/alpha/de`
        );

        setIpInfo(ipData.data);
        setCountryInfo(countryData.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getApiData();

    const intervalId = setInterval(() => setTimeNow(DateTime.local().c), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return countryInfo ? (
    <>
      <MapContainer
        center={[ipInfo.location.lat, ipInfo.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
        className='h-screen'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999999] card bg-base-100 shadow-xl rounded-xl overflow-hidden w-96'>
        <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
        <div className='card-body text-center'>
          <h2 className='card-title block'>Your IP is: {ipInfo.ip}</h2>
          <p>
            You are currently located in {ipInfo.location.city},{' '}
            {countryInfo.name.common}
          </p>
          <hr className='my-2' />
          <p className='font-light'>
            <span role='img' aria-label='calendar emoji'>
              📅
            </span>
            Today is the{' '}
            {new Date(Date.now()).getDate().toString().padStart(2, '0')}.
            {(new Date(Date.now()).getMonth() + 1).toString().padStart(2, '0')}.
            {new Date(Date.now()).getFullYear()}
          </p>
          <p className='font-light'>
            <span role='img' aria-label='clock emoji'>
              🕑
            </span>
            Your local time is {timeNow.hour.toString().padStart(2, '0')}:
            {timeNow.minute.toString().padStart(2, '0')}:
            {timeNow.second.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default App;
