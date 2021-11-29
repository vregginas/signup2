const user=document.querySelector('#user');
const pass=document.querySelector('#pass');
const conf=document.querySelector('#conf');
const form=document.querySelector('form');
const select=document.querySelector('#select');

function error(input,message){
    input.className="input bad";
    input.placeholder=message;

}

 //event listener
 form.addEventListener('submit',(e)=>{
    if(user.value.length<3){
        e.preventDefault();
        error(user,'3-20 χαρακτήρες')
        
    }})
    form.addEventListener('submit',(e)=>{
        if(user.value.length>20){
            e.preventDefault();
            error(user,'3-20 χαρακτήρες')
            
        }})
    form.addEventListener('submit',(e)=>{
     if(pass.value.length<3){
         e.preventDefault();
         error(pass,'3-20 χαρακτήρες')
         
     }})
     form.addEventListener('submit',(e)=>{
        if(pass.value.length>20){
            e.preventDefault();
            error(pass,'3-20 χαρακτήρες')
            
        }})
     form.addEventListener('submit',(e)=>{
         if(conf.value.length<3){
             e.preventDefault();
             error(conf,'Επιβεβαιώστε τον κωδικό σας')
             
         }})
         form.addEventListener('submit',(e)=>{
            if(conf.value.length>20){
                e.preventDefault();
                error(conf,'Επιβεβαιώστε τον κωδικό σας')
                
            }})
         form.addEventListener('submit',(e)=>{
            if(conf.value!==pass.value){
                e.preventDefault();
                alert('Οι κωδικοί δεν ταιριάζουν')
                
            }})


select.addEventListener('click',(e)=>{
    select.classList.toggle('select');
})            