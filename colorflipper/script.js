let btn= document.getElementById("btn");
let main= document.getElementById("main");
let ccode= document.getElementById("color-code");
let value=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];

function random(){
    let rano = Math.floor(Math.random()*16);
    return rano;
}



btn.addEventListener("click",function(){

    let code='#';
   
    for(let i=0;i<6;i++){
     
      code += value[random()];
    }
main.style.backgroundColor=code;
ccode.innerHTML=code;
});