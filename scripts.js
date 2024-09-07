var pagenum = 0;

const images = [
	"url(front.jpg)",
	"url(page1.jpg)",
	"url(page2.jpg)"
]

function pagenext() {
	if (pagenum == 2) {
		return;
	}

	pagenum++;

	document.body.style.backgroundImage = images[pagenum]
}

function pageback() {
	if (pagenum == 0) {
		reutrn;
	}

	pagenum--;

	document.body.style.backgroundImage = images[pagenum]
}
