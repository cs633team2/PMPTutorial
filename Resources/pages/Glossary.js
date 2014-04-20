function Glossary(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var GlossaryWindow = Titanium.UI.createWindow({
		title: "Glossary",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var glossaryTopLabel = Ti.UI.createLabel({
	    text : "Uses the following industry standard project management dictionary terms:",
	    top : 15,
		color: "#000",
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "11dp", fontWeight: "bold"
		},
	});
	GlossaryWindow.add(glossaryTopLabel);
	
	//Add a table of tours to the app
	var glossaryItems = [
		{
			title: "Acceptance Management",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			},
			//hasChild: true,
			//className: "tableRow"
		},
		{
			title: "The process by which deliverables produced by a project are reviewed and accepted by the customer.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: "Acceptance Planning",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
				fontWeight: "bold"
			}
		},
		{
			title: "The process of identifying and scheduling a suite of tests to measure the completion of project deliverables against stated criteria.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: "Activity",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
				fontWeight: "bold"
			}
		},
		{
			title: "A group of tasks undertaken to produce a tangible project deliverable.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}			
		},
		{
			title: "Business Case",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
				fontWeight: "bold"
			}
		},
		{
			title: "A document outlining the justification for initiation of a project. It includes a description of the business problem or opportunity, a list of alternative solutions, their costs and benefits and a recommended solution for implementation.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: "Change Management",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			}
		},
		{
			title: "A group of tasks undertaken to produce a tangible project deliverable.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}			
		},
		{
			title: "Communications Management",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			}
		},
		{
			title: "The process of identifying,creating,reviewing and distributing communications messages to stakeholders.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}			
		},
	   {
			title: "Communications Planning",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			}
		},
		{
			title: "The process of identifying the information needs of project stakeholders and scheduling communications activities to meet those needs within the project.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}			
		},
		{
			title: "Cost Management",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp", fontWeight: "bold"
			}
		},
		{
			title: "The process of monitoring and controlling the costs incurred within a project, through the completion and approval of expense forms.",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}			
		},
	];

	var glTableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: glossaryItems
	});
	GlossaryWindow.add(glTableView);

	/*var glossaryHeaderLabel = Ti.UI.createLabel({
	text : "Acceptance Management",
	    top : 50,
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "10dp",
			fontWeight: "bold"
		},
	});
	GlossaryWindow.add(glossaryHeaderLabel);
	
	var glossaryLabel = Ti.UI.createLabel({
	text : "The process by which deliverables produced by a project are reviewed and accepted by the customer."
	+"\n <b>Acceptance Planning</b>"
	+"\n The process of identifying and scheduling a suite of tests to measure the completion of project deliverables against stated criteria."	,
	    top : 80,
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "11dp"
		},
	});
	GlossaryWindow.add(glossaryLabel);*/
	return GlossaryWindow;
}

module.exports = Glossary;