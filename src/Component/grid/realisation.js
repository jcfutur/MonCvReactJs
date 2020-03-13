import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//import './App.css'; //Import here your file style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const Realisation = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="4"><CardJavaScript/></MDBCol>
    <MDBCol md="4"><CardHtml/></MDBCol>
    <MDBCol md="4"><CardCss/></MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default Realisation;