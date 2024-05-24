import react, {useEffect, useState} from 'react'
import './App.css';

function App() {

    const[data, setData] = useState([]);

    const getServers = async () => {
        const res = await fetch('http://localhost:8090/test');
        const json = await res.json();
        setData(json);
    }

    useEffect(() => {
        getServers();
    }, []);

    return (
    <div className="App">
      <header className="App-header">
        <div>
            {Object.keys(data).map(key => {
                return (
                    <div>
                        <p>{key}</p>
                        <input
                            type="text"
                            defaultValue={data[key]}
                        />
                    </div>
                )
            })}
        </div>
      </header>
    </div>
    );
}

export default App;
