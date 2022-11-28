function clickOnce(){
    let radius =document.getElementById("radius");
    let result=(4/3)*(22/7)*(radius.value*radius.value*radius.value);
    document.getElementById("volume").value=result;
}