import React from 'react';
import { MDBTable, MDBTableBody, } from 'mdbreact';
import './expTable.css'

const Experiences = () => {
  return (
    <MDBTable className="expTable">
      <MDBTableBody>
        <tr>
          <td>
            <p className="titre"> Juin 2019 - Mars 2020 Formation Développeur Web et Web Mobile - AFPA Roubaix  (bac +2)</p>
            <p>
              Technologies utilisées : HTML, CSS, JS, REACT.JS, JAVA JEE, SPRING, MySQL...<br/>
              Frameworks : Hibernate, Mavens, Git, Jipster..<br/>
              Autres outils : slack, trello, methode agile, GitLab..<br/>
              Stage : 3 mois chez INSY2S : participation sur un proget en cours, application web avec un front en REACT.JS et un back en Java
              Certification openclassroom : utilisez Git et GitHub, coder en JavaScript, Gerez un projet avec une equipe Scrum<br/>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="titre"> Decembre 2018 - Janvier 2019 formation Monter un projet entreprenarial - BGE Picardie </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="titre"> Septembre 2016 – Août 2018 Domaine et Patrimoine de France Beauvais 60 </p>
            <p>
                Attaché à la direction des ventes<br/>
                Participation au développement du chiffre d’affaires, démarchage et fidélisation de nouveaux clients.<br/>
                Exploitation d’un portefeuille de clients existants. Pour un total de 350 000€ de CA/an.<br/>
                Gestion des chantiers de la signature du devis jusqu’à la réception par le client.<br/>
                Briefing des équipes de chantier
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="titre">Novembre 2015-Juillet 2016 Teecfood Ltd Londres, UK </p>
            <p>
                Préparateur de Commande (de nuit)
                <ul>
                    <li>Réception des commandes des restaurateurs</li>
                    <li>Réception des produits importés et stockage en chambre froide</li>
                    <li>Préparation des commandes qui devaient être livrées le matin même.</li>
                </ul>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p className="titre">Aout 2014-juin 2015 Le Cappeville Gisors, 27 </p>
            <p>
                Apprenti cuisinier
                <ul>
                    <li>Préparation et mise en place des ingrédients pour les services du midi et du soir</li>
                    <li>Préparation des repas pour le personnel</li>
                    <li>Nettoyage de la cuisine</li>
                </ul>
            </p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}

export default Experiences;