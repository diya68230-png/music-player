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
});

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

let allMusic = Array.from(document.getElementsByClassName('music-card'));

songs = [
    {songName:'Song1',songDes: 'This is description of song 1', Songimg:'images/4.jfif', songPath: 'Audio/1.mp3'},
    {songName:'Song2',songDes: 'This is description of song 2', Songimg:'images/1.jfif', songPath: 'Audio/2.mp3'},
    {songName:'Song3',songDes: 'This is description of song 3', Songimg:'images/2.jfif', songPath: 'Audio/3.mp3'},       
    {songName:'Song4',songDes: 'This is description of song 4', Songimg:'images/3.jfif', songPath: 'Audio/4.mp3'},
    {songName:'Song5',songDes: 'This is description of song 5', Songimg:'images/1.jfif', songPath: 'Audio/5.mp3'},
    {songName:'Song6',songDes: 'This is description of song 6', Songimg:'images/2.jfif', songPath: 'Audio/6.mp3'},
    {songName:'Song7',songDes: 'This is description of song 7', Songimg:'images/4.jfif', songPath: 'Audio/7.mp3'},
    {songName:'Song8',songDes: 'This is description of song 8', Songimg:'images/4.jfif', songPath: 'Audio/8.mp3'},
    {songName:'Song9',songDes: 'This is description of song 9', Songimg:'images/1.jfif', songPath: 'Audio/9.mp3'},
    {songName:'Song10',songDes: 'This is description of song 10', Songimg:'images/2.jfif', songPath: 'Audio/10.mp3'},
    {songName:'Song11',songDes: 'This is description of song 11', Songimg:'images/3.jfif', songPath: 'Audio/11.mp3'},
    {songName:'Song12',songDes: 'This is description of song 12', Songimg:'images/1.jfif', songPath: 'Audio/12.mp3'},
    {songName:'Song13',songDes: 'This is description of song 13', Songimg:'images/2.jfif', songPath: 'Audio/13.mp3'},
    {songName:'Song14',songDes: 'This is description of song 14', Songimg:'images/4.jfif', songPath: 'Audio/14.mp3'},
    {songName:'Song15',songDes: 'This is description of song 15', Songimg:'images/4.jfif', songPath: 'Audio/15.mp3'},
    {songName:'Song16',songDes: 'This is description of song 16', Songimg:'images/1.jfif', songPath: 'Audio/16.mp3'},
    {songName:'Song17',songDes: 'This is description of song 17', Songimg:'images/2.jfif', songPath: 'Audio/17.mp3'},
    {songName:'Song18',songDes: 'This is description of song 18', Songimg:'images/3.jfif', songPath: 'Audio/18.mp3'},
    {songName:'Song19',songDes: 'This is description of song 19', Songimg:'images/1.jfif', songPath: 'Audio/19.mp3'},
    {songName:'Song20',songDes: 'This is description of song 20', Songimg:'images/2.jfif', songPath: 'Audio/20.mp3'},
    {songName:'Song21',songDes: 'This is description of song 21', Songimg:'images/4.jfif', songPath: 'Audio/21.mp3'},
    {songName:'Song22',songDes: 'This is description of song 22', Songimg:'images/4.jfif', songPath: 'Audio/22.mp3'},
    {songName:'Song23',songDes: 'This is description of song 23', Songimg:'images/1.jfif', songPath: 'Audio/23.mp3'},
    {songName:'Song24',songDes: 'This is description of song 24', Songimg:'images/2.jfif', songPath: 'Audio/24.mp3'},
    {songName:'Song25',songDes: 'This is description of song 25', Songimg:'images/3.jfif', songPath: 'Audio/25.mp3'},
    {songName:'Song26',songDes: 'This is description of song 26', Songimg:'images/1.jfif', songPath: 'Audio/26.mp3'},
    {songName:'Song27',songDes: 'This is description of song 27', Songimg:'images/2.jfif', songPath: 'Audio/27.mp3'},
    {songName:'Song28',songDes: 'This is description of song 28', Songimg:'images/4.jfif', songPath: 'Audio/28.mp3'},
    {songName:'Song29',songDes: 'This is description of song 29', Songimg:'images/4.jfif', songPath: 'Audio/29.mp3'}
]

allMusic.forEach((element,i) =>{
element.getElementsByTagName('img')[0].src=songs[i].Songimg;
element.getElementsByClassName('img-title')[0].innerHTML=songs[i].songName;
element.getElementsByClassName('img-description')[0].innerText=songs[i].songDes;
});

let shuffle =document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat=false;
let songOnShuffle=false;

function shuffleSongs(originalOrder){
    order= {...originalOrder};
    for(i=order.length-1;i>0;i--){
        let j= Math.floor((Math.random)*(i+1));
       [ order[i],order[j]] = [order[j],order[i]];
    
    }   
    return order;
}
shuffle.addEventListener('click',() => {
    if(!songOnShuffle){
        songOnShuffle=true;
        shuffle.classList.add('active');
    }else{
        songOnShuffle=false;
        shuffle.classList.remove('active');
    }
})

repeat.addEventListener('click',() => {
    if(!songOnRepeat){
        songOnRepeat=true;
        repeat.classList.add('active');
    }else{
        songOnRepeat=false;
        repeat.classList.remove('active');
    }
})
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