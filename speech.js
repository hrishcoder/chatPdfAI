//fetch the start button
let speechButton=document.getElementById("speechBtn")

//fetch the input box
let inputBox=document.getElementById('question')



//create a recognizing flag
let is_recognized=false
//call the translator function from javascript
let recognition=new webkitSpeechRecognition()
//configure the recognition
recognition.lang = window.navigator.language;
recognition.interimResults = true;
recognition.continous=true;
//create a condition for speech button like even or odd presses.
speechButton.addEventListener('click',function(){
    //This means if false then start and make it true and if true then stop and make it false and it goes on.
    if(!is_recognized){
    
        recognition.start()
        is_recognized=true
        
        speechButton.classList.add('recording'); // Optional: for UI feedback
        
    }else{
        recognition.stop()
        is_recognized=false
        
        speechButton.classList.remove('recording'); // Optional: for UI feedback

        
    }
   
})
 //here add the result that is when it converts speech into text it would be stored inside the inputBox content
 recognition.addEventListener('result',(event)=>{
    const result=event.results[event.results.length - 1 ][0].transcript;
    inputBox.value=result;

})

// handle errors
recognition.addEventListener('error', (event) => {
    console.error('Speech recognition error:', event.error);
    is_recognized = false;
    speechButton.classList.remove('recording');
});
// handle end of speech recognition
recognition.addEventListener('end', () => {
    is_recognized = false;
    speechButton.classList.remove('recording');
});