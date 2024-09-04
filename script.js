document.getElementById('claimButton').addEventListener('click', function() {
    // Пример запроса к серверу или API для получения мем-коинов
    fetch('https://api.example.com/get-coins', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: 'sampleUserId' // замените на реальный ID пользователя
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Поздравляем! Вы получили ${data.coins} мем-коинов.`;
    })
    .catch(error => {
        console.error('Ошибка:', error);
        document.getElementById('result').innerText = 'Произошла ошибка. Попробуйте снова.';
    });
});
