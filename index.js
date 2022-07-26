let convert = document.querySelector('.convert')
let textarea = document.querySelector('.textarea')
let convert_to_text = document.getElementById('convert_to_text')


// text to speech 

let speech = new SpeechSynthesisUtterance()

convert.addEventListener("click",()=>{
   
    speech.text = textarea.value
    speech.pitch =1
    speech.volume=15
    speech.lang = "en-us"
    speech.rate = 1
    // speech.voice = 'Google UK English Female'
    var filteredVoices = speechSynthesis.getVoices().filter(function (voice) {
        return voice.name === 'Google UK English Female'//voice.default===true 3;
        });
    // voice.name = 'Google UK English Female';
    speech.voice = filteredVoices[0]
    speechSynthesis.speak(speech)
})


// voice to text converter

convert_to_text.addEventListener("click",function(){
    console.log('hello')
    var speech = true
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();
    recog.interimResults = true;

    recog.addEventListener('result',e=>{
        const transcript = Array.from(e.results)
        .map(result=>result[0])
        .map(result=>result.transcript)


        textarea.innerHTML = transcript
    })

    if(speech == true)
    {
        recog.start()
    }

})