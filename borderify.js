const list1 = document.getElementsByClassName("r"); //Get All Google Search Results


for(i=0; i<list1.length; i++){ //iterate.
list1[i].style.background = "red"; // Change the background to red
list1[i].innerHTML += "<img src='https://media.discordapp.net/attachments/483662916449468418/484371509058600980/border-48.png'>" //Add the warning
}

const list2 = document.getElementsByClassName("rg_ic rg_i"); //Get all google images
for(i=0; i<list2.length; i++){ //iterate.
list2[i].src="https://media.discordapp.net/attachments/483662916449468418/484359949703577632/6006.png?width=994&height=560" //Swap image with generic blur
}