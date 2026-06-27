import React from 'react'

const BookingModel = (props) => {

    const{show,setShow,price,pickupDate,setPickupDate,returnDate,setReturnDate,bookingHandel}=props

    //total amount
    const totalAmount=()=>{
        if(pickupDate && returnDate)
        {
            const days=Math.max(1,Math.ceil(new Date(returnDate)- new Date(pickupDate))/(1000*60*60*24));
            return days*price;
        }
        return price;
    }

    return (
        <>
            <div className="modal d-flex w-50" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button"
                             className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"
                            onClick={()=>setShow(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Pickup Date</label>
                                <input type="date" className="form-control" defaultValue={pickupDate} onChange={e =>{setPickupDate(e.target.value)}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Return Date</label>
                                <input type="date" className="form-control" defaultValue={returnDate} onChange={e =>{setReturnDate(e.target.value)}} />
                            </div>
                            <p>price:{price}/- per day</p>
                            <p>Total Price:{totalAmount()}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={()=>setShow(false)}
                            >Close</button>
                            <button onClick={bookingHandel} type="button" className="btn btn-primary">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BookingModel;