import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3VzdGF2b3dhcm1saW5nIiwiYSI6ImNreGhtdndjazByaGsyeG1sYWp3aW56dTgifQ.NPHYdnWCiaO-JW29xcxxnQ'; // Public token provided by mapbox

export const Home = () => {
  let map: mapboxgl.Map;

  useEffect(() => {
    map = new mapboxgl.Map({
      container: 'mapWrapper',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });
  }, []);

  const styleChange = async () => {
    if (map.getStyle().name !== 'Mapbox Streets') {
      map.setStyle('mapbox://styles/mapbox/streets-v11');
    }

    map.setStyle('mapbox://styles/mapbox/satellite-v9');
  };

  return (
    <div style={{ height: '100vh' }} id="mapWrapper">
      <button type="button" onClick={styleChange}>
        Trocar estilo
      </button>
    </div>
  );
};
