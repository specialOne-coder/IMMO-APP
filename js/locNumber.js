const locataires = document.querySelector(".nbLoc");

let ajxL = new XMLHttpRequest();
ajxL .open("GET","http://localhost/immo-api/locataires/count",true);
ajxL.onload = ()=>{
   if(ajxL .readyState === XMLHttpRequest.DONE){
       if(ajxL .status === 200){
           let data = ajxL .responseText;
           let obj = JSON.parse(data);
           console.log(obj[0]['compte'])
           var row = obj[0]['compte'];
           locataires.innerHTML = row;
       }
   }
}
ajxL.send();