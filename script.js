 let message = document.querySelector('h1');
 function emulator(name) {
  
    let randomNum = Math.floor(Math.random() * 6);
    
    

     if(randomNum === 0) {
       message.innerHTML =  `${name} you are einstine`
      
    }else if(randomNum === 1) {
        message.innerHTML =  `${name} you are very smart`

    }else if(randomNum === 2) {
        message.innerHTML =  `${name} your intelligence is quit ok`

    }else if(randomNum === 3) {
        message.innerHTML =  `${name} you are dumb`
      

    }else if(randomNum === 4) {
        message.innerHTML =  `${name} you are very  very dumb`
      

    }else if(randomNum === 5) {
        message.innerHTML =  `${name} you are really smart`
       

    }
 }

 document.querySelector('button').addEventListener('click', function() {
    
    emulator(document.querySelector('input').value);

    document.querySelector('input').value = '';
 })


 
