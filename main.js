function postreq () {

	console.log("function called");

	var ajax = new XMLHttpRequest ();

	ajax.open("POST", "upload", true);

	ajax.send();

	ajax.onreadystatechange = function () {

		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
		}
	}

}

function sidebaranim () {

	var element = document.getElementById("sidebar");

	if (element == null) {

		sidebarhide();
	}

	else {

	element.id = "sidebaractive";

	}

}

function sidebarhide () {

	var element = document.getElementById("sidebaractive");

	element.id = "sidebar";

	element.onclick = function () {sidebaranim ();};

}