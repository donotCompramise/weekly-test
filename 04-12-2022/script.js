const decrease=document.getElementsByClassName("Decrease");
const counter=document.getElementById("Counter");
const increase=document.getElementById("Increase");
    var num=0;
    counter.value=num
    function increasing(){
        counter.value= ++num;
        if(num>0)
        counter.style.color="green"
    }
    function decreasing(){
        counter.value=  --num;
        if(num<0)
        counter.style.color="red"
    }
    function reset(){
        counter.value=0
        num=0
    }
