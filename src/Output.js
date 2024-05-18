const Output = ({ filteredCrypto }) => {
    return <div className="display-container">
        <table id="myTable">
            <thead>
                <tr>
                    <th></th>
                    <th className="name">Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Total Volume</th>
                    <th>Price Change %</th>
                    <th>MKT Cap</th>
                </tr>
            </thead>
            <tbody>
                {filteredCrypto && filteredCrypto.map((data, index) => (
                    <tr key={index}>
                        <td className="img"><img src={data.image} alt={data.name} /></td>
                        <td className="name">{data.name}</td>
                        <td className="symbol">{data.symbol.toUpperCase()}</td>
                        <td className="current_price">${data.current_price}</td>
                        <td className="total_volume">${data.total_volume.toLocaleString()}</td>
                        <td className="percentage" id={data.price_change_percentage_24h > 0 ? "green" : "red"}>{data.price_change_percentage_24h.toFixed(2)}%</td>
                        <td className="market_cap">Mkt Cap: ${data.market_cap.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default Output;