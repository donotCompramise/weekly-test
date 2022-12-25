
const imageContainer=document.getElementsByClassName('image_container')[0];
const imageView =document.getElementsByClassName('image_view')[0];
init()
   function init(){
        dog()
   }
let html=''
async function dog(){
    for(let i=0;i<10;i++){
    const streamRes=await fetch(`https://dog.ceo/api/breeds/image/random`)
    const testData= await streamRes.text()
    const JSONData= JSON.parse(testData);
    html +=`<img src="${JSONData.message}",alt="photo" width=300px height:200px>`
    
    }
    imageContainer.innerHTML=html;

}