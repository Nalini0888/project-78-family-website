 var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "dad.JPG", "mom.jpg","Grandies.jpg", "srikutty.jpg", "bro.jpg"];
 var names = ["Fmaily Book", "J.Nagulan", "B.Vasantha", "My grandies", "My lil princess", "My bro"];
 var i = 0;

 function update() {
     i++;
     var numbers_of_family_member_in_array = 6
     if (i > numbers_of_family_member_in_array) {
         i = 0;
     }
     var updatedImage = images[i];
     var updatedName = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
 }
