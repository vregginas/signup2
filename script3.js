const container=document.querySelector('.carousel');
let startX;
let scrollLeft;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
    isDown = true;
    
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
     
  }

  function mouseUp(e){
    isDown = false;
  }
  function mouseLeave(e){
    isDown = false;
  }
  function mouseMove(e){
    if(isDown){
      e.preventDefault();
      
  
      //Move Horizontally
      const x = e.pageX - container.offsetLeft;
      const walkX = (x - startX)*3.2;
      container.scrollLeft = scrollLeft - walkX;
  
    }
  }

const test=document.querySelectorAll('.item');
let take=document.querySelector('#take');
test.forEach((img)=>{img.addEventListener('click',(e)=>{
    take.src=img.src;
})})







        