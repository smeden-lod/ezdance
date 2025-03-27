const code_chor = document.getElementById('code_chor')
const videoPlayer = document.getElementById('video-player');
const src = document.getElementById('src')

let currentVideoIndex = 0;
let selectedVideos = [];

 const scr = document.getElementById('scr')
 let len = 0
 let ids
const videos = [
  { src: '/clips/equilibre.mp4', title: '1: equilibre', index: '1' },
  { src: '/clips/pasdebourre.mp4', title: '2: pas de bourre', index: '2'  },
  { src: '/clips/pirouette.mp4', title: '3: pirouette', index: '3'  },
  { src: '/clips/rouladed.mp4', title: '4: roulade a droite', index: '4'  },
  { src: '/clips/rouladeg.mp4', title: '5: roulade a gauche', index: '5'  },
  { src: '/clips/sautdechat.mp4', title: '6: saut de chat', index: '6'  },
  { src: '/clips/triplette.mp4', title: '7: triplette', index: '7'  }
];

    a = code_chor.textContent
    b = a.split(''+'-')
    console.log(b)

 
  b.forEach((element) => {
    selectedVideos.push(videos[element-1])
  })

 function playCurrentVideo() {
   if (currentVideoIndex < selectedVideos.length) {
     videoPlayer.src = selectedVideos[currentVideoIndex].src;
     videoPlayer.play();
   } else {
    console.log("Fin de la liste de lecture");
   }
 }

playCurrentVideo()
 videoPlayer.addEventListener('ended', () => {
   currentVideoIndex++;
   playCurrentVideo();
 });
