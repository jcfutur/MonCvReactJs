import React from 'react';
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBProgress, MDBCol, MDBCardText } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import leMans24h from '.src/Component/Helpers/image/leMans24h.jpg';
import './img.css';

const CardNode = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
          <div id="divimg">
            <MDBCardImage className="img-fluid" src={require('../../Helpers/image/node.png')} waves id="img"/>  
          </div>
        <MDBCardBody>
          <MDBCardTitle className="text-center">Node js</MDBCardTitle>
          <MDBProgress value={80} className="my-2" />
          <MDBCardText>maitrise : 80%</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardNode;