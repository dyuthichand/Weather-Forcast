import React from 'react';
import './App.css';
import Title from './Components/Title.js'
import Form from './Components/Form.js'
import Result from './Components/Result.js'
var API_KEY = "95cac868ce19e2f03ceebac8bc0d8125";

var city, country;

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            humidity: {}
        }

        this.submitCall = this.submitCall.bind(this)
    }

    async submitCall(event) {
        event.preventDefault();
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;

        var fetchCall = await fetch(url).then((data)=>{
            if (data.status >= 200 && data.status < 300)   return data; else alert("enter correct info")

        }).catch(err => console.log(err));

        var weatherInfo = fetchCall ? await fetchCall.json() : null


        this.setState({
            weatherInfo: weatherInfo
        })
    }


    render() {
        return (
            <div className="weather">
                <div className="container">
                    <div className="textbox row py-3 bg d-flex align-items-center justify-content-center  text-light">
                        <div className="col-sm-6 ">
                            <Title/>
                        </div>
                        <div className="col-sm-6">

                            <Form submitCall={this.submitCall} city={this.state.city}
                                  country={this.state.country}/>

                        </div>

                    </div>

                </div>

                <Result resultdata={this.state.weatherInfo}/>
            </div>
        );
    }

}

export default App;
