import React, { Component } from 'react'

export default class Bannerlayout extends Component {
    render() {
        return (
            <div>
                <div className="card p-5 bg-light border-light" style={{ width: '100%' }}>
                    <div className="card-body text-center p-3 m-5">
                        <h5 className="card-title fs-1 fw-bold">A warm welcome!</h5>
                        <p className="card-text fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className='btn btn-primary fs-5'>Call to action</button>
                    </div>
                </div>
            </div>
        )
    }
}
