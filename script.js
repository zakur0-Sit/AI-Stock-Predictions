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
});

function renderTickers() {
    const tickerDiv = document.querySelector('.ticker-choice-display');
    tickerDiv.innerHTML = '';

    tickersArr.forEach(ticker => {
        const option = document.createElement('span');
        option.textContent = ticker;
        option.classList.add('ticker');
        tickerDiv.appendChild(option);
    });
}

const loadingContainer = document.querySelector('.loading-container');

async function fetchStockData() {
    document.querySelector('.input-container').style.display = 'none';
    loadingContainer.style.display = 'flex';

    const fakeStockData = tickersArr.join(", ");

    await fetchReport(fakeStockData);
}

async function fetchReport(data) {
    try {
        const response = await fetch("http://localhost:3000/generate-report", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({data})
        });

        const result = await response.json();

        renderReport(result.report);
    } catch (error) {
        console.error(error);
        loadingContainer.textContent = "Error contacting server.";
    }
}

function renderReport(output) {
    loadingContainer.style.display = 'none';

    const generatedReportContainer = document.querySelector('.generated-report-container');
    generatedReportContainer.innerHTML = "";

    const report = document.createElement('p');
    report.textContent = output;

    generatedReportContainer.appendChild(report);
    generatedReportContainer.style.display = 'flex';
}
