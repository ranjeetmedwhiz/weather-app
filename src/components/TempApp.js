
import React, { useEffect, useState } from "react";
const mystyle = {
    //backgroundColor: "DodgerBlue",
    padding: "8px",
    fontFamily: "Arial",
    backgroundColor: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)"
};

var d = new Date();
const TempApp = () => {

    const [city, setCity] = useState("[]");
    const [search, setSearch] = useState("india");
    useEffect(() => {
        const fatchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba04d0beef62b01e36d1c8e6c863f232`;
            const response = await fetch(url)//fatch API
            const resjson = await response.json();//convert data into json

            setCity(resjson.main);//storing the response

            console.log(resjson);
        }
        fatchApi();//function calling for fatch api
    }, [search])
    return (
        <div style={{ border: " 5px dotted rgba(1, 1, 1,2)", height: "auto", boxSizing: "border-box", marginTop: "10%", marginLeft: '30%', marginRight: '30%', padding: 'auto', background: " linear-gradient(to bottom right, #33ccff 0%, #ff99cc 100%)" }}>
            <div style={{ color: "red" }} ><legend style={{ color: "red", textAlign: 'center' }}><b><h1>Mini-Project</h1></b></legend>
                <div className="box">
                    <div style={mystyle}>
                        <input style={{ width: '100%', padding: 'auto', color: "green" }}
                            type="search" value={ search}
                            onChange={(event) => {
                                setSearch(event.target.value)
                            }} />
                    </div>
                    <div style={{ marginLeft: "10px" }}>{d.toDateString()}</div>


                    {!city ? (<p style={{textAlign:"center"}}><h1>🏝️-No Data Found-🏝️</h1></p>) : (

                        <div><div className="info">
                            <h1 className="location">
                                <div style={{ textAlign: "center" }}><i className="fas fa-street-view" > {search}</i></div>
                            </h1>
                            <h2 style={{ color: "green", textAlign: "center" }}>
                                <b >Temp : </b>{city.temp}°Cel |  <b>Humidity :{city.humidity}% | </b> feels_like: <b>{city.feels_like}</b>
                                </h2>
                            <h3 style={{ color: "red", textAlign: "center" }}>Min : {city.temp_min}°Cel  |  Max :{city.temp_max}°Cel </h3>
                        </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}
export default TempApp;