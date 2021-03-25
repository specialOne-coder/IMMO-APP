const table = document.querySelector("table tbody");


//setInterval(()=>{
    let ajx = new XMLHttpRequest();
    ajx.open("GET","http://localhost/immo-api/proprietaires",true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.responseText;
               console.log(data);
               let obj = JSON.parse(data);
               for (i = 0; i < obj.length; i++) {
                   var row = `<tr>
                                 <td>${obj[i]['nomProp']}</td>
                                 <td>${obj[i]['prenomProp']}</td>
                                 <td>${obj[i]['telProp']}</td>
                                 <td>${obj[i]['emailProp']}</td>
                                 <td>${obj[i]['adresseProp']}</td>
                                 <td><a href="updateProprio.php?id=${obj[i]['idProp']}"><button class="btn btn-primary"><i class="fas fa-fw fa-parking"></i></td></button></a></td>
                                 <td><button onclick = suppression(${obj[i]['idProp']}) class = "btn btn-danger"><i class="fas fa-fw fa-parking"></i></td></button></td>
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
        ajxD.open("DELETE","http://localhost/immo-api/proprietaires/delete/"+idClick,true);
        ajxD.onload = ()=>{
           if(ajxD.readyState === XMLHttpRequest.DONE){
               if(ajxD.status === 200){
                   let data = ajxD.responseText;
                   console.log(data);
                   if(data == "success"){
                       location.href = "listProp.html";
                   }else{
                       alert('Vous ne pouvez pas supprimer ce proprietaire , il possède une maison sous contrat');
                   }
                }
               }
           }
           ajxD.send();
    }
      
//},500);