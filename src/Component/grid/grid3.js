import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import CardReact from '../card/cardReact.js';
import CardHtml from '../card/cardHtml.js';
import CardCss from '../card/cardCss.js';
import CardJavaScript from '../card/cardJavaScript.js';
import CardJava from '../card/cardJava.js';
import CardMySql from '../card/cardMysql.js';
import CardSpringboot from '../card/cardSpringboot.js';
import CardGit from '../card/cardGit.js';
import CardJHipster from '../card/cardJhipster.js';
//import CardNode from './../card/cardNode.js';
import CardMDB from '../card/cardMdb.js';
//import './App.css'; //Import here your file style
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const gridExamplesPage2 = () => {
return (
<MDBContainer>

  <MDBRow>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpRight" duration="2s" delay="0s">
        <CardJavaScript/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpLeft" duration="2s" delay="0s">
        <CardHtml/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInDownRight" duration="2s" delay="0s">
        <CardCss/>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>
  
  <MDBRow>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpRight" duration="2s" delay="0s">
        <CardReact/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpLeft" duration="2s" delay="0s">
        <CardJava/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInDownRight" duration="2s" delay="0s">
        <CardMySql/>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>

  <MDBRow>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpRight" duration="2s" delay="0s">
        <CardSpringboot/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpLeft" duration="2s" delay="0s">
        <CardGit/>
      </MDBAnimation>
    </MDBCol>
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInDownRight" duration="2s" delay="0s">
        <CardJHipster/>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>

  <MDBRow>
    
    <MDBCol md="4">
      <MDBAnimation reveal type="rotateInUpLeft" duration="2s" delay="0s">
        <CardMDB/>
      </MDBAnimation>
    </MDBCol>
  </MDBRow>

</MDBContainer>
);
}

export default gridExamplesPage2;