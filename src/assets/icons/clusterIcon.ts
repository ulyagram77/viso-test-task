import L, { MarkerCluster } from 'leaflet';

export const clusterIcon = function (cluster: MarkerCluster) {
    return L.divIcon({
        html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
        className: 'custom-marker-cluster',
        iconSize: L.point(33, 33, true),
    });
};
