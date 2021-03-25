const table = document.querySelector("table tbody");


//setInterval(()=>{
    let ajx = new XMLHttpRequest();
    ajx.open("GET","http://localhost/immo-api/locataires",true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.responseText;
               console.log(data);
               let obj = JSON.parse(data);
               for (i = 0; i < obj.length; i++) {
                   var row = `<tr>
                                 <td>${obj[i]['nomLocataire']}</td>
                                 <td>${obj[i]['telLocataire']}</td>
                                 <td>${obj[i]['emailLocataire']}</td>
                                 <td><a href="updateLocataire.php?id=${obj[i]['idLocataire']}"><button class = "btn btn-primary"><i class="fas fa-fw fa-male"></i></td></button></a></td>
                                 <td><button onclick = suppression(${obj[i]['idLocataire']}) class="btn btn-danger"><i class="fas fa-fw fa-male"></i></td></button></td>
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
        ajxD.open("DELETE","http://localhost/immo-api/locataires/delete/"+idClick,true);
        ajxD.onload = ()=>{
           if(ajxD.readyState === XMLHttpRequest.DONE){
               if(ajxD.status === 200){
                   let data = ajxD.responseText;
                   console.log(data);
                   if(data == "success"){
                       location.href = "listLoc.html";
                   }else{
                      alert('Vous ne pouvez pas supprimer ce locataire , il est sous contrat');
                   }
                }
                   
               }
           }
           ajxD.send();
    
    }
        
    
