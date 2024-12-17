function calculateExpectedValue() {
   

    const gainAmount = parseFloat(document.getElementById('gainAmount').value);
    const gainProbability = parseFloat(document.getElementById('gainProbability').value);
    const lossAmount = parseFloat(document.getElementById('lossAmount').value);
    const lossProbability = parseFloat(document.getElementById('lossProbability').value);
    const resultsDiv = document.getElementById('results');

    // Validate inputs
    if (isNaN(gainAmount) || isNaN(gainProbability) || 
        isNaN(lossAmount) || isNaN(lossProbability)) {
        resultsDiv.innerHTML = '<p style="color:red;">Check your inputs ❌</p>';
        return;
    }

    // Validate probability range
    if (gainProbability < 0 || gainProbability > 1 || 
        lossProbability < 0 || lossProbability > 1) {
        resultsDiv.innerHTML = '<p style="color:red;">Probabilities must be between 0 and 1.</p>';
        return;
    }

    // Validate probabilities sum
    if (Math.abs((gainProbability + lossProbability) - 1) > 0.001) {
        resultsDiv.innerHTML = '<p style="color:red;">Probabilities must add up to 1</p>';
        return;
    }

    // Calculate expected value
    const gainComponent = gainAmount * gainProbability;
    const lossComponent = lossAmount * lossProbability;
    const expectedValue = gainComponent - lossComponent;

    // Display results

    
    
    if (expectedValue > 0) {
        resultsDiv.innerHTML = `
            <h3>Positive EV but don't forget to manage size!</h3>
            <p>Upside > $${gainAmount.toFixed(2)} × ${(gainProbability * 100).toFixed(1)}% = $${gainComponent.toFixed(2)}</p>
            <p>Downside > $${lossAmount.toFixed(2)} × ${(lossProbability * 100).toFixed(1)}% = $${lossComponent.toFixed(2)}</p>
            <p><strong>Expected Value: $${expectedValue.toFixed(2)}</strong></p>
    
        `;
    } else {
        resultsDiv.innerHTML = `
            <h3>Negative EV. Are you trying to lose money?</h3>
            <p>Upside > $${gainAmount.toFixed(2)} × ${(gainProbability * 100).toFixed(1)}% = $${gainComponent.toFixed(2)}</p>
            <p>Downside > $${lossAmount.toFixed(2)} × ${(lossProbability * 100).toFixed(1)}% = $${lossComponent.toFixed(2)}</p>
            <p><strong>Expected Value: $${expectedValue.toFixed(2)}</strong></p>
           
        `;
    }
   

}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    }