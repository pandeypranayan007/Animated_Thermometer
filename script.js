//<span id="temp" class="fa"></span>

const tempLoad = () =>{
    let temp=document.getElementById('temp');
    temp.innerHTML="&#xf2cb;"
    setTimeout(()=>{
        temp.innerHTML="&#xf2c7;"
        temp.style.color="yellow";
    },1000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2ca"
    },2000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c9;"
    },3000);

    setTimeout(()=>{
        temp.innerHTML="&#xf2c7;"
        temp.style.color="#d36031";
    },4000);
}
tempLoad();
setInterval(tempLoad,5000);