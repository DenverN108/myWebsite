//function to hide all images when pressed and to bring all back when pressed again
  $(document).ready(function(){
    $("#hide").click(function(){
      $("img").fadeToggle(3000);
    });
  });

      //chain function to slide up and down when button is pressed
  $(document).ready(function(){
    $("#animation").click(function(){
      $("h1").css("color", "black").slideUp(2000).slideDown(2000);
      $("p").css("color", "black").slideUp(2000).slideDown(2000);
      $("table").css("color", "black").slideUp(2000).slideDown(2000);
      $("ol").css("color", "black").slideUp(2000).slideDown(2000);
      $("body").css("background-color", "white")
    });
  });

      //function to stop all animation
  $( "<button type='button'></button>" )
    .text( "Stop All Animations" )
    .on( "click", function() {
      $( "body *" ).filter( ":animated" ).stop();
    })
    .appendTo( document.body );

    //Create a post/comment section
  var post= document.getElementById("post");
    post.addEventListener("click", function(){
        var commentBoxValue= document.getElementById("comment-box").value;
        var li = document.createElement("li");
        var text = document.createTextNode(commentBoxValue);
        li.appendChild(text);
        document.getElementById("unordered").appendChild(li);
  });

//function to save images for later
var savedImages = [];
function saveForLater(event){
  var tempSave = event.target.previousElementSibling.src;
  console.log(tempSave);

  //creates a folder on local storage to access the items you saved
  if (localStorage.getItem("images")){
    images = localStorage.getItem("images");
    savedImages = JSON.parse(images);
  } else{
    savedImages = [];
  }
  savedImages.push(tempSave)

  localStorage.setItem("images", JSON.stringify(savedImages));
  alert("You have " + savedImages.length +" images saved")
}

//Function to save items to the HTML page and view what you saved

function getSavedItems(){
  var storedItems = JSON.parse(localStorage.getItem("images"));
  var imageList = document.getElementById("imageList");
  imageList.innerHTML = "";
  storedItems.forEach(item => {
    var imageElement = document.createElement("img");
    imageElement.src = item;
    imageList.appendChild(imageElement);
    
  });
}

//function to toggle the "like" button on the images
function imageLike(event){
  if (event.target.style.color == "blue"){
    event.target.style.color = "black";
  }else{
    event.target.style.color = "blue";
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
