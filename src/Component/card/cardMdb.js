import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBProgress, MDBCol, MDBCardText } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const CardMDB = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
        <MDBCardImage className="img-fluid" src={require('../../Helpers/image/mdb.png')}  waves />
        <MDBCardBody>
          <MDBCardTitle className="text-center">MDB</MDBCardTitle>
          <MDBProgress value={80} className="my-2" />
          <MDBCardText>maitrise : 80%</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardMDB;