import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, } from "mdbreact";
import '../../App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const gridExamplesPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="4">
      <MDBCard style={{ width: "20rem" }}>
        <MDBCardBody>
         <MDBRow>
          <MDBCol md="2">
            <MDBIcon icon="mobile-alt" size="3x" className="indigo-text"/>
          </MDBCol>
          <MDBCol md="9">
            <MDBCardTitle id="tel">
                +33 6 58 65 34 14
            </MDBCardTitle>
          </MDBCol>
         </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="5">
      <MDBCard style={{ width: "26rem" }}>
        <MDBCardBody>
        <MDBRow>
          <MDBCol md="2">
            <MDBIcon icon="at" size="3x" className="indigo-text"/>
          </MDBCol>
          <MDBCol md="9">
            <MDBCardTitle id="tel">
                jean.camard@gmail.com
            </MDBCardTitle>
          </MDBCol>
         </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol md="3">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
        <MDBRow>
            <MDBCol md="2">
                <MDBIcon icon="map-marker-alt" size="3x" className="indigo-text"/>
            </MDBCol>
            <MDBCol md="9">
                <MDBCardTitle id="tel">
                    France
                </MDBCardTitle>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default gridExamplesPage;