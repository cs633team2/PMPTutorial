function Calculator(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var CalculatorWindow = Titanium.UI.createWindow({
		title: "Calculator",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	text : "calculator Details goes here"	
	});
	CalculatorWindow.add(headerLabel);
	
	return CalculatorWindow;
}

module.exports = Calculator;