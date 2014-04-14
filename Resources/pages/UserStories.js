function UserStories(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var UserStoriesWindow = Titanium.UI.createWindow({
		title: "User Stories",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	text : "UserStories Details goes here"	
	});
	UserStoriesWindow.add(headerLabel);
	
	return UserStoriesWindow;
}

module.exports = UserStories;