const houseNumber = document.querySelector(".nbMaison");


let ajxC = new XMLHttpRequest();
ajxC .open("GET","http://localhost/immo-api/maisons/count",true);
ajxC.onload = ()=>{
   if(ajxC .readyState === XMLHttpRequest.DONE){
       if(ajxC .status === 200){
           let data = ajxC .responseText;
           let obj = JSON.parse(data);
           console.log(obj[0]['COUNT(idMaison)'])
           var row = obj[0]['COUNT(idMaison)'];
           houseNumber.innerHTML = row;
       }
   }
}
ajxC.send();