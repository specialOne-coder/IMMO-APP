const table = document.querySelector("table tbody");
const select = document.querySelector("#selectp");
const houseNumber = document.querySelector(".nbMaison");



let ajxp = new XMLHttpRequest();
ajxp.open("GET","http://localhost/immo-api/proprietaires",true);
ajxp.onload = ()=>{
   if(ajxp.readyState === XMLHttpRequest.DONE){
       if(ajxp.status === 200){
           let data = ajxp.responseText;
           let obj = JSON.parse(data);
           for (i = 0; i < obj.length; i++) {
                var option = document.createElement("option");
                option.text = obj[i]['nomProp'];
                option.value = obj[i]['idProp'];
                console.log(option.value);
                select.add(option);
           }
           
       }
   }
}
ajxp.send();


//setInterval(()=>{
    let ajx = new XMLHttpRequest();
    ajx.open("GET","http://localhost/immo-api/maisons",true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.responseText;
               console.log(data);
               let obj = JSON.parse(data);
               for (i = 0; i < obj.length; i++) {
                   var row = `<tr>
                                 <td>${obj[i]['nomProp']}</td>
                                 <td>${obj[i]['codeMaison']}</td>
                                 <td>${obj[i]['nomMaison']}</td>
                                 <td>${obj[i]['quartier']}</td>
                                 <td>${obj[i]['ville']}</td>
                                 <td><a href="updateHouse.php?id=${obj[i]['idMaison']}"><button class = "btn btn-primary"><i class="fas fa-fw fa-house-user"></i></td></button><a/></td>
                                 <td><button onclick = suppression(${obj[i]['idMaison']}) class = "btn btn-danger"><i class="fas fa-fw fa-house-user"></i></td></button></td>
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
        ajxD.open("DELETE","http://localhost/immo-api/maisons/delete/"+idClick,true);
        ajxD.onload = ()=>{
           if(ajxD.readyState === XMLHttpRequest.DONE){
               if(ajxD.status === 200){
                   let data = ajxD.responseText;
                   console.log(data);
                   if(data == "success"){
                       location.href = "listHouse.html";
                   }else{
                       alert('Vous ne pouvez pas supprimer cette , elle est sous contrat');
                   }
                }
                   
               }
           }
           ajxD.send();
    
    }
