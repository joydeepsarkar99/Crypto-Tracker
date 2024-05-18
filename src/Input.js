const Input = ({searchCoin,sortMarketCap,sortPercentage}) => {
    return <div className="input-container">
        <input type="text" id="user_input" placeholder="Search by Name or Symbol" onInput={searchCoin}/>
        <button type="button" id="mkt_cap_btn" onClick={sortMarketCap}>Sort By Mkt Cap</button>
        <button type="button" id="percentage_btn" onClick={sortPercentage}>Sort By Percentage</button>
    </div>
}

export default Input;