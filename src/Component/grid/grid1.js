import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import CardExample from './../card/cardExample.js';
//import './App.css'; //Import here your file style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const gridExamplesPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="4"><CardExample/></MDBCol>
    <MDBCol md="4"><CardExample/></MDBCol>
    <MDBCol md="4"><CardExample/></MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default gridExamplesPage;