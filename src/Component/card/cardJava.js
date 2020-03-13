import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBProgress, MDBCol } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const CardJava = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
        <MDBCardImage className="img-fluid" src={require('../../Helpers/image/java.jpg')}  waves />
        <MDBCardBody>
          <MDBCardTitle className="text-center">JAVA Jee</MDBCardTitle>
          <MDBProgress value={70} className="my-2" />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardJava;