import { useState, useEffect } from "react"
import Input from "./Input"
import Output from "./Output"
import { getCryptoData } from "./Crypto";
import "./App.css";

const App = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const [crypto, setCrypto] = useState(null);
    const [filteredCrypto, setFilteredCrypto] = useState(crypto);


    //user search 
    const searchCoin_EventHandle = (event) => {
        const searchText = event.target.value.trim().toLowerCase();
        const filteredData = crypto.filter(data => {
            return data.name.toLowerCase().includes(searchText) || data.symbol.toLowerCase().includes(searchText)
        });
        setApiStatus("success");
        setFilteredCrypto(filteredData);
    }

    //sort by market cap 
    const sortMarketCap_EventHandle = () => {
        crypto.sort(function(a,b){
            return a.market_cap - b.market_cap;
        });
        setApiStatus("success");
        setFilteredCrypto([...crypto]);
    }

    //sort by percentage
    const sortPercentage_EventHandle = () => {
        crypto.sort(function(a,b){
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
        });
        setApiStatus("success");
        setFilteredCrypto([...crypto]);
    }

    //retry 
    const retryFetch = () => {
        (async function () {
            setApiStatus("pending")
            const { success, data } = await getCryptoData()
            if (success) {
                setApiStatus("success");
                setCrypto(data);
                setFilteredCrypto(data);
            }
            else {
                setApiStatus("error");
            }
        })();
    }


    useEffect(() => {
        (async function () {
            setApiStatus("pending")
            const { success, data } = await getCryptoData()
            if (success) {
                setApiStatus("success");
                setCrypto(data);
                setFilteredCrypto(data);
            }
            else {
                setApiStatus("error");
            }
        })();
    }, []);

    if (apiStatus === "init" || apiStatus === "pending") {
        <div className="loader">Loading ...</div>
    }
    else if (apiStatus === "error") {
        return <div className="retry-btn">
            <button onClick={retryFetch}>Retry to get Crypto Market Report</button>
        </div>
    }

    return <div>
        <Input searchCoin={searchCoin_EventHandle} sortMarketCap={sortMarketCap_EventHandle} sortPercentage={sortPercentage_EventHandle} />
        <Output filteredCrypto={filteredCrypto} />
    </div>
}
export default App;