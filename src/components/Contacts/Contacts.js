import { Email, Home, Phone } from '@material-ui/icons'
import React, { Component } from 'react'
import MapContainer from './MapContainer/MapContainer'
import './Contacts.css';

export default class Contacts extends Component {
    render() {
        return (
            <div className='contacts__container'>
                <h1>Contact us</h1>
                <p><Phone /> <strong>0899 375 857</strong> </p>
                <p> <Email /> <strong>fishing-store@office.org</strong></p>
                <p> <Home />  <strong>Boulevard "Professor Tsvetan Lazarov" 11, 1574 SPZ Slatina, Sofia</strong></p>
                <MapContainer />
            </div>
        )
    }
}
