let tickersArr = [];

const generateBtn = document.querySelector('.generate-btn');
const errorMsg = document.querySelector('.error-msg');

generateBtn.addEventListener('click', fetchStockData);

document.querySelector('.ticker-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const tickerInput = document.querySelector('.ticker-input');

    if (tickerInput.value.length > 2) {
        generateBtn.disabled = false;
        errorMsg.style.display = 'none';
        const newTickerInput = tickerInput.value;
        tickersArr.push(newTickerInput.toUpperCase());
        tickerInput.value = '';
        renderTickers();
    } else {
        errorMsg.style.display = 'block';
    }
})

function renderTickers() {
    const tickerDiv = document.querySelector('.ticker-choice-display');
    tickerDiv.innerHTML = '';
    tickersArr.forEach(ticker => {
        const option = document.createElement('span');
        option.textContent = `${ticker}`;
        option.classList.add('ticker');
        tickerDiv.appendChild(option);
    })
}

const loadingContainer = document.querySelector('.loading-container');
const apiMsg = document.querySelector('.api-msg');

async function fetchStockData() {
    document.querySelector('.input-container').style.display = 'none';
    loadingContainer.style.display = 'flex';

    try {
        const stockData = await Promise.all(tickersArr.map(async ticker => {
            const url = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${dates.startDate}/${dates.endDate}?apiKey=${process.env.POLYGON_API_KEY}`;
            const response = await fetch(url);
            const data = await response.text();
            const status = response.status;
            if (status === 200) {
                apiMsg.textContent = 'Creating report...';
                return data;
            } else {
                loadingContainer.textContent = 'There was an error fetching stock data.';
            }
        }))
        fetchReport(stockData.join(''));
    } catch (error) {
        loadingContainer.textContent = 'There was an error fetching stock data.';
        console.error(error);
    }
}

function renderReport(output) {
    loadingContainer.style.display = 'none';
    const generatedReportContainer = document.querySelector('.generated-report-container');
    const report = document.createElement('p');
    generatedReportContainer.appendChild(report);
    report.textContent = output;
    generatedReportContainer.style.display = 'flex';
}

function fetchReport(stockData) {

}

