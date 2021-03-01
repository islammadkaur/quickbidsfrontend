import React,{useState} from 'react';
import './calculator.css';

function Calculator() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentCompound, setCurrentCompound] = useState(0);
  const [currentMonthCompound, setCurrentMonthCompound] = useState(0);
  const [currentStockPrice, setCurrentStockPrice] = useState(0);
  const [currentStocksQuantity, setCurrentStocksQuantity] = useState(0);
  const [currentLossLimit, setCurrentLossLimit] = useState(0);
  
  const multiply=(e)=>{
    e.preventDefault();

//--------------------------------------------------------------------------------

    let currentInvestmentAmount=document.querySelector('#investment-amount').value
    let percentageAmount=document.querySelector('#percentage-amount').value
    if(currentInvestmentAmount === '')
    return;
    let product = percentageAmount * parseInt(currentInvestmentAmount);
    setCurrentProduct(product);  
//--------------------------------------------------------------------------------
    let dayCountForm = document.querySelector('#daily-compound').value;
    let addOneToPercentage = parseFloat(percentageAmount) + 1;
    let expontialDayCount = parseFloat(addOneToPercentage) ** dayCountForm;
    let compound = currentInvestmentAmount * expontialDayCount
    setCurrentCompound(compound)

    //--------------------------------------------------------------------------------
    
    let monthCountForm = document.querySelector('#monthly-compound').value;
    let monthlyExpenseInput = document.querySelector('#monthly-expenses').value;
    let endOfMonthBalance = monthCountForm * 21.6666666667
    let expontialMonthCount = parseFloat(addOneToPercentage) ** endOfMonthBalance ;
    let monthlyCompound = currentInvestmentAmount * expontialMonthCount - monthlyExpenseInput
    setCurrentMonthCompound(monthlyCompound)
  }
  
  const stockSellEstimator=(e)=>{
    
    let stockPriceForm = document.querySelector('#stock-price').value;
    let lossPercent = document.querySelector('#loss-percent').value;
    let stockPercentage =document.querySelector('#stock-percentage-amount').value
    let percentPlusPrice = parseFloat(stockPercentage) + 1;
    let stockPrice = parseFloat(percentPlusPrice) * stockPriceForm
    
    let currentInvestmentAmount = document.querySelector('#investment-amount').value
    const quantity = currentInvestmentAmount / stockPriceForm
    const lossLimit = stockPriceForm * lossPercent
    // console.log(lossLimit);
    setCurrentStocksQuantity(quantity)
    setCurrentStockPrice(stockPrice)
    setCurrentLossLimit(lossLimit)

  }
  
  // const dayTrader = currentProduct * 1
  // const weekTrader = currentProduct * 5
  // const monthTrader = currentProduct * 20
  // const yearTrader = currentProduct * 260
  
  // const day = currentProduct * 1
  // const week = currentProduct * 3
  // const month = currentProduct * 15
  // const year = currentProduct * 156
  
  return (
    <div className="Calculator">
      
      <form id="form" onChange={multiply}>
        <h1 id="title">Stock Profit Calculator</h1>
        <h3 id="desc">Investment Amount:</h3>
        <span id="test"></span>
            <input type="number" id="investment-amount" placeholder="12,000"/>
            <h3 id="desc">Projected Profit Percentage:</h3>
            <select type="text" id="percentage-amount">
              <option value={0.0025}>0.25%</option>
              <option value={0.005}>0.5%</option>
              <option value={0.01}>1%</option>
              <option value={0.015}>1.5%</option>
              <option value={0.02}>2%</option>
              <option selected={true} value={0.025}>2.5%</option>
              <option value={0.03}>3%</option>
              <option value={0.05}>5%</option>
              <option value={0.08}>8%</option>
              <option value={0.10}>10%</option>
              <option value={0.15}>15%</option>
              <option value={0.20}>20%</option>
              <option value={0.25}>25%</option>
            </select>
            <h1 id="result-text">Your Estimated Profit:</h1> 
            <h1 id='results'>${currentProduct.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1> 

            {/* 

            <br />
            <h1>If You're Not Allowed To Day Trader</h1>
            <h4>Daily Income: ${day.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Weekly Income: ${week.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Monthly Income: ${month.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Yearly Income: ${year.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h1>If You're Allowed To Day Trader</h1> */}

            {/* <p>*based on the average national number of work days in a given amount of time.</p>'
            
            <br />
            <h4>Daily Income: ${dayTrader.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Weekly Income: ${weekTrader.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Monthly Income: ${monthTrader.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
            <h4>Yearly Income: ${yearTrader.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4> */}
      </form> 
      <form id="form2" onChange={stockSellEstimator}>
            <h1 id="result-text">Stock Price Sell Price:</h1> 
            <input type="number" min="0" id="stock-price" placeholder="Enter price per share of stock purchased"/>
            <h2>Amount Of Shares You Can Buy:</h2>
            <h1 id="compound-balance-h3" style={{backgroundColor: "#e6e6e6", color: '#000000'}}>{Math.floor(currentStocksQuantity).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") === "Infinity" ? "" : Math.floor(currentStocksQuantity).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <h2>Projected Profit Percentage:</h2>
            <select type="text" id="stock-percentage-amount" style={{backgroundColor: "#adebad"}}>
              <option value={0.0025}>0.25%</option>
              <option value={0.005}>0.5%</option>
              <option value={0.01}>1%</option>
              <option value={0.015}>1.5%</option>
              <option value={0.02} selected={true}>2%</option>
              <option value={0.025}>2.5%</option>
              <option value={0.03}>3%</option>
              <option value={0.05}>5%</option>
              <option value={0.08}>8%</option>
              <option value={0.10}>10%</option>
              <option value={0.15}>15%</option>
              <option value={0.20}>20%</option>
              <option value={0.25}>25%</option>
            </select>
            <h2 id="compound-balance-h2" style={{color: 'green'}}>Set Your Sell Limit To: <br/></h2>
            <h1 id="compound-balance-h3" style={{backgroundColor: "#e6e6e6", color: "#1f7a1f"}}> ${currentStockPrice >= 1 || currentStockPrice === 0 ? currentStockPrice.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : currentStockPrice.toFixed(3).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>
            <select type="text" id="loss-percent" style={{backgroundColor: "#ff9999"}}>
              <option value={0.9975}>0.25%</option>
              <option value={0.995}>0.5%</option>
              <option value={0.99} selected={true}>1%</option>
              <option value={0.985}>1.5%</option>
              <option value={0.98}>2%</option>
              <option value={0.975}>2.5%</option>
              <option value={0.03}>3%</option>
              <option value={0.95}>5%</option>
              <option value={0.92}>8%</option>
              <option value={0.90}>10%</option>
              <option value={0.85}>15%</option>
              <option value={0.80}>20%</option>
              <option value={0.75}>25%</option>
            </select>
            <h2 id="compound-balance-h2" style={{color: 'red'}}>Set Your Stop Loss Limit To: <br/></h2>
            <h1 id="compound-balance-h3" style={{backgroundColor: "#e6e6e6", color: "#e60000"}}> ${currentLossLimit >= 1 || currentLossLimit === 0 ? currentLossLimit.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") : currentLossLimit.toFixed(3).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h1>
      </form>
      <form id="form2" onChange={multiply}>
            <h1 id="result-text">Daily Compounder:</h1> 
            <input type="number" id="daily-compound" defaultValue={1} min="0" step="1" placeholder="# of days"/>
            <h2 id="compound-balance-h2">Balance: ${currentCompound.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h2>
            <p>*based on initial investment, projected daily profit, and number of days specified above.</p>
            <br/>
      </form>
      <form id="form2" onChange={multiply}>
            <h1 id="result-text">Monthly Compounder:</h1> 
            <h2 id="month-desc">Number Of Months:</h2>
            <select type="text" id="monthly-compound">
              <option selected={true} value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </select>
            <br/>
            <h3 id="month-desc">Average Monthly Expense:</h3>
            <input type="number" id="monthly-expenses" min="0" placeholder="Enter your monthly expense here"/>
            <h2 id="compound-balance-h2">End Of Month Balance: ${currentMonthCompound.toFixed(2).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h2>
            <p>*if end of month balance is less than initial investment, adjust projected percentage until monthly balance is higher than initial amount for optimal results.</p>
      </form>

    </div>
  );
}

export default Calculator;
