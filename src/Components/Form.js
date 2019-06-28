import React from 'react'

function Title(Prop) {
    return (
        <div className={"formWeather"}>
            <form onSubmit={Prop.submitCall}>
                <div class="d-flex  justify-content-center">
                    <input type="text" name="city" placeholder="city"/>
                    <input type="text" name="country" placeholder="country"/>

                    <button>Get Weather</button>
                </div>
            </form>

        </div>
    )
}

export default Title;
