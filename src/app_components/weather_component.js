import React from 'react'
import Skycons from 'react-skycons'

export default function weather_component( props ) {


    // (['CLEAR_DAY','CLEAR_NIGHT','PARTLY_CLOUDY_DAY','PARTLY_CLOUDY_NIGHT','CLOUDY','RAIN','SLEET','SNOW','WIND','FOG'])
    let icon = props.weatherIcon;

    const defaultStyle = {
        width: '30%',
        height: '100%'
      }

    switch(true){
        case icon === 'clear-day':
            icon = <Skycons color='white' style={defaultStyle} icon='CLEAR_DAY' autoplay={true} />;
            break;
        
        case icon === 'clear-night':
            icon = <Skycons color='white' style={defaultStyle} icon='CLEAR_NIGHT' autoplay={true} />;
            break;
        
        case icon === 'partly-cloudy-day':
            icon = <Skycons color='white' style={defaultStyle} icon='PARTLY_CLOUDY_DAY' autoplay={true} />;
            break;

        case icon === 'partly-cloudy-night':
            icon = <Skycons color='white' style={defaultStyle} icon='PARTLY_CLOUDY_NIGHT' autoplay={true} />;
            break;

        case icon === 'cloudy':
            icon = <Skycons color='white' style={defaultStyle} icon='CLOUDY' autoplay={true} />;
            break;

        case icon === 'rain':
            icon = <Skycons color='white' style={defaultStyle} icon='RAIN' autoplay={true} />;
            break;

        case icon === 'sleet':
            icon = <Skycons color='white' style={defaultStyle} icon='SLEET' autoplay={true} />;
            break;
        
        case icon === 'snow':
            icon = <Skycons color='white' style={defaultStyle} icon='SNOW' autoplay={true} />;
            break;
        
        case icon === 'wind':
            icon = <Skycons color='white' style={defaultStyle} icon='WIND' autoplay={true} />;
            break;

        case icon === 'fog':
            icon = <Skycons color='white' style={defaultStyle} icon='FOG' autoplay={true} />;
            break;
    }

    return (
        <div className="container text-light">
            <div className="cards pt-4">
                <h1>{props.timezone}</h1>

                {icon} 

                <h1 className="py-2">
                    {props.temperature}&deg;
                </h1>
                <h4 className="py-3">
                    {props.summary}
                </h4>
            </div>
        </div>
    )
}


