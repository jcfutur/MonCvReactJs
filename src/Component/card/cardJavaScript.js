import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBProgress, MDBCol, MDBCardText } from 'mdbreact';
import './cardcss.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import leMans24h from '.src/Component/Helpers/image/leMans24h.jpg';
import './img.css';

const CardJavaScript = () => {
  return (
    <MDBCol>
      <MDBCard id="cards">
          <div id="divimg">
            <MDBCardImage className="img-fluid" src={require('../../Helpers/image/javascript.png')} waves id="img"/>  
          </div>
        <MDBCardBody>
          <MDBCardTitle className="text-center">JavaScript</MDBCardTitle>
          <MDBProgress value={85} className="my-2" />
          <MDBCardText>maitrise : 85%</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardJavaScript;