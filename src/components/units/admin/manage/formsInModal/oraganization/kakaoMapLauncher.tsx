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
  currentPosition: Partial<GeolocationCoordinates>;
  setCurrentPosition: Dispatch<SetStateAction<Partial<GeolocationCoordinates>>>;
  markerPosition: Partial<GeolocationCoordinates>;
  setMarkerPosition: (args: Partial<GeolocationCoordinates>) => void;
  radius: valueType | null;
  address: string;
}

const KakaoMapLauncher = (props: IKakaoMapProps) => {
  const [mapLevel, setMapLevel] = useState<number>(4);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?&autoload=false&appkey=${String(
      process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    )}&libraries=services`;
    script.defer = true;
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        if (props.address) {
          const geocoder = new kakao.maps.services.Geocoder();
          // 주소로 좌표를 검색합니다
          geocoder.addressSearch(
            props.address,
            function (result: any, status: any) {
              // 정상적으로 검색이 완료됐으면
              if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                props.setCurrentPosition({
                  latitude: coords.Ma,
                  longitude: coords.La,
                });
                // 결과값으로 받은 위치로 마커를 이동시킵니다
                props.setMarkerPosition({
                  latitude: coords.Ma,
                  longitude: coords.La,
                });
              }
            },
          );
        }
      });
    };
  }, [props.address]);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?&autoload=false&appkey=${String(
      process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    )}&libraries=services`;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const { kakao } = window;

      kakao.maps.load(() => {
        const container = document.getElementById('map');

        const options = {
          center: new kakao.maps.LatLng(
            props.currentPosition.latitude,
            props.currentPosition.longitude,
          ),
          level: mapLevel,
        };

        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(
          props.markerPosition.latitude,
          props.markerPosition.longitude,
        );

        const marker = new kakao.maps.Marker({
          map,
          position: markerPosition,
          draggable: true,
        });

        kakao.maps.event.addListener(marker, 'dragend', () => {
          props.setMarkerPosition({
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
            props.markerPosition.latitude,
            props.markerPosition.longitude,
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
      });
    };
  }, [
    props.radius,
    props.currentPosition,
    props.markerPosition,
    props.setCurrentPosition,
    props.setMarkerPosition,
    mapLevel,
  ]);

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
