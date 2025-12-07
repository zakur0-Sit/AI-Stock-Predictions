# AI-Stock-Predictions

# 📊 AI-Stock-Predictions

AI Stock Predictions is a test web application that generates short, AI-powered stock reports based on user-provided stock tickers.
The app sends the selected tickers to a backend server, which then uses OpenAI's GPT-4.1 model to produce a concise “buy / hold / sell” style report.

⚠️ Important:
This application is created **for learning and testing purposes only**.
It does **not** fetch real market data and does **not** provide real or accurate financial predictions.
Do **not** use it for investment decisions.

## 🖼️ Preview

<img width="1211" height="651" alt="Screenshot_20251207_013605-1" src="https://github.com/user-attachments/assets/51f15ea3-3331-4cb6-a3d1-f88a03965d3d" />


## ℹ️ About

This project demonstrates a full-stack approach combining a simple frontend with a Node.js backend that securely interacts with OpenAI's API. It allows users to quickly get AI-generated trading advice for multiple stocks without exposing the API key in the frontend.

## 🚀 Features

- **Add stock tickers**: Enter 3-letter or longer stock symbols (e.g., TSLA, AAPL) to include them in your report.
- **Generate AI report**: Sends the tickers to the backend and receives a short report (max 100 words) recommending whether to buy, hold, or sell.
- **Dynamic ticker display**: Selected tickers appear in a visually clear format.
- **Error handling**: Alerts the user if ticker input is invalid or if an error occurs during API requests.

## 🛠 Installation

1. Clone this repository:
  ```bash
  git clone https://github.com/yourusername/AI-Stock-Predictions.git
  ```
   
2. Navigate into the project folder:
  ```bash
  cd AI-Stock-Predictions
  ```

3. Install dependencies for the backend:
  ```bash
  npm install
  ```

4. Create a `.env` file in the root folder with your OpenAI API key:
  ```env
  OPENAI_API_KEY=sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXX
  ```

5. Start the server:
  ```bash
  node server.js
  ```

6. Open index.html in your browser and interact with the app.

## 🚦 Usage

- Enter a stock ticker in the input field and click + to add it.
- Add up to 3 tickers for generating a report.
- Click GENERATE REPORT to send the tickers to the backend.
- Wait for the AI-generated report to appear below the input.

## 🧱 Technologies Used

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js
- OpenAI GPT-4.1 API

## ⚖ License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.
