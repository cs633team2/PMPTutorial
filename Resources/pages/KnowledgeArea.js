function KnowledgeArea(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var KnowledgeAreaWindow = Titanium.UI.createWindow({
		title: "Knowledge Area",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	
	var headerLabel = Ti.UI.createLabel({
	    text : "These videos are useful for project management preparation",
	    top : 5,
		color: "#000",
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "11dp", fontWeight: "bold"
		},
	});
	
	var webview = Ti.UI.createWebView({
   url: "/html/videos.html",
 });
	KnowledgeAreaWindow.add(headerLabel);
	KnowledgeAreaWindow.add(webview);
	
	
	
	
	
	//Critical Path: (https://www.youtube.com/watch?v=zUUhrT5vIwg)
 //Earned Value Management: (https://www.youtube.com/watch?v=UggTFk2EiUg)

	
	return KnowledgeAreaWindow;
}

module.exports = KnowledgeArea;