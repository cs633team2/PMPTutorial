function Formulas(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var formulaWindow = Titanium.UI.createWindow({
		title: "Formulas",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	
	//Add a table of formula to the app
	var formulasList = [
		{
			title: " Schedule Performance Index (SPI) " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
			},
		},
		{
			title: "\t  SPI = EV/PV   \n\t   EV = Earned Value   \n\t   PV = Planned Value " ,
			color: "#000", 
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title:  "  Cost Performance Index (CPI)  ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: "\t  CPI = EV/AC  \n\t  EV = Earned Value \n\t  AC = Actual Cost ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: " Schedule Variance (SV)  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
			},
		},
		{
			title: "\t  SV = EV – PV  \n\t  EV = Earned Value  \n\t  PV = Planned Value " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{ 
			title: " Cost Variance (CV)  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
			},
		},
		{
			title: "\t  CV = EV – AC  \n\t  EV = Earned Value  \n\t  AC = Actual Cost " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
	];

	var formulaTableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: formulasList
	});
	formulaWindow.add(formulaTableView);
	
	
	return formulaWindow;
}

module.exports = Formulas;