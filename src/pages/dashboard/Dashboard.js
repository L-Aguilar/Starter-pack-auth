import React from 'react'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
    
    return (
        <div>
            <div className="offset">
                <div className="min-vh-100 d-flex">
                    <div className="w-100">
                        <div className="row">
                            <Navbar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
