import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoTable from './components/CryptoTable';
import SearchBar from './components/SearchBar';
import PriceFilter from './components/PriceFilter';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [minimumPrice, setMinimumPrice] = useState(0);

  useEffect(() => {
    axios.get('https://api.coinlore.net/api/tickers/')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        setError(error.toString());
      });
  }, []);

  const filteredData = data.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.id.toString().toLowerCase().includes(search.toLowerCase());
    const matchesPrice = !minimumPrice || parseFloat(item.price_usd) >= parseFloat(minimumPrice);
    return matchesSearch && matchesPrice;
  });

  const exportToCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
                       filteredData.map(row => Object.values(row).join(",")).join("\n");
    const encodedURI = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedURI);
    link.setAttribute("download", "crypto_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-section">
          <SearchBar onSearch={setSearch} />
          <PriceFilter onFilterChange={setMinimumPrice} />
        </div>
        <div className="export-section">
          <button className="export-button" onClick={exportToCSV}>Export Data</button>
        </div>
      </header>
      {error ? <p>Error: {error}</p> : <CryptoTable data={filteredData} />}
    </div>
  );
}

export default App;
