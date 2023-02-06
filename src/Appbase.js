import React from 'react';
import {motion} from "framer-motion";
import nature from "./img/naturerepublic.jpg";
import electron from "electron";
class App extends React.Component{
  render(){
    return (
        <motion.div className = "main" style = {{backgroundColor:"white",width:"773px",height:"740px"}}>
          <motion.header style = {{display:"flex",justifyContent:"center"}}>
            <motion.img src = {nature}/>
          </motion.header>
          <motion.div style = {{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <motion.div className="input_xlsx"
            style = {{width:"40%",height:"300px",border:"2px dashed black",marginRight:"10px",color:"slategray",
            fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}
            whileHover = {{scale:1.05}}
            whileTap = {{scale:1}}
            whileFocus = {{scale:1.05}}
            
            >
            <input type="file" onChange = {function(e){
              console.log(e.target.value);
              console.log(electron.app.getName(e.target));
            }}/>
              <p>Upload File</p>
            </motion.div>
            <motion.i class="fas fa-random" style = {{fontSize:"30px"}}></motion.i>
            <motion.div className = "output_xlsx" style = {{width:"40%",height:"300px",border:"2px dashed black",marginLeft:"10px",color:"slategray",
            fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}
              whileHover = {{scale:1.05}}
              whileTap = {{scale:1}}
              >
              <p>Download File</p>
            </motion.div>
          </motion.div>
          <motion.footer style = {{color:"slategray",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <p>This Program for NatureRepublic employees</p>
            <p>By.MiniCastle</p>
            </motion.footer>
        </motion.div>
    );
  }
}

export default App;
