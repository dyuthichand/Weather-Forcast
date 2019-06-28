import React from 'react';

function Result(Props) {
    if ((Props.resultdata)) {
        var hum = <div className="container weatherResult"><div className=""><div className="row"><div className="col-sm-12">
            <h1>Weather Report of {Props.resultdata.name} ,{Props.resultdata.sys.country}</h1>
            <div className="d-flex">
                <p>Humidity</p>
                <p>{(Props.resultdata.main.humidity)}</p>
            </div>
            <div className="d-flex">
                <p>Temparature</p><p>{(Props.resultdata.main.temp)}</p>
            </div>
            <div className="d-flex">
                <p>Weather</p><p>{(Props.resultdata.weather[0].description)}</p>
            </div>
        </div></div></div></div>
    }
    return (
        <div>{hum}</div>


    );
}


export default Result;
