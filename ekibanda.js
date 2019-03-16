function nowTime() {
	var time = new Date();
	var hrs = time.getHours();
	var mins = time.getMinutes();
	var secs = time.getSeconds();

	if (hrs < 10 ) { hrs = "0" + hrs;}
	if (mins < 10 ) { mins = "0" + mins;}
	if (secs < 10 ) { secs = "0" + secs;}

	document.getElementById('time').innerHTML = hrs + " : " + mins + " : " + secs;
}

setInterval(nowTime, 1000);

/*this is for search*/
function search() {
	alert("Hi dear!  we are Sorry but this automatic search is currently not working.\n Please We request you to find what you're looking for just manually if it's available and this is for a while.\nThank you for using Ekibanda Butereevu!.");
}