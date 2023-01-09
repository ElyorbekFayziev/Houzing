import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function App(props) {
  const defaultState = {
    center: [props?.data ? props?.data?.latitude : 41.311081,props?.data ?  props?.data?.longitude : 69.240562],
    zoom: 7,
  };
console.log(props?.data);
  return (
    <div style={{width:'100%',marginTop:'40px'}}>

    <YMaps style={{width:'100%'}}>
      <Map defaultState={defaultState} width={'100%'} height={'400px'}>
        <Placemark geometry={defaultState?.center} />
      </Map>
    </YMaps>
    </div>
  );
}