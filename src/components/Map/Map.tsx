import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import { clusterIcon } from 'src/assets';
import { nanoid } from 'nanoid';
import 'leaflet/dist/leaflet.css';

import useMarkerStore from 'src/core/store';
import DraggableMarker from './DraggableMarker';
import { IMarker } from 'src/core/interfaces';

const AddMarkerOnClick = () => {
    const addMarker = useMarkerStore(state => state.addMarker);

    useMapEvents({
        click(e) {
            const newMarker: IMarker = {
                id: nanoid(),
                geocode: [e.latlng.lat, e.latlng.lng],
                popUp: 'Новий маркер',
            };
            addMarker(newMarker);
        },
    });
    return null;
};

const Map = () => {
    const { markers } = useMarkerStore();

    return (
        <MapContainer
            center={[49.9935, 36.2304]}
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddMarkerOnClick />
            <MarkerClusterGroup chunkedLoading iconCreateFunction={clusterIcon}>
                {markers.map(marker => (
                    <DraggableMarker marker={marker} key={marker.id} />
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default Map;
