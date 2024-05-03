//function checkPassword() {
//    var password = document.getElementById('passwordInput').value;
    // Replace 'your_password' with the actual password
  //  if (password === 'suckandfuck') {
      
        // Zoom out the popup
    //    var popup = document.getElementById('popup');
     //   popup.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
       // popup.style.transform = 'scale(0.5)';
     //   popup.style.opacity = '0';
     //   setTimeout(function() {
     //       popup.style.display = 'none';
     //       // Fade out the black screen
     //       blackScreen.style.transition = 'opacity .3s ease'; // Adjust the transition duration
      //      blackScreen.style.opacity = '0';
       //     setTimeout(function() {
   //             blackScreen.parentNode.removeChild(blackScreen);
    //        }, 1000); // Adjust the timeout to match the transition duration
//        }, 500); // Adjust the timeout to match the transition duration
 //   } else {
 //       alert('Incorrect password. Please try again.');
  //  }
//}


//document.getElementById('passwordInput').addEventListener('keyup', function(event) {
  //  if (event.keyCode === 13) {
    //    event.preventDefault();
      //  checkPassword();
   // }
// });



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
