const nam=document.getElementById('name');
const sur=document.getElementById('sur');
const mail=document.querySelector('#mail');
const form=document.querySelector('form');




function error(input,message){
    input.className="input bad";
    input.placeholder=message;

}



    
    


  
    


    //event listener
    
    form.addEventListener('submit',(e)=>{
        if(nam.value.length<3){
            e.preventDefault();
            error(nam,'3-20 χαρακτήρες')
            
        }})

        form.addEventListener('submit',(e)=>{
            if(nam.value.length>20){
                e.preventDefault();
                error(nam,'3-20 χαρακτήρες')
                
            }})
    form.addEventListener('submit',(e)=>{
        if(sur.value.length<3){
            e.preventDefault();
            error(sur,'3-20 χαρακτήρες')
            
        }})
        form.addEventListener('submit',(e)=>{
            if(sur.value.length>20){
                e.preventDefault();
                error(sur,'3-20 χαρακτήρες')
                
            }})
    form.addEventListener('submit',(e)=>{
            if(mail.value.length<3){
                e.preventDefault();
                error(mail,'6-100 χαρακτήρες')
                
            }})
            form.addEventListener('submit',(e)=>{
                if(mail.value.length>100){
                    e.preventDefault();
                    error(mail,'6-100 χαρακτήρες')
                    
                }})
        
  