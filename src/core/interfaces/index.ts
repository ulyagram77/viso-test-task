export interface IMarker {
    id: string;
    geocode: [number, number];
    popUp: string;
}

export interface IMarkerStore {
    markers: IMarker[];
    addMarker: (newMarker: IMarker) => void;
    removeMarker: (id: string) => void;
    removeAllMarkers: () => void;
    updateMarkerPosition: (id: string, newPosition: [number, number]) => void;
}

export interface ITitleProps {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    style?: object;
}

export interface IMarkerProps {
    marker: IMarker;
}
