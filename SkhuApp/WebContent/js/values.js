var data = [ [ 8, 4, 4 ], // 경제
[ 9, 8, 7 ], // 정치
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

var categorys={
		now:1,
		economy:1,
		politics:2,
		sports:3,
		japan:4,
		english:5,
		it:6		
};