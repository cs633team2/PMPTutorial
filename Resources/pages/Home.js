function Home(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var homeWindow = Titanium.UI.createWindow({
		title: "Home Page",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	text : "Home Page Details goes here"	
	});
	homeWindow.add(headerLabel);
	
	return homeWindow;
}

module.exports = Home;