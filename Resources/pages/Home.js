function Home(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var homeWindow = Titanium.UI.createWindow({
		title: "Home Page",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	    top : 20,
		color: "#000",
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "11dp", fontWeight: "bold"
		},
	   text : "  PMP Prep Application ",
	});
	homeWindow.add(headerLabel);
	
	//Add a table of tours to the app
	var homeItems = [
		{
			title: "When you earn your Project Management Professional (PMP) you’ll position yourself for the best and most lucrative job opportunities." ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "12dp",
			},
		},
		{
			title: "No matter what industry you choose to work in, PMP certification will be a huge asset as you move forward in your career." ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "12dp"
			}
		},
		{
			title:  "Not only does the credential itself carry prestige, but the skills and knowledge that you develop as you work towards attaining it will help you consistently deliver superior performance.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "12dp"
			}
		},
		{
			title: "This application can help your reach your goals by providing study and learning resources for your PMP exam.  ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "12dp"
			}
		},
	];

	var homeTableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: homeItems
	});
	homeWindow.add(homeTableView);
	
		
	return homeWindow;
}

module.exports = Home;