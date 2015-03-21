$(function() {
	showNews();
});

var data = [ [ 8, 4, 4 ], //정치
[ 9, 8, 7 ], //경제
[ 10, 6, 3 ], //스포츠
[ 12, 6, 5 ], //해외
[ 10, 10, 3 ], //해외
[ 6, 5, 3 ] //IT기술
];

var test="애플이 인테고(Intego)가 제공하는 안티 바이러스 앱 '바이러스배리어'를 iOS 기기용 앱스토에서 퇴출시켰다.  애플이 iOS 앱스토어에서 안티 바이러스 앱들은 아예 차단시키려는 것 아니냐는 관측도 나오고 있어 주목된다. 인테고는 '바이러스배리어' iOS앱이 애플 앱스토어에서 사라졌다는 내용을 공개했다. 인테고에 따르면 애플은 '바이러스배리어'를 차단하는 것과 관련해 앱스토어에 올라온 앱 설명이 사용자들이 iOS에 바이러스가 있다고 생각하게 할 수 있다는 명분을 내걸었다. 애플의 조치에 인테고는 앱 설명을 다시 작성해 제출했고 애플 임원들을 상대로 바이러스배리어는 이메일 첨부 파일과 클라우드상에 있는 파일을 스캐닝하는 것이라고 강조했지만 상황을 되돌리지는 못했다고 맥루머스닷컴은 전했다. 인테고가 블로그에 올린 글에 따르면 몇몇 회사들의 애플의 이번 결정에 영향을 받은 것으로 전해졌다. 바이러스배리어는 iOS기기를 악성코드 배포를 위한 게이트웨이로 활동하는 것을 막기 위해 개발됐다. 클라우드에 이메일이 첨부되는 파일들에 유해한 것들이 있는지 여부를 검사한다. 애플이 앱스토어에서 다른 안티 바이러스 앱들에 대해서도 퇴출 조치를 내릴 것인지는 확실치 않다. 앱스토어에는 바이러스디텍터와 같은 다수 바이러스 탐지 앱들이 올라와 있다. 맥루머스닷컴은 다른 앱들도 조만간 앱스토어에서 사라질 수 있다고 전해 눈길을 끌었다.";


var labels = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ],
		[ 13, 14, 15 ], [ 16, 17, 18 ] ];
var titles = [ "애플, 앱스토어서 안티바이러스 앱 퇴출?"
               , "이거슨 제목...!"
               , "이거슨 제목...!", "이거슨 제목...!",
		"이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!",
		"이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!",
		"이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", "이거슨 제목...!", ];
var contents = [ test
                 , "우왕 굿...."
                 , "우왕 굿...."
                 , "우왕 굿...."
                 , "우왕 굿....",
		"우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....",
		"우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....", "우왕 굿....",
		"우왕 굿....", "우왕 굿....", ];
var winX = $("#example-2").width();//360;
var winY = $("#example-2").height();//600;

var holdTimer = 0;
var holdTimerCount = 0;

var sizeOfHeader=44;

function showNews() {
	winX = window.innerWidth;
	winY = window.innerHeight-sizeOfHeader;
	$("#example-2").html("");
	Treemap.draw("example-2", winX, winY, data, labels);
	eventAttach();
}

window.onresize = function(event) {
	showNews();
	$("#mainScreen").css("height",window.innerHeight-sizeOfHeader);
};

function clrTimer() {
	holdTimerCount = 0;
	clearInterval(holdTimer);
}
function popUp(index) {
	$("#myPanel h2").text(index + "번 내용입니다. " + titles[0]);
	$("#myPanel p").text(contents[0]);
	$("#openPanel").trigger("click");

}

function eventAttach() {
	$("rect").click(function(e) {
		var tempNum = $(this).next().children("tspan").text();
		popUp(tempNum);
	});
	
}
