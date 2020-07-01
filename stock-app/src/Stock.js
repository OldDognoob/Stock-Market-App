import React from 'react';

class Stock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock(){
        const API_KEY = 'KO47XZN7O6FN5MZ8';
        let StockSymbol = 'AMZN'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`;

        fetch(API_CALL)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(data){
                console.log(data);
            }
        )
    }
render(){
    return(
        <div>Stock Market</div>
    )
}
}

export default Stock;