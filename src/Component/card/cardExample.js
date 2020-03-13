import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,  MDBProgress, MDBCol } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"  waves />
        <MDBCardBody>
          <MDBCardTitle className="text-center">Card title</MDBCardTitle>
          <MDBProgress value={60} className="my-2" />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;