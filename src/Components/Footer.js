import React from "react"
import '../CSS/Footer.css'
import { GiLargeDress, GiSewingString} from "react-icons/gi"
import {ImScissors} from  "react-icons/im"
function Footer() {
    return (
        
        <div className="contain">
           
            <div className="container1">
                
              <di className="item"> <h1>Services</h1></di>
                <div className="items">
                    <div className="item1"><p>designing</p>
                    <GiLargeDress size={40} /></div>
                    <div className="item2"><p>Hemming</p>
                    <GiSewingString size={40}/></div>
                    <div className="item3"><p>Custom sewing</p>
                    <ImScissors size={40} /></div>
                   
                    </div>
            </div>

            

           
           




        </div>
    )

}
















export default Footer






