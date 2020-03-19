import React from 'react';
import './nav.css';
import { MDBNavbar, 
  MDBAnimation,
  MDBNavbarBrand, 
  MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import GridExamplesPage2 from './../grid/grid3.js';
import FooterPage from './../footer/footer.js';
import LightboxPage from './../grid/grid2.js';
import Experiences from '../experience/experiences.js';
import Interets from './../grid/interets.js';
import Contact from './../grid/contact.js';
class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div>
        <header>
        

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(50).jpg" className="img-fluid">
            <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <h1 style={{fontWeight:'bold'}}>Camard Jean</h1>
              <h1>Developpeur Web FullStack</h1>
            </MDBMask>
          </MDBView>

          <Router>
            <MDBNavbar color="indigo" dark expand="md" fixed="top">
              <MDBNavbarBrand href="/">
                <strong>Jean CAMARD</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#Apropos">A propos</a>
                  </MDBNavItem>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#Competence">Competences</a>
                  </MDBNavItem>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#Realisation">Realisation</a>
                  </MDBNavItem>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#Parcour">Mon Parcour</a>
                  </MDBNavItem>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#interets">Interets</a>
                  </MDBNavItem>
                  <MDBNavItem className="navL">
                    <a className="navLink" href="#Contact">Contact</a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
        <MDBAnimation reveal type="fadeInUp" duration="2s" delay="0s">
        <main>
          <MDBContainer className="text-center my-5" id="about">
          
            <br id="Apropos"/>
              <h1 className="font-weight-bold my-5 text-center">A propos</h1>
            
            <p align="justify">
              Développeur web curieux, autonome, rigoureux, j'aime les applications simples, rapides et efficaces.<br/><br/>
              Titulaire d’un Titre Professionnel de Développeur Web et Web Mobile. Après une reconversion Professionnelle,
              suite à une expérience de commercial, je sais que mon expérience dans ce milieu m'aidera pour la suite de ma carrière.<br/>
              Mon parcours, ainsi que ma passion pour internet et l'informatique, m'ont permis d'acquérir les connaissances techniques
              et pratiques indispensables à l'exercice de ce métier.<br/><br/>
              Actuellement à la recherche d'un poste, je sais travailler en Méthode Agile je prends plaisir à relever de nouveaux challenges. 
            </p>
          </MDBContainer>
        </main>
        </MDBAnimation>
        <br/>
        <div className="fond">
          <br id="Competence"/>
          <h1 className="font-weight-bold my-5 text-center">Technologies Utilisées</h1>
          <br/>
          <GridExamplesPage2/>
          <br/>
          <br/>
        </div>
        <div>
          <br id="Realisation"/>
          <MDBAnimation reveal type="fadeInUp" duration="2s" delay="0s">
          <h1 className="font-weight-bold my-5 text-center">Realisation</h1>
          <LightboxPage/>
          </MDBAnimation>
          <br/>
          <br/>
        </div>
        <div className="fond">
        <br id="Parcour"/>
        <h1 className="font-weight-bold my-5 text-center">Experiences</h1>
        <br/>
        <Experiences/>
        </div>
        <div>
          <br id="interets"/>
          <h1 className="font-weight-bold my-3 text-center">Centre d'interets</h1>
          <h6 className="text-center">un peu geek sur les bords</h6>
          <br/>
          <Interets/>
          <br/>
          <br/>
        </div>
        <div className="fond">
          <br id="Contact"/>
          <h1 className="font-weight-bold my-3 text-center">Contact</h1>
          <h6 className="text-center">N'hesitez pas !</h6>
          <br/>
          <Contact/>
          <br/>
          <FooterPage/>
        </div>
      </div>
      
    );
  }
}


export default FullPageIntroWithFixedNavbar;