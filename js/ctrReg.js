const reg = document.querySelector(".ctrReg");

let ajxR = new XMLHttpRequest();
ajxR .open("GET","http://localhost/immo-api/reglements/ctrReg",true);
ajxR.onload = ()=>{
   if(ajxR .readyState === XMLHttpRequest.DONE){
       if(ajxR .status === 200){
           let data = ajxR .responseText;
           let obj = JSON.parse(data);
           console.log(obj[0]['pctCtr'])
           var row = obj[0]['pctCtr'];
           reg.innerHTML = row + '%';
       }
   }
}
ajxR.send();