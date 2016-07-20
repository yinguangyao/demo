function play68_init() {
	updateShare(0);
}
function updateShare(score) {
	var descContent = "方块英雄";
	
		if(score > 0)
			shareTitle = "我玩了" + 1000 + "分，据说能玩到100分的人都是神！";
		else
			shareTitle = "据说能玩到100分的人都是神！";

	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}
