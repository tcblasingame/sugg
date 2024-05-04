var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



document.addEventListener("DOMContentLoaded", function() {
    var coll = document.querySelector(".collapsible");
    var content = document.querySelector(".content");
    var video = document.getElementById("videoStream");

    coll.addEventListener("click", function() {
        this.classList.toggle("active");
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            // Stop video playback
            video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            // Start video playback
            video.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    });
});

var overrideNative = false;

var player = videojs('game1', {
	html5: {
    hls: {
      overrideNative: overrideNative
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative
  }
});
player.play();

var player = videojs('game2', {
	html5: {
    hls: {
      overrideNative: overrideNative
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative
  }
});
player.play();

var player = videojs('espn', {
	html5: {
    hls: {
      overrideNative: overrideNative
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative
  }
});
player.play();


var player = videojs('tnt', {
	html5: {
    hls: {
      overrideNative: overrideNative
    },
    nativeVideoTracks: !overrideNative,
    nativeAudioTracks: !overrideNative,
    nativeTextTracks: !overrideNative
  }
});
player.play();