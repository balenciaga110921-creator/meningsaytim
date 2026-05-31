* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 20px;
    padding: 30px;
    max-width: 1200px;
    width: 100%;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.balance-panel {
    background: #f5f5f5;
    border-radius: 15px;
    padding: 20px;
    margin-bottom: 30px;
}

.balance-panel h2 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #555;
}

.balance-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.balance-item {
    background: white;
    padding: 12px;
    border-radius: 10px;
    font-weight: bold;
    color: #333;
    text-align: center;
}

.balance-item .icon {
    font-size: 20px;
    margin-right: 5px;
}

/* 2 ustunli layout */
.exchange-wrapper {
    display: flex;
    gap: 30px;
    align-items: center;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
}

.exchange-card {
    flex: 1;
    min-width: 250px;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #ddd;
}

.card-header h3 {
    color: #333;
}

.arrow-icon {
    font-size: 24px;
}

.currency-selector {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.currency-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background: white;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid transparent;
}

.currency-option:hover {
    background: #e0e7ff;
    transform: scale(1.02);
}

.currency-option.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.currency-icon {
    font-size: 24px;
}

.amount-input {
    margin-bottom: 15px;
}

.amount-input label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

.amount-input input {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 16px;
}

.amount-input input:focus {
    outline: none;
    border-color: #667eea;
}

.selected-info {
    font-size: 14px;
    color: #666;
    text-align: center;
}

/* Slider tugmasi */
.slider-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.slider-button:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

.slider-icon {
    font-size: 28px;
    color: white;
}

.slider-text {
    font-size: 10px;
    color: white;
    margin-top: 5px;
}

#submit-btn {
    width: 100%;
    padding: 15px;
    background: #48bb78;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
}

#submit-btn:hover {
    background: #38a169;
    transform: translateY(-2px);
}

#message {
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
}

@media (max-width: 768px) {
    .exchange-wrapper {
        flex-direction: column;
    }
    
    .balance-list {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .slider-button {
        transform: rotate(90deg);
    }
    
    .slider-button:hover {
        transform: rotate(90deg) scale(1.1);
    }
}
