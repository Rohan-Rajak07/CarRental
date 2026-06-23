import React ,{useEffect,useState} from 'react'
import {useParams} from 'react-router'
import carData from '../../data/carData.json'

const CarsDetails=()=>{

    const{id}=useParams();
    const[carDetails,setCarDetails]=useState("")
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
    const getCarInfo=async()=>{
        setLoading(true)
        try{
            const carinfo=carData.find((car)=>{car.id===parseInt(id)});
            if(carinfo)
            {
                setCarDetails(carinfo)
            }
        }catch(error)
        {
            console.log(error)
        }
    }
},[])
    return(
        <>
        <h1>{id}</h1>
        </>
    );

}

export default CarsDetails;