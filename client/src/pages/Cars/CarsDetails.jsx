import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import carData from "../../data/carData.json";
import { toast } from "react-toastify";
import BookingModel from '../../components/BookingModel'

const CarsDetails = () => {
  const user = true;
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const[show,setShow]=useState(false);
  const[pickupDate,setPickupDate]=useState(new Date().toISOString().split('T')[0]);
  const[returnDate,setReturnDate]=useState(new Date().toISOString().split('T')[0]);

  //booking function
  const bookingHandel=()=>{
    toast.success("Booking Successfully")
  }

  useEffect(() => {
    const getCarInfo = async () => {
      setLoading(true);
      try {
        const carinfo = carData.find((car) => car.id === parseInt(id));
        if (carinfo) {
          setCarDetails(carinfo);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getCarInfo();
  }, [id]);
  return (
    <>
      {loading ? (
        <h2 className="text-center">Loading...</h2>
      ) : (
        <div className="row my-4" style={{ minHeight: "70vh" }}>
          <div className="col-md-6">
            <img src={carDetails?.image} alt="car-image" />
          </div>
          <div className="col-md-6">
            <h2>{carDetails?.name}</h2>
            <p>{carDetails?.about}</p>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">year</th>
                  <td>{carDetails?.year} </td>
                </tr>
                <tr>
                  <th scope="row">Model</th>
                  <td>{carDetails?.model} </td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{carDetails?.category} </td>
                </tr>
                <tr>
                  <th scope="row">Seats</th>
                  <td>{carDetails?.seats} </td>
                </tr>
                <tr>
                  <th scope="row">Category</th>
                  <td>{carDetails?.category} </td>
                </tr>
                <tr>
                  <th scope="row">Fuel</th>
                  <td>{carDetails?.fuel} </td>
                </tr>
                <tr>
                  <th scope="row">Milage</th>
                  <td>{carDetails?.milage} </td>
                </tr>
                <tr>
                  <th scope="row">Transmission</th>
                  <td>{carDetails?.transmission} </td>
                </tr>
              </tbody>
            </table>

            <h4>Price : RS {carDetails?.price}/- per day</h4>
            {!user ? (
              <Link to={"/login"} className="btn btn-warning mb-3 mt-2">
                please Login to Book this car
              </Link>
            ) : (
              <button onClick={()=>setShow(!show)} 
              className="btn btn-primary btn-lg">Book Now </button>
            )}
          </div>
        </div>
      )}
      {/* Booking Model  */}
      {show && <BookingModel 
        show={show}
        setShow={setShow}
        price={carDetails.price}
        pickupDate={pickupDate}
        setPickupDate={setPickupDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        bookingHandel={bookingHandel}
      />
      }
    </>
  );
};

export default CarsDetails;
