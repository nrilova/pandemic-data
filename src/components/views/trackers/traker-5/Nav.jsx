import React from "react";
import Coronavirus from "../../../asset/images/coronavirus.png"
import {FaClock , FaBars, FaThLarge , FaFolder , FaCropAlt , FaRandom , FaGlobeAmericas , FaCommentAlt , FaHeadset , FaShoppingCart} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../trackers/traker-5/Nav.css'
function Navtraker () {
    return (
        <main className="d-flex">
            <section>
                <div class="d-flex flex-column flex-shrink-0 bg-gray-tracker col-2 vh-100 d-flex justify-content-center bar-tracker"> 
                <a href="./" className="d-block d-flex justify-content-center align-items-center pt-4 pb-4"> 
                    <img
                        className="logo-traker rotate"
                        src={Coronavirus}
                        alt="corona"/> 
                </a>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link"> 
                        <FaClock style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-2" className="nav-link">
                        <FaBars style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-3" class="nav-link">
                        <FaThLarge style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-4" class="nav-link">
                        <FaFolder style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-5" class="nav-link">
                        <FaCropAlt style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-6" class="nav-link">
                        <FaRandom style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-7" class="nav-link">
                        <FaGlobeAmericas style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="./tracker-8" className="nav-link">
                        <FaCommentAlt style={{color: "#3639AE", fontSize: '30px'}}/>
                        </a>
                    </li>
                </ul>
                <div className="d-flex flex-column btn-circle-content">
                    <card class="btn-circle btn-circle-track bg-blue d-flex justify-content-center align-items-center">
                        <FaHeadset/>
                    </card>
                    <card className="btn-circle btn-circle-track bg-green d-flex justify-content-center align-items-center">
                        <FaShoppingCart/>
                    </card>
                </div>
                </div>
            </section>
        </main>
    )
}
export default Navtraker 