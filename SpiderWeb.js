const search = document.getElementsByClassName("rc"); //Get All Google Search Results
var badsites = ["www.dailymail.co.uk","elite360options.com","etorooption.com","escoptions.com","eurous.net","equitytrade24.com","binarycent24.com","fairtradeoption.com","first-options.org","fixtradeoption.com","fxcryptomine.com","fxcmoptions.com","fxtradeoption.com","fxtradesmart.com","fxtrade11.com","fxtrade247.com","favoritefxtrading.com","favouriteoptions.com","fluxbtc.com","gain24option.com","greenerforex.com","hightradebn.com","heightoption.com","istockoptions.com","iqtradeopt.com","iqtradeoption.com","iq-tradeoption.com","ingeniousplc.com","kin-capital.com","xtrefinance.com","nixoption.com","optionbrix.com","optionlevel.com","optiondailytrade.com","optimal-options.com","oneteloption.com","10tradeoption.com","24empiresoption.com","24optionflow.com","24optionbn.com","24cryptofx.com","24optiononline.com","24livetrade.com","24suretrade.com","24tradeoption.com","24trade2win.com","247tradeoption.com","24traderush.com","247optionstrade.com","360tradebay.com","32koptions.com","49option.com","queueoption.com","paceoptions.com","pottalfinance.com","plustradeoption.com","premium-options.com","profit360options.com","procrypton.com","redbnoptions.com","savingsoption.com","safetradeoption.com","smartoptioners.com","smartoptionbn.com","speedoptions.co","springstrade.com","socialprofimatic.com","smartnationfx.com","swiftoptiontrader.com","swing-options.com","traceoption.com","trade-option.org","tradeoptions.live","tradeoptionbn.com","tradeoption24.net","tradeopture.com","tradelyn.net","traderushinvestment.com","trade2winoptions.com","tradewayop.com","traderschoiceoption.com","trade360option.com","Trustedoption.net","perfectrades.com","massiveopt.com","maxtradeoptions.com","Multicoins.co","morgansinvestment.com","nationoption.com","pavetrade.com","ultimatepayoption.com","zedoption.com","zukoptions.com"]; //List of bad sites seperated by comma

for(i=0; i<search.length; i++){ //iterate.
try { //Deal with googles inconsistent URL formatting
//alert(new URL(search[i].getElementsByClassName("s")[0].getElementsByClassName("f hJND5c TbwUpd")[0].getElementsByClassName("iUh30")[0].innerHTML).hostname);
if(badsites.includes(new URL(search[i].getElementsByClassName("s")[0].getElementsByClassName("f hJND5c TbwUpd")[0].getElementsByClassName("iUh30")[0].innerHTML).hostname)){ //find search results on the ban list
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].style.background = "red"; // Change the background to red
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].innerHTML += "<img src='https://media.discordapp.net/attachments/483662916449468418/484371509058600980/border-48.png'>"; //Add the warning
}
}
catch(err){ //Deal with googles inconsistent URL formatting
if(badsites.includes(search[i].getElementsByClassName("s")[0].getElementsByClassName("f hJND5c TbwUpd")[0].getElementsByClassName("iUh30")[0].innerHTML.split('/')[0])){ //find search results on the ban list
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].style.background = "red"; // Change the background to red
search[i].getElementsByClassName("r")[0].getElementsByTagName("a")[0].innerHTML += "<img src='https://media.discordapp.net/attachments/483662916449468418/484371509058600980/border-48.png'>"; //Add the warning
}
}
}
const image = document.getElementsByClassName("rg_l"); //Get all google images
for(i=0; i<image.length; i++){ //iterate.
//alert(image[i].getElementsByClassName("rg_ilmbg")[0].innerHTML.split("-")[1].trim());
if(badsites.includes(image[i].getElementsByClassName("rg_ilmbg")[0].innerHTML.split("-")[1].trim())){ //Identify images from urls on the ban list
image[i].getElementsByClassName("rg_ic rg_i")[0].src="https://media.discordapp.net/attachments/483662916449468418/484359949703577632/6006.png?width=994&height=560" //Swap image with generic blur
}
}

//News Removal

const NewsTitle = document.getElementsByClassName("e2BEnf"); 
const ExtraNews = document.getElementsByClassName("rSr7Wd");
const MainNews = document.getElementsByClassName("mJVYJe r-iUhuHGnRXZr8"); 
const MoreNews = document.getElementsByClassName("CMLaue mIKy0c"); 
const FinalNews = document.getElementsByTagName("g-section-with-header"); 
for(i=0; i<NewsTitle.length; i++){
	NewsTitle[i].innerHTML = "";
}
for(i=0; i<ExtraNews.length; i++){
	ExtraNews[i].innerHTML = "";
}
for(i=0; i<MainNews.length; i++){
	MainNews[i].parentNode.removeChild(MainNews[i]);
	MainNews[i].innerHTML = "";
}
for(i=0; i<MoreNews.length; i++){
	MoreNews[i].innerHTML = "";
}
for(i=0; i<FinalNews.length; i++){
	FinalNews[i].parentNode.removeChild(FinalNews[i]);
}
//Video Removal

const Video = document.getElementsByClassName("BFJZOc");
for(i=0; i<Video.length; i++){
	Video[i].innerHTML = "";
}