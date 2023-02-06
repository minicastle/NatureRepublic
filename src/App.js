import React from 'react';
import {motion} from "framer-motion";
import nature from "./img/naturerepublic.jpg";
import XLSX from "xlsx";

let codeleng = 0;
let nameleng = 0;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      file:"",
      data:undefined,
      names:[],
      message:0,
      load:"unloaded",
      stand:"",
      value:[]
    };
  };
dataFilter(){
  for(let i = 0; i<this.state.data.length; i++){
    for(let j = 0; j<this.state.stand.length;j++){
      if(this.state.stand[j]===this.state.data[i].__EMPTY_3){
        this.state.value.push(this.state.data[i]);
        break;
      }
    }
  }
  for(let i = 0; i<this.state.value.length;i++){
    delete this.state.value[i].상품정보;
    delete this.state.value[i].__EMPTY;
    delete this.state.value[i].__EMPTY_1;
    delete this.state.value[i].__EMPTY_2;
    delete this.state.value[i].__EMPTY_5;
    delete this.state.value[i].단가;
    delete this.state.value[i].__EMPTY_6;
    delete this.state.value[i].재고금액;
    delete this.state.value[i].__EMPTY_9;
    delete this.state.value[i].바코드;
  }
  for(let i = 0;i<this.state.value.length; i++){
    if(this.state.value[i].__EMPTY_3.length >codeleng){
      codeleng = this.state.value[i].__EMPTY_3.length;
    }
    if(this.state.value[i].__EMPTY_4.length >nameleng){
      nameleng = this.state.value[i].__EMPTY_4.length;
    }
  }
  console.log("Success!");
}
async readXlsx(file){
    const fileReader = await new FileReader();
    fileReader.readAsArrayBuffer(file);
    this.setState({file:file.name});
    fileReader.onload = (e) => {
      const bufferArray = e?.target.result;
      const wb = XLSX.read(bufferArray, { type: "buffer" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      this.setState({data:data});
  };
};
async readTxt(file){
  const fileReader = await new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = () => {
    let buf = fileReader.result;
    this.setState({stand:buf});
    this.readDataSplit(this.state.stand);
  };
}
readDataSplit(data){
  let buf = data.split("\r\n");
  this.setState({stand:buf});
}
shownUpload(){
  if(this.state.data === undefined){
    return "Upload File";
  }
  else{
    return this.state.file;
  }
};
shownDownload(){
  if(this.state.data !== undefined && this.state.load === "loaded"){
    return "Data load Click Here";
  }
  else{
    return "Download File";
  }
};
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
            whileHover = {{scale:1.02}}
            whileTap = {{scale:1}}
            whileFocus = {{scale:1.02}}
            >
              <input type="file" className="form-control" id="file" onChange={function(e){
                const file = e.target.files[0];
                this.readXlsx(file);
                }.bind(this)}/>
              <p>{this.shownUpload()}</p>
            </motion.div>
            <motion.i class="fas fa-random" style = {{fontSize:"30px"}} whileHover={{scale:1.1}} whileTap={{scale:1.0,rotate:20}} onClick = {function(){
                if(this.state.data !== undefined){
                  this.setState({load:"loaded"})
                }
                this.dataFilter();
                this.shownUpload();
              }.bind(this)}/>
            <motion.div className = "output_xlsx" style = {{width:"40%",height:"300px",border:"2px dashed black",marginLeft:"10px",color:"slategray",
            fontSize:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}
              whileHover = {{scale:1.02}}
              whileTap = {{scale:1}}
              onTap={function(){
                if(this.state.data !== undefined){
                  const wb = XLSX.utils.book_new();
                  const wsSet = XLSX.utils.json_to_sheet(this.state.value,{origin:"A2",skipHeader:true});
                  let head = [["코드","상품명","정상","불량","합계","테스터","실재고","실테스터"]];
                  wsSet["!cols"] = [
                    {wch:codeleng+2},
                    {wch:nameleng+20},
                    {wch:4},
                    {wch:4},
                    {wch:4},
                    {wch:6},
                    {wch:6},
                    {wch:7}
                  ];
                  XLSX.utils.sheet_add_aoa(wsSet,head);
                  XLSX.utils.book_append_sheet(wb,wsSet,"WorkSheet");
                  XLSX.writeFile(wb,"complete.xlsx",{bookType:"xlsx"});
                }
                else{
                  alert("먼저 파일을 업로드 해주세요.");
                }
              }.bind(this)}
              >
              <p>{this.shownDownload()}</p>
            </motion.div>
          </motion.div>
          <motion.footer style = {{color:"slategray",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <motion.div style={{marginTop:"10px",display:"flex",flexDirection:"",justifyContent:"center",alignItems:"center"}} whileHover={{scale:1.02}}>
              <p style={{color:"black",marginLeft:"10px",marginRight:"5px"}}>기준 표 삽입 :</p>
              <motion.input type='file' style={{width:"180px"}} onChange={function(e){
                const file = e.target.files[0];
                this.readTxt(file);
                }.bind(this)}/>
            </motion.div>
            <p>This Program for NatureRepublic employees</p>
            <p>By.MiniCastle</p>
            </motion.footer>
        </motion.div>
    );
  }
}

export default App;
