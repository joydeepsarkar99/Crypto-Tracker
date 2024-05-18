const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";


export async function getCryptoData() {
    try {
        const response = await fetch(URL);
        const cryptoData = await response.json();
        return { success: true, data: cryptoData}
    }
    catch (error) {
        alert("Failed to Fetch Crypto Market Data")
        return { success: false }
    }
}