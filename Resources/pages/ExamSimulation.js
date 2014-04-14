function ExamSimulation(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var esWindow = Titanium.UI.createWindow({
		title: "Exam Simulation",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		navBarHidden: false,
		tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	    text : "Exam Simulation",
	    top : 5,
		color: "#000",
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "11dp", fontWeight: "bold"
		},
	});
	esWindow.add(headerLabel);
	
	
	
	var webview = Ti.UI.createWebView({
     url: "/html/examSimulation.html",
     height: Ti.UI.FILL,
     enableZoomControls: false
   });
	esWindow.add(webview);
	
	
	//Add a table of tours to the app
	/*var qaItems = [
		{
			title: "Q1 Which of the following is a tool used to secure expert judgment?",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			},
		},
		{
			title: "A. Peer review",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		];

	var tableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: qaItems
	});
	esWindow.add(tableView);*/

	
	return esWindow;
}

module.exports = ExamSimulation;