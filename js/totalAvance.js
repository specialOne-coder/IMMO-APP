const avance = document.querySelector(".totalAvance");


let ajxS = new XMLHttpRequest();
ajxS .open("GET","http://localhost/immo-api/contrats/somme",true);
ajxS.onload = ()=>{
   if(ajxS .readyState === XMLHttpRequest.DONE){
       if(ajxS .status === 200){
           let data = ajxS .responseText;
           let obj = JSON.parse(data);
           console.log(obj[0]['SUM(avance)'])
           var row = obj[0]['SUM(avance)'];
           avance.innerHTML = '$'+row;
       }
   }
}
ajxS.send();