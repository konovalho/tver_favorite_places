import React from 'react';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';

// import styles from './index.styl';

const mapData = {
  center: [56.859847, 35.911995],
  zoom: 9,
  bounds: [[56.945978, 35.642052], [56.777854, 36.149139]],
  type: 'yandex#map',
};

const places = [
  {
    id: 1,
    properties: {
      iconCaption: 'Buna Buna',
    },
    coordinates: {
      type: 'Point',
      coordinates: [56.856992, 35.909221],
    },
    options: {
      preset: 'islands#redIcon',
    },
  },
  {
    id: 2,
    properties: {
      iconCaption: 'Путевой дворец',
      iconColor: '#000',
    },
    coordinates: {
      type: 'Point',
      coordinates: [56.862487, 35.899962],
    },
    iconColor: '#000',
  },
];

const MyMap = () => (
  <YMaps>
    <Map defaultState={mapData} width="100%" height="100%">
      {places.map((item) => (
        <Placemark
          key={item.id}
          geometry={item.coordinates}
          properties={item.properties}
          options={item.options}
        />
      ))}
    </Map>
  </YMaps>
);

export default MyMap;
