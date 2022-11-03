import React, { Component } from 'react'
import BodyLayout from './BodyLayout'
import FooterLayout from './FooterLayout'
import HeaderLayout from './HeaderLayout'

export default class ThucHanhlayout extends Component {
    render() {
        return (
            <div>
                <HeaderLayout />
                <BodyLayout />
                <FooterLayout />
            </div>
        )
    }
}
