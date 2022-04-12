import React from "react";
import "./SobreNosotros.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Card } from "react-bootstrap";
import img1 from "../../assets/images/card1.png";
import img2 from "../../assets/images/card2.jpg";
import img3 from "../../assets/images/card3.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <div className="bodySN">
        <Navigation />
            <div className="let">
                <p>
                Este sistema administrativo tiene como objetivo principal servir de guía en el proceso 
                de cotización y compras de un determinado proyecto en construcción, favoreciendo el 
                cumplimiento de los objetivos de una organización. El sistema apunta a que los recursos 
                de la organización en cuestión sean administrados de forma eficiente.
                </p>
                {"  "}
                <p>
                    Este sistema tiene como finalidad:
                    <ol>
                        <li>Creación de cotizaciones de productos o servicios.</li>
                        <li>Administración de registros de compras.</li>
                        <li>Cálculos de Costos.</li>
                        <li>Mantenimiento de Datos.</li>
                        <li>Almacenamiento de datos de los clientes.</li>
                        <li>Enriquecer la gestión administrativa de la empresa.</li>
                    </ol>
                </p>
                {"  "}
                <p>

                    En este proyecto se realizará el desarrollo y documentación de Sistema administrativo 
                    para la  compañía de servicios Méndez, llamados MS Méndez Services y que se  realizará 
                    bajo las especificaciones y estandarización de las normas de tecnologías de la  
                    información y comunicación (NORTIC). 
                </p>
                {"  "}
                <p>
                    Se encuentran dentro del alcance del sistema: 
                    <ul>
                        <li>Pedir préstamos.</li>
                        <li>Otorgar préstamos.</li>
                        <li>Abrir y cerrar cuentas.</li>
                        <li>Recibir solicitudes y reclamaciones.</li>
                        <li>Manejar usuarios y registros. </li>
                        <li>Visualizar reportes e información.</li> 
                        <li>Cerrar negociaciones.</li>
                    </ul>
                </p>
                {"  "}
                <p>
                    Este sistema, deberá dar soporte a 2 funcionalidades:
                    <ul>
                        <li><b>Cotizaciones:</b> crear documentos que el departamento de compras usa en una negociación.</li>
                        <li><b>Compras:</b> hacer uso de las cotizaciones previas ya creadas, entregadas y analizadas.</li>
                    </ul>
                </p>
          </div>
        <Footer />
      </div>
    );
  }
}
