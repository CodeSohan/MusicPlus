
const getPlay=document.querySelector("#play");


const audioObj=new Audio();


const img=document.getElementById("img");
const songName=document.querySelector("#song-name");
const artistName=document.querySelector("#artist-name");

const forward=document.querySelector("#forward");
const backward=document.querySelector("#backward");
const progress=document.getElementById("progress");

//array of music...
const songs=[
{
	id:"Balam",
    title:"Balam",
    artist:"Vishal Dadlani",
},
{
	id:"Kabira",
    title:"Kabira",
    artist:"Tochi Raina",
},
{
	id:"Gangster",
    title:"Gangster",
    artist:"KK",
},
{
	id:"lutgaye",
    title:"Lut Gaye",
    artist:"Jubin Nautiyal",
}
]



//play and pause toggle button
getPlay.addEventListener("click",playTheSong);


let isSongPlaying=false;

function playTheSong(){
	if(isSongPlaying){
		pauseSong();
	}else{
		playSong();
	}
}
	

function playSong(){
	isSongPlaying=true;
    audioObj.play();
	getPlay.classList.replace("fa-play","fa-pause");
	img.classList.add("rotateimg");

}

function pauseSong(){
	isSongPlaying=false;
	audioObj.pause();
	getPlay.classList.replace("fa-pause","fa-play");
	img.classList.remove("rotateimg");
    
}


function loadSong(song){
	songName.textContent=song.title;
	artistName.textContent=song.artist;
	audioObj.src="./audio_lib/"+song.id+".mp3";
    img.src="./img_lib/"+song.id+".jpg";
}


let songIndex=0;
loadSong(songs[songIndex]);

forward.addEventListener("click",function(){
    songIndex=(songIndex + 1) % songs.length;

    loadSong(songs[songIndex]);
    isSongPlaying=false;
    playTheSong();   
});

backward.addEventListener("click",function(){
    songIndex=(songIndex - 1 +songs.length) % songs.length;
    loadSong(songs[songIndex]);
  isSongPlaying=false;
    playTheSong();   
});

