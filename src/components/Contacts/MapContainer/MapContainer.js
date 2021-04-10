import ReactMapGl, { Marker } from 'react-map-gl';
import { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './MapContainer.css';

const MapContainer = () => {
    const [viewport, setViewport] = useState({
        latitude: 42.67596,
        longitude: 23.381759,
        zoom: 15,
        width: '50vw',
        height: '50vh',
        altitude: 1.5,


    })

    console.log(viewport)
    return (
        <div>
            <ReactMapGl {...viewport}
                mapboxApiAccessToken={'pk.eyJ1Ijoia3ItaXZhbm92IiwiYSI6ImNrbmJzdHUzajF1azMyb282OWdtMjgwcXIifQ.XoeDfOVp9njk-gWf1wQsuA'}
                mapStyle={'mapbox://styles/kr-ivanov/cknbt9ffg0y2k18n47sfzvqhq'}
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <Marker latitude={42.67596} longitude={23.381759} >
                    <div className='point'>
                        <ShoppingCartIcon />
                    </div>

                </Marker>

            </ReactMapGl>

        </div>
    )
}

export default MapContainer
