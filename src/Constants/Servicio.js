const OPTIONS_ID = ['FB', 'AAPL', 'MSFT', 'GOOGL', 'AMZN'];

export default class Servicio {
    
    async servicioAlpha(onSuccess, optionId)  {
        if (!OPTIONS_ID.includes(optionId)) {
            return;
        }
        var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + optionId + '&outputsize=compact&apikey=X86NOH6II01P7R24';
        fetch(url)
            .then(response => response.json())
            .then(obj => obj['Time Series (Daily)'])
            .then(dailies => {
                return [dailies[Object.keys(dailies)[0]], Object.keys(dailies)[0], dailies[Object.keys(dailies)[1]], Object.keys(dailies)[1]];})
            .then(result =>{
                console.log(result)
                onSuccess({
                'close' : result['0']['4. close'],
                'date': result['1'],
                'closeYesterday' : result['2']['4. close'],
                'yesterday': result['3']});
            });
    }
}