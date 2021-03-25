const table = document.querySelector("table tbody");
const selectm = document.querySelector("#selectm");
const selectl = document.querySelector("#selectl");



// les maisons 
let ajxm = new XMLHttpRequest();
ajxm.open("GET","http://localhost/immo-api/maisons",true);
ajxm.onload = ()=>{
   if(ajxm.readyState === XMLHttpRequest.DONE){
       if(ajxm.status === 200){
           let data = ajxm.responseText;
           let obj = JSON.parse(data);
           for (i = 0; i < obj.length; i++) {
                var option = document.createElement("option");
                option.text = obj[i]['nomMaison'];
                option.value = obj[i]['idMaison'];
                console.log(option.value);
                selectm.add(option);
           }
           
       }
   }
}
ajxm.send();

// les locataires
let ajxl = new XMLHttpRequest();
ajxl.open("GET","http://localhost/immo-api/locataires",true);
ajxl.onload = ()=>{
   if(ajxl.readyState === XMLHttpRequest.DONE){
       if(ajxl.status === 200){
           let data = ajxl.responseText;
           let obj = JSON.parse(data);
           for (i = 0; i < obj.length; i++) {
                var option = document.createElement("option");
                option.text = obj[i]['nomLocataire'];
                option.value = obj[i]['idLocataire'];
                console.log(option.value);
                selectl.add(option);
           }
           
       }
   }
}
ajxl.send();


//setInterval(()=>{
    let ajx = new XMLHttpRequest();
    ajx.open("GET","http://localhost/immo-api/contrats",true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.responseText;
               console.log(data);
               let obj = JSON.parse(data);
               for (i = 0; i < obj.length; i++) {
                   var row = `<tr>
                                 <td>${obj[i]['nomMaison']}</td>
                                 <td>${obj[i]['nomLocataire']}</td>
                                 <td>${obj[i]['codeContrat']}</td>
                                 <td>${obj[i]['titreContrat']}</td>
                                 <td>${obj[i]['termesContrat']}</td>
                                 <td>${obj[i]['debutContrat']}</td>
                                 <td>${obj[i]['finContrat']}</td>
                                 <td>${obj[i]['caution']}</td>
                                 <td>${obj[i]['avance']}</td>
                                 <td><a href="updateCtr.php?id=${obj[i]['idContrat']}"><button class = "btn btn-primary"><i class="fas fa-fw fa-file-signature"></i></td></button></a></td>
                                 <td><button onclick = suppression(${obj[i]['idContrat']}) class = "btn btn-danger"><i class="fas fa-fw fa-file-signature"></i></td></button></td>
                             </tr>`;

                    table.innerHTML += row;
                    
               }
               
           }
       }
    }
    ajx.send();

    function suppression(idClick){
        console.log(idClick);
        let ajxD = new XMLHttpRequest();
        ajxD.open("DELETE","http://localhost/immo-api/contrats/delete/"+idClick,true);
        ajxD.onload = ()=>{
           if(ajxD.readyState === XMLHttpRequest.DONE){
               if(ajxD.status === 200){
                   let data = ajxD.responseText;
                   console.log(data);
                   if(data == "success"){
                       location.href = "listCtr.html";
                   }else{
                       alert('Vous ne pouvez pas supprimer ce contrat , il est déja réglé');
                   }
                }
               }
           }
        ajxD.send();
    
    }


