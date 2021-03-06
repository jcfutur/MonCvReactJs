import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBProgress, MDBCol, MDBCardText } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const CardJHipster = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
        <MDBCardImage className="img-fluid" src={require('../../Helpers/image/jhipster.png')}  waves />
        <MDBCardBody>
          <MDBCardTitle className="text-center">JHipster</MDBCardTitle>
          <MDBProgress value={55} className="my-2" />
          <MDBCardText>maitrise : 55%</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardJHipster;