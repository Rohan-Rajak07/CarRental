import React from 'react';
import {Link} from "react-router"

const CarCards=({car})=>{
    return(
        <>
            <Link to={`/cars/${car?.id}`} style={{textDecoration:"none"}}>
            <div className="card m-2" style={{width:"18rem"}}>
                <img src={car.image} alt="carImage" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{car?.name}</h5>
                    <p className="card-text">{car?.about.substring(0,50)}.....</p>
                </div>
            </div>
            </Link>

        </>
    )
}

export default CarCards;