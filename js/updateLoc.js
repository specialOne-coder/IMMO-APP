const form = document.querySelector(".p-5 form"),
addBtn = form.querySelector("button"),
errorTxt = form.querySelector(".message");
var value ;

// Pas d'actualisation
form.onsubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    value = Object.fromEntries(data.entries());
    let id = value.idLocataire;
    let ajx = new XMLHttpRequest();
    ajx.open("PUT","http://localhost/immo-api/locataires/update/"+id,true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.response;
               console.log(data);
               if(data == "success"){
                   location.href = "listLoc.html";
               }
           }
       }
    }
    ajx.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var jsonObject = JSON.stringify(value);
    console.log(jsonObject);
    ajx.send(jsonObject);
}




