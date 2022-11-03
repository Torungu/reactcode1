import React, { Component } from 'react'
import Bannerlayout from './Bannerlayout'
import ItemLayout from './ItemLayout'

export default class BodyLayout extends Component {
    render() {
        return (
            <div className='container mt-5' >
                <Bannerlayout />
                <ItemLayout />
            </div>
        )
    }
}
