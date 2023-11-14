let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let progress = document.getElementById('progress')
let songs = [
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bad Liar", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
]
//

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
    }
})




//
progress.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
})