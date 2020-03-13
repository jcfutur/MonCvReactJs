import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import CardReact from './../card/cardReact.js';
import CardHtml from './../card/cardHtml.js';
import CardCss from './../card/cardCss.js';
import CardJavaScript from './../card/cardJavaScript.js';
import CardJava from './../card/cardJava.js';
import CardMySql from './../card/cardMysql.js';
import CardSpringboot from './../card/cardSpringboot.js';
import CardGit from './../card/cardGit.js';
import CardJHipster from './../card/cardJhipster.js';
import CardNode from './../card/cardNode.js';
import CardMDB from './../card/cardMdb.js';
//import './App.css'; //Import here your file style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const gridExamplesPage2 = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="4"><CardJavaScript/></MDBCol>
    <MDBCol md="4"><CardHtml/></MDBCol>
    <MDBCol md="4"><CardCss/></MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="4"><CardReact/></MDBCol>
    <MDBCol md="4"><CardJava/></MDBCol>
    <MDBCol md="4"><CardMySql/></MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="4"><CardSpringboot/></MDBCol>
    <MDBCol md="4"><CardGit/></MDBCol>
    <MDBCol md="4"><CardJHipster/></MDBCol>
  </MDBRow>
  <MDBRow>
    <MDBCol md="4"><CardNode/></MDBCol>
    <MDBCol md="4"><CardMDB/></MDBCol>
  </MDBRow>
</MDBContainer>
);
}

export default gridExamplesPage2;