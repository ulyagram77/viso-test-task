import { Button } from 'react-bootstrap';
import { Map } from '../Map';
import { Title } from '../Title';

import useMarkerStore from 'src/core/store';
import { saveMarkersToDatabase } from 'src/core/api';

const titleStyles = {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '40px',
};

function App() {
    const { removeAllMarkers, markers } = useMarkerStore();

    return (
        <>
            <Title text="Viso test task" level={1} style={titleStyles} />
            <Map />

            <Button onClick={removeAllMarkers}>Видалити всі маркери</Button>
            <Button onClick={() => saveMarkersToDatabase(markers)}>
                Відправити маркери у <b>firebase</b>
            </Button>
        </>
    );
}

export default App;
