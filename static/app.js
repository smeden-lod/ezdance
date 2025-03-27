const videoList = document.getElementById('video-list');
const videoPlayer = document.getElementById('video-player');
const src = document.getElementById('src')
let currentVideoIndex = 0;
let selectedVideos = [];
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const playButton = document.getElementById('b5');
const save = document.getElementById('save')

const scr = document.getElementById('scr')
const curs = document.getElementById('curs')

b2.addEventListener('click', bw)
b3.addEventListener('click', fw)
b4.addEventListener('click', sup)
save.addEventListener('click', 'saving')

let cur_ind = 0
let len = 0
let ids

const videos = [
  { src: './clips/equilibre.mp4', title: '1: equilibre' },
  { src: './clips/pasdebourre.mp4', title: '2: pas de bourre' },
  { src: './clips/pirouette.mp4', title: '3: pirouette' },
  { src: './clips/rouladed.mp4', title: '4: roulade a droite' },
  { src: './clips/rouladeg.mp4', title: '5: roulade a gauche' },
  { src: './clips/sautdechat.mp4', title: '6: saut de chat' },
  { src: './clips/triplette.mp4', title: '7: triplette' },
];

playButton.addEventListener('click', () => {
  currentVideoIndex = 0;
  playCurrentVideo();
});


videos.forEach((video, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.id = `video-${index}`;
  button.value = index;
  button.textContent = video.title;

  videoList.appendChild(button);

  button.addEventListener('click', () => {
    selectedVideos.splice(cur_ind, 0, video); 

    a = scr.textContent
    cur_ind += 1
    //scr.textContent = a.slice(0, cur_ind) + (Number(button.value)+1) + a.slice(cur_ind)
    
    b = a.split('')
    b.splice(cur_ind - 1,0,Number(button.value)+1)
    console.log(b)
    scr.textContent = b.join('')
    len += 1
    deco()
  });
});

function playCurrentVideo() {
  if (currentVideoIndex < selectedVideos.length) {
    videoPlayer.src = selectedVideos[currentVideoIndex].src;
    videoPlayer.play();
  } else {
    // Fin de la liste de lecture
   console.log("Fin de la liste de lecture");
  }
}

videoPlayer.addEventListener('ended', () => {
  currentVideoIndex++;
  playCurrentVideo();
});



function deco(){
    ids = Array(len).fill('_') 
    ids[cur_ind - 1] = '^' 
    curs.textContent = ids.join('') 
}

function aj(){
    a = scr.textContent
    scr.textContent = a.slice(0, cur_ind) + this.value + a.slice(cur_ind)
    cur_ind += 1
    len += 1
    deco()
}

function bw(){
    if (cur_ind > 1){cur_ind -= 1}
    deco()
}

function fw(){
    if (cur_ind < len){cur_ind += 1}
    deco()
}

function sup(){
  console.log(selectedVideos)
  selectedVideos.splice(cur_ind - 1, 1)
  console.log(selectedVideos)
  a = scr.textContent
  scr.textContent = a.slice(0, cur_ind-1) + a.slice(cur_ind)
  len -= 1
  if (cur_ind > len){
    cur_ind = len
  }
  if (cur_ind < 1){
    cur_ind = 1
  }
  if (len === 0){
    cur_ind = 0
  }
  deco() 
}

function saving(){
  fetch('composer');
  return;
}
