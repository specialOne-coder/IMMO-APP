const table = document.querySelector("table tbody");
const select = document.querySelector("#selectc");



let ajxp = new XMLHttpRequest();
ajxp.open("GET","http://localhost/immo-api/contrats",true);
ajxp.onload = ()=>{
   if(ajxp.readyState === XMLHttpRequest.DONE){
       if(ajxp.status === 200){
           let data = ajxp.responseText;
           let obj = JSON.parse(data);
           for (i = 0; i < obj.length; i++) {
                var option = document.createElement("option");
                option.text = obj[i]['codeContrat'];
                option.value = obj[i]['idContrat'];
                console.log(option.value);
                select.add(option);
           }
           
       }
   }
}
ajxp.send();

let ajx = new XMLHttpRequest();
ajx.open("GET","http://localhost/immo-api/reglements",true);
ajx.onload = ()=>{
   if(ajx.readyState === XMLHttpRequest.DONE){
       if(ajx.status === 200){
           let data = ajx.responseText;
           console.log(data);
           let obj = JSON.parse(data);
           for (i = 0; i < obj.length; i++) {
               var row = `<tr>
                             <td>${obj[i]['codeContrat']}</td>
                             <td>${obj[i]['dateReg']}</td>
                             <td>${obj[i]['montantReg']}</td>
                             <td><a href="updateReg.php?id=${obj[i]['idReglement']}"><button class = "btn btn-primary"><i class="fab fa-fw fa-elementor"></i></td></button></a></td>
                             <td><button onclick = suppression(${obj[i]['idReglement']}) class="btn btn-danger"><i class="fab fa-fw fa-elementor"></i></td></button></td>
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
    ajxD.open("DELETE","http://localhost/immo-api/reglements/delete/"+idClick,true);
    ajxD.onload = ()=>{
       if(ajxD.readyState === XMLHttpRequest.DONE){
           if(ajxD.status === 200){
               let data = ajxD.responseText;
               console.log(data);
               if(data == "success"){
                   location.href = "listReg.html";
               }
            }
               
           }
       }
       ajxD.send();

}