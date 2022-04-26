var images = ["family.jpg", "father.webp" , "me.png", "brother.jpg", "mother.png"];
var names = ["Family Book","Rishi Balani", "Devansh Balani", "Tanush Balani", "Richa Balani"];
var i = 0;
function update()
{
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++;
}
