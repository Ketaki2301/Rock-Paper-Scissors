let items=["rock","paper","scissors"]
let uscore=0
let cscore=0
let imgs=document.querySelectorAll(".images")
imgs.forEach(item=>{
    item.addEventListener("click",function(e){
        let user=e.target.alt
        let computer=items[Math.floor(Math.random()*3)]
        document.getElementById("uresult").innerHTML="User: "+user
        document.getElementById("cresult").innerHTML="Computer: "+computer
        if((user=="rock")&&(computer=="rock")){
            alert("It is a tie!")
        }
        else if((user=="paper")&&(computer=="paper")){
            alert("It is a tie!")
        }
        else if((user=="scissors")&&(computer=="scissors")){
            alert("It is a tie!")
        }
        else if((user=="rock")&&(computer=="paper")){
           cscore++
        }
        else if((user=="paper")&&(computer=="rock")){
            uscore++
         }
         else if((user=="scissors")&&(computer=="rock")){
            cscore++
         }
         else if((user=="rock")&&(computer=="scissors")){
            uscore++
         }
         else if((user=="scissors")&&(computer=="paper")){
            uscore++
         }
         else if((user=="paper")&&(computer=="scissors")){
            cscore++
         }
         if(uscore==cscore){
            document.getElementById("win").innerHTML="It is a tie"
         }else if(uscore>cscore){
            document.getElementById("win").innerHTML="Winner: USER"
         }else {
            document.getElementById("win").innerHTML="Winner: COMPUTER"    
         }
   document.getElementById("userscore").innerHTML=uscore
   document.getElementById("comscore").innerHTML=cscore
    })
})