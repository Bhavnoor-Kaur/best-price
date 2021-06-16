import React from 'react'
import './App.css';
import ItemsSelector from './components/ItemsSelector';

function App() {
  const [data, setData] = React.useState(null)

  // React.useEffect(() => {
  //   fetch("/api")
  //   .then((res) => res.json())
  //   .then((data) => setData(data.message));
  // }, [])
  return (
    <div className="App">
        <ItemsSelector />
    </div>
  );
}

export default App;
