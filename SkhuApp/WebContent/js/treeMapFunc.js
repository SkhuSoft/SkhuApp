$(function() {
	showNews();

	$("#selectGenre").change(function() {
		switch ($(this).val()) {
		case "economy":
			categorys.now = categorys.economy;
			//$("span")article.title = D.economy[index][0];
			break;
		case "politics":
			categorys.now = categorys.politics;
			break;
		case "sports":
			categorys.now = categorys.sports;
			break;
		case "japan":
			categorys.now = categorys.japan;
			break;
		case "english":
			categorys.now = categorys.english;
			break;
		case "it":
			categorys.now = categorys.it;
			break;
		}		

	});
});

window.onresize = function(event) {
	showNews();
	$("#mainScreen").css("height", window.innerHeight - sizeOfHeader);
};

function showArticles(index) {
	// ajax로 갖고올것.
	article = {};
	switch (categorys.now) {
	case 1:// 경제일때
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 2:
		article.title = D.politics[index][0];
		article.contents = D.politics[index][1];
		break;
	case 3:
		article.title = D.sports[index][0];
		article.contents = D.sports[index][1];
		break;
	case 4:
		article.title = D.japan[index][0];
		article.contents = D.japan[index][1];
		break;
	case 5:
		article.title = D.english[index][0];
		article.contents = D.english[index][1];
		break;
	case 6:
		article.title = D.it[index][0];
		article.contents = D.it[index][1];
		break;
	}
	return article;
}

function showNews() {
	winX = window.innerWidth;
	winY = window.innerHeight - sizeOfHeader;
	$("#example-2").html("");
	Treemap.draw("example-2", winX, winY, data, labels);
	eventAttach();

	for (var i = 0; i < 5; i++) {
		$($("text")[i]).prev("rect").html("<span data-id=" + i + "></span>");
	}
}

function popUp(index) {
	$("#myPanel h2").text(showArticles(index).title);
	$("#myPanel p").text(showArticles(index).contents);
	$("#openPanel").trigger("click");
}
function eventAttach() {
	$("rect").click(function(e) {
		var tempNum = $(this).children("span").attr("data-id");
		popUp(tempNum);
	});
}
