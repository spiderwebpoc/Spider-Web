const search = document.getElementsByClassName("rc"); //Get All Google Search Results
var badsites=[""]; //List of bad sites seperated by comma

for(i=0; i<search.length; i++){ //iterate.

if(badsites.includes(new URL(search[i].getElementsByClassName("s")[0].getElementsByClassName("f hJND5c TbwUpd")[0].getElementsByClassName("iUh30")[0].innerHTML).hostname)){ //find search results on the ban list
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].style.background = "red"; // Change the background to red
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].innerHTML += "<img src='https://media.discordapp.net/attachments/483662916449468418/484371509058600980/border-48.png'>" //Add the warning
}
}

const image = document.getElementsByClassName("rg_bx rg_di rg_el ivg-i"); //Get all google images
for(i=0; i<image.length; i++){ //iterate.
if(badsites.includes(image[i].getElementsByClassName("rg_ilmbg")[0].innerHTML.split("-")[1].trim())){ //Identify images from urls on the ban list
image[i].getElementsByClassName("rg_l")[0].getElementsByClassName("rg_ic rg_i")[0].src="https://media.discordapp.net/attachments/483662916449468418/484359949703577632/6006.png?width=994&height=560" //Swap image with generic blur
}
}