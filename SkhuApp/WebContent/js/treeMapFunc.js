$(function() {
	showNews();
});

var data = [ [ 8, 4, 4 ], // 정치
[ 9, 8, 7 ], // 경제
[ 10, 6, 3 ], // 스포츠
[ 12, 6, 5 ], // 해외
[ 10, 10, 3 ], // 해외
[ 6, 5, 3 ] // IT기술
];

var labels = [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ],
		[ 1, 1, 1 ] ];

var winX = $("#example-2").width();// 360;
var winY = $("#example-2").height();// 600;

var sizeOfHeader = 44;
var category = 0;
var article;

window.onresize = function(event) {
	showNews();
	$("#mainScreen").css("height", window.innerHeight - sizeOfHeader);
};

function showArticles(index) {
	// ajax로 갖고올것.
	article = {};
	switch (category) {
	case 0:// 경제일때
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 1:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 2:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 3:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 4:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 5:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	case 6:
		article.title = D.economy[index][0];
		article.contents = D.economy[index][1];
		break;
	default:
		article.title = D.economy[index][0];
	article.contents = D.economy[index][1];
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
