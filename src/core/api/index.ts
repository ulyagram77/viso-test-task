import { db } from '../db/firebase';
import { ref, set } from 'firebase/database';
import { IMarker } from '../interfaces';

export const saveMarkersToDatabase = async (markers: IMarker[]) => {
    try {
        const markersRef = ref(db, 'markers');

        // Отправляем данные
        await set(markersRef, markers);
        console.log('Markers saved successfully!');
    } catch (error) {
        console.error('Error saving markers:', error);
    }
};
