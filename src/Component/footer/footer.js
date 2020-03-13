import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">

          </MDBCol>
          <MDBCol md="1">
            <ul>
              <li className="list-unstyled">
                <a href="#Apropos">A propos</a>
              </li>
              <li className="list-unstyled">
                <a href="#Competence">Competences</a>
              </li>
              <li className="list-unstyled">
                <a href="#Realisation">Realisation</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="5">
            <ul>
              <li className="list-unstyled">
                <a href="#Parcour">Mon Parcour</a>
              </li>
              <li className="list-unstyled">
                <a href="#interets">interets</a>
              </li>
              <li className="list-unstyled">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p> Camard Jean </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;