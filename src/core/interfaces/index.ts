export interface IMarkerData {
    id: string;
    geocode: [number, number];
    popUp: string;
}
export interface ITitleProps {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    style?: object;
}
