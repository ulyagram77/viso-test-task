import { Map } from '../Map';
import { Title } from '../Title';
import './App.css';

function App() {
    return (
        <>
            <Title
                text="Viso test task"
                level={1}
                style={{ textAlign: 'center', textTransform: 'uppercase' }}
            />
            <Map />
        </>
    );
}

export default App;
