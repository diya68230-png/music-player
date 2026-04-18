let play =document.getElementById('play');
let progressbar =document.getElementById('progressbar');
let audio = new Audio('Audio/2.mp3');
play.addEventListener('click',() => {
    if(audio.paused || audio.currentTime == 0){
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');        
    }
    else{
        audio.pause();
         play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play'); 
    }
});

audio.addEventListener('timeupdate',() =>{
    let progress = (audio.currentTime/audio.duration)*100;
    progressbar.value = progress;
       progressbar.style.background =`linear-gradient(to right, #00920c ${progress}% , #333 ${progress}%)`

})
progressbar.addEventListener('input',function() {
    let value = this.value;
    this.style.background =`linear-gradient(to right, #00920c ${value}% , #333 ${value}%)`;
    audio.currentTime = (progressbar.value*audio.duration)/100;
})

let playmusic= Array.from(document.getElementsByClassName('playmusic'));

makeAllPlay = () => {
    playmusic.forEach((element) =>{
    element.target.classList.remove('fa-circle-pause');
    element.target.classList.add('fa-circle-play');   
    })
}

playmusic.forEach((element) =>{
  element.addEventListener('click', (e) =>{
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');

    index = parseInt(e.target.id);
    console.log(index);
    audio.src = `Audio/${index}2.mp3`;
    audio.currentTime = 0;

})
}) 