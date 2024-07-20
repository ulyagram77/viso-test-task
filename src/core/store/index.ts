// useMarkerStore.ts
import { create } from 'zustand';
import { IMarker, IMarkerStore } from '../interfaces';

const useMarkerStore = create<IMarkerStore>(set => ({
    markers: [
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
    ],
    addMarker: (newMarker: IMarker) =>
        set(state => ({
            markers: [...state.markers, newMarker],
        })),
    removeMarker: (id: string) =>
        set(state => ({
            markers: state.markers.filter(marker => marker.id !== id),
        })),
    removeAllMarkers: () => set({ markers: [] }),
    updateMarkerPosition: (id: string, newPosition: [number, number]) =>
        set(state => ({
            markers: state.markers.map(marker =>
                marker.id === id ? { ...marker, geocode: newPosition } : marker,
            ),
        })),
}));

export default useMarkerStore;
