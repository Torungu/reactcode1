import React, { Component } from 'react'

export default class ItemLayout extends Component {
    render() {
        return (
            <div className='row mt-3'>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">Fresh new layout</h5>
                            <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">Free to download</h5>
                            <p className="card-text">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">Jumbotron hero header</h5>
                            <p className="card-text">The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">Feature boxes</h5>
                            <p className="card-text">We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">Simple clean code</h5>
                            <p className="card-text">We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 p-3">
                    <div className="card text-center border-light bg-light" style={{ width: '100%' }}>
                        <div className="card-body p-5 m-3">
                            <h5 className="card-title fw-bold fs-4">A name you trust</h5>
                            <p className="card-text">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
