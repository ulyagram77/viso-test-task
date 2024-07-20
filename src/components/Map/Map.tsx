import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { IMarkerData } from 'src/core/interfaces';
import { mapIcon, clusterIcon } from 'src/assets';
import 'leaflet/dist/leaflet.css';

const markers: IMarkerData[] = [
    {
        id: '1',
        geocode: [49.9945, 36.2312],
        popUp: 'Маркер 1',
    },
    {
        id: '2',
        geocode: [50.0048, 36.2335],
        popUp: 'Маркер 2',
    },
    {
        id: '3',
        geocode: [49.9981, 36.2411],
        popUp: 'Маркер 3',
    },
    {
        id: '4',
        geocode: [50.0141, 36.2432],
        popUp: 'Маркер 4',
    },
    {
        id: '5',
        geocode: [49.9898, 36.2277],
        popUp: 'Маркер 5',
    },
    {
        id: '6',
        geocode: [49.9934, 36.2317],
        popUp: 'Маркер 6',
    },
];

const Map = () => {
    return (
        <MapContainer center={[49.9935, 36.2304]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={clusterIcon}>
                {markers.map(marker => (
                    <Marker position={marker.geocode} icon={mapIcon} key={marker.id}>
                        <Popup>
                            <h2>{marker.popUp}</h2>
                        </Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;
