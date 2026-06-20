import React from 'react'
import car from '../../assets/images/car.gif'
const Login = () => {
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <img src={car} alt="auth" className="rounded" height={'100%'} width={'100%'} />
          </div>
          <div className="col-md-5"> </div>
        </div>
      </div>
    </>
  )
}

export default Login;
