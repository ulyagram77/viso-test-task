import { divIcon, point, MarkerCluster, DivIcon } from 'leaflet';

export const clusterIcon = function (cluster: MarkerCluster): DivIcon {
    return new divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: 'custom-marker-cluster',
        iconSize: point(33, 33, true),
    });
};
