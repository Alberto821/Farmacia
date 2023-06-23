import React from "react";
import { Link } from "react-router-dom";
function ListaMedicamentos(){
     return(
         <div>
             <div class="panel panel-default">
                 <div class="panel-heading">
                     <h1 align="center">  Compras </h1>
                     <p align="center" id="subtitleMed"> Calificacion de compras. </p>
                 </div>
                 <div class="panel-body">
                     <div class="row-fluid user-row">
                         <table class="table" id="carritoTable">
                             <thead>
                                 <tr>
                                     <th>Farmacia</th>
                                     <th>Fecha</th>
                                     <th>Monto</th>
                                     <th>Calificacion</th>
                                 </tr>
                             </thead>
                             <tbody>
                             </tbody>
                         </table>

                     </div>
                 </div>
             </div>
         </div>
     )
}