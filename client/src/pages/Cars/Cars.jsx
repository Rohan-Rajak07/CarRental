import React from 'react'
import carData from '../../data/carData.json'
import CarCard from '../../components/CarCard'

const Cars = () => {
  return (
    <div style={{minHeight:"80vh",marginTop:"50px"}}>
      <h3 className="text-center mb-1">Explore our car collection</h3>
      <p className="text-centre">click on the car to see spec & price</p>
      <div className="d-flex flex-wrap justify-content-center">
        {carData.map((car)=>(<CarCard car={car} key={car.id} />))}
      </div>
    </div>
  )
}

export default Cars;
