const form = document.querySelector(".p-5 form"),
addBtn = form.querySelector("button"),
errorTxt = form.querySelector("#msg");
var value ;

// Pas d'actualisation
form.onsubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.target);
    value = Object.fromEntries(data.entries());
    let ajx = new XMLHttpRequest();
    ajx.open("POST","http://localhost/immo-api/reglements/insert",true);
    ajx.onload = ()=>{
       if(ajx.readyState === XMLHttpRequest.DONE){
           if(ajx.status === 200){
               let data = ajx.response;
               console.log(data);
               if(data == "success"){
                    errorTxt.className = "alert alert-success";
                    errorTxt.innerHTML = '<center>'+data+'</center>';
                    console.log(errorTxt);
                    console.log(value);
                    form.reset();
               }
           }
       }
    }
    ajx.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var jsonObject = JSON.stringify(value);
    console.log(jsonObject);
    ajx.send(jsonObject);
}


