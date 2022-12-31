import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Head from 'next/script';
import styled from '@emotion/styled';
import { valueType } from 'antd/es/statistic/utils';

declare global {
  interface Window {
    kakao: any;
  }
}

interface IKakaoMapProps {
  currentPosition?: Partial<GeolocationCoordinates>;
  setCurrentPosition: Dispatch<
    SetStateAction<Partial<GeolocationCoordinates | undefined>>
  >;
  markerPosition?: Partial<GeolocationCoordinates>;
  setMarkerPosition: Dispatch<
    SetStateAction<Partial<GeolocationCoordinates | undefined>>
  >;
  radius: valueType | null;
  address: string;
}

// const KAKAO_API_KEY = '93b1f223fb41241d4e9e78362666dc12';

const KakaoMapLauncher = (props: IKakaoMapProps) => {
  const [mapLevel, setMapLevel] = useState<number>(4);
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?&autoload=false&appkey=93b1f223fb41241d4e9e78362666dc12&libraries=services`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const container = document.getElementById('map');

        const options = {
          center: new kakao.maps.LatLng(
            props.currentPosition?.latitude,
            props.currentPosition?.longitude,
          ),
          level: mapLevel,
        };

        const map = new kakao.maps.Map(container, options);

        // const imageSrc = '/marker/marker.png'; // 마커이미지의 주소입니다
        // const imageSize = new kakao.maps.Size(45, 45); // 마커이미지의 크기입니다
        // const imageOption = { offset: new kakao.maps.Point(20, 40) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        // const markerImage = new kakao.maps.MarkerImage(
        //   imageSrc,
        //   imageSize,
        //   imageOption,
        // );
        const markerPosition = new kakao.maps.LatLng(
          props.markerPosition?.latitude,
          props.markerPosition?.longitude,
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map,
          position: markerPosition,
          draggable: true,
        });

        kakao.maps.event.addListener(marker, 'dragend', () => {
          props.setMarkerPosition({
            // marker.getPosition().Ma,
            // marker.getPosition().La,
            latitude: marker.getPosition().Ma,
            longitude: marker.getPosition().La,
          });
        });
        kakao.maps.event.addListener(map, 'dragend', () => {
          const latlng = map.getCenter();
          props.setCurrentPosition({
            latitude: latlng.getLat(),
            longitude: latlng.getLng(),
          });
        });

        const circle = new kakao.maps.Circle({
          center: new kakao.maps.LatLng(
            props.markerPosition?.latitude,
            props.markerPosition?.longitude,
          ),
          radius: props.radius,
          strokeWeight: 1,
          strokeColor: 'transparent',
          strokeOpacity: 1,
          strokeStyle: 'solid',
          fillColor: '#000',
          fillOpacity: 0.2,
        });

        circle.setMap(map);

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);
        kakao.maps.event.addListener(map, 'zoom_changed', () => {
          const level = map.getLevel();
          setMapLevel(level);
        });
        // const ps = new kakao.maps.services.Places();
      });
    };
  }, [props, mapLevel]);

  return (
    <>
      <Head></Head>
      <Map id="map"></Map>
    </>
  );
};

export default KakaoMapLauncher;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;
