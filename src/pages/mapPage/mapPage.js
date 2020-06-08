import React, {useState, useRef} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './mapPage.css'

import svgDots from "./diaphragm.svg"

import GoogleMapReact from 'google-map-react'

const Marker = ({children}) => children;

const MapPage = () => {

    const [value, setValue] = useState(0);
    const [zoom, setZoom] = useState(10)
    const [bounds, setBounds] = useState(null)

    const mapRef = useRef()

    const dotsMarker = [
        {id: 1, lat:43.3021756, lng:68.2650758 },
        {id: 2, lat:43.2526799, lng:68.2554346 },
        {id: 3, lat:43.288576, lng:68.229065 },
        {id: 4, lat:43.296944, lng:68.265789 },
        {id: 5, lat:43.3053484, lng:68.2705173 },
        {id: 6, lat:43.321812, lng:68.244814 },
        {id: 7, lat:43.316971, lng:68.275606},
        {id: 8, lat:43.3008312, lng:68.2770408 },
        {id: 9, lat:43.324944, lng:68.263211},
        {id: 10, lat:43.286872, lng:68.247946 },
        {id: 11, lat:43.279463, lng:68.299482 },
        {id: 12, lat:43.268588, lng:68.261747 },
    ]

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const dots =  dotsMarker.map((item)=> {
    //     <Marker 
    //         key={item.id}
    //         lat={item.lat}
    //         lng={item.lng}>
                
    //         <button className="btn-dots">
    //             <img src={svgDots} alt="dots" />
    //         </button>
    //     </Marker>
    // })

    return (
        <div >
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example">
                <Tab label="Карта" />
            </Tabs>
            <div style={{height:"85vh", width:"90vw", backgroundColor: "rgb(255, 255, 255)"}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key:''}}  //<--- сюда ключ 
                    defaultCenter={{lat: 43.3021756, lng: 68.2650758}}
                    defaultZoom={13}
                >
                    <Marker 
                        lat={43.316971}
                        lng={68.275606}>   
                        <div className="btn-dots">
                            5
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.2526799}
                        lng={68.2554346}>   
                        <div className="btn-dots">
                            14
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.288576}
                        lng={68.229065}>   
                        <div className="btn-dots">
                            5
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.296944}
                        lng={68.265789}>  
                        
                        <div className="btn-dots">
                            7
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.3053484}
                        lng={68.2705173}>   

                        <div className="btn-dots">
                            23
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.321812}
                        lng={68.244814}>   
                        <div className="btn-dots">
                            1
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.3008312}
                        lng={68.2770408}>   
                        <div className="btn-dots">
                            4
                        </div>
                    </Marker>

                    <Marker 
                        lat={43.316971}
                        lng={68.275606}>   
                        <div className="btn-dots">
                            3
                        </div>
                    </Marker>
                    
                    
                    
                </GoogleMapReact>
            </div>

        </div>
    )
}

export default MapPage