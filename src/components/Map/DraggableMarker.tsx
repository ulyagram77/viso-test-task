import { useRef, useMemo } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { IMarkerProps } from 'src/core/interfaces';
import { mapIcon } from 'src/assets';
import useMarkerStore from 'src/core/store';

const DraggableMarker = ({ marker }: IMarkerProps) => {
    const { removeMarker } = useMarkerStore();
    const markerRef = useRef<L.Marker>(null);

    const eventHandlers = useMemo(
        () => ({
            dblclick() {
                removeMarker(marker.id);
            },
        }),
        [removeMarker, marker.id],
    );

    const formattedPosition = marker.geocode.map(coord => coord.toFixed(4)).join(', ');

    return (
        <Marker
            position={marker.geocode}
            icon={mapIcon}
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
        >
            <Popup>
                <h2>{marker.popUp}</h2>
                <p>Position: {formattedPosition}</p>
            </Popup>
        </Marker>
    );
};

export default DraggableMarker;
