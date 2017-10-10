
//    document.addEventListener('keyup',function(){
//    var text=document.getElementById('text_data').value;
//    console.log(text);
//    localSotrage.setItem("wow",text);  
// })
   document.addEventListener('click',function(){
    var save=document.getElementById('button_data').value;
    console.log(save);
    localSotrage.setItem("wow",save);
   })