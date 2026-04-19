let play =document.getElementById('play');
let progressbar =document.getElementById('progressbar');
let audio = new Audio('Audio/1.mp3');
let currentSong=1;
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
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');   
    })
}

playmusic.forEach((element) =>{
  element.addEventListener('click', (e) =>{
    makeAllPlay();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');

    index = parseInt(e.target.id);
    currentSong= index;
    audio.src = `Audio/${index}.mp3`;
    audio.currentTime = 0;
    audio.play();
})
});

playNextSong = () => {
    let nextSong = (currentSong+1)%playmusic.length;
    currentSong = nextSong == 0 ? 29 :nextSong;
    audio.src = `Audio/${currentSong}.mp3`;
    audio.currentTime=0;
    audio.play();
}
playPrevSong = () =>{
   let PrevSong = (currentSong-1);
    currentSong = PrevSong == 0 ? 29 :PrevSong;
    audio.src = `Audio/${currentSong}.mp3`;
    audio.currentTime=0;
    audio.play(); 
}

forward= document.getElementById('forward');
backward= document.getElementById('backward');

forward.addEventListener('click',() => {
    playNextSong();
})
audio.addEventListener('ended', () =>{

})
backward.addEventListener('click',() => {
    playPrevSong();
})