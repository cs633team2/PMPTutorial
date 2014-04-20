function UserStories(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var userStoriesWindow = Titanium.UI.createWindow({
		title: "User Stories",
		backgroundColor: "#FFF",
		//fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		//navBarHidden: false,
		//tabBarHidden: true,
	});
	
	var headerLabel = Ti.UI.createLabel({
	    top : 10,
		color: "#000",
		font:{
			fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
			fontSize: "12dp", 
		},
	    text : "Testing methods and testing activity used in the development process of PMP application will give an overview of testing, release and maintenance involved "	
	});
	userStoriesWindow.add(headerLabel);
	
	//Add a table of user story details to the app
	var userStoryItems = [
		{
			title:"The intended audience for this document:  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp",
			},
		},
		{
			title: "\t   Scrum master (Lead)   \n\t    Development team members   \n\t   Test analyst " ,
			color: "#000", 
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title:  "  Scope   ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "The scope of the testing contained in this document covers the testing needed to ensure that the PMP mobile application functions well in both Android and iOS environments as specified in the application requirements."
			        + "\nTesting processes such as creation of test cases, documentation of defects and creation of testing status reports are explained. ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "\t  Test Plan \n\t  Unit Testing  \n\t  Objective  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp",
			},
		},
		{
			title: "The primary objective of doing Unit testing for the PMP mobile application is to validate that the source code is working as expected. The developers will run the unit tests for the components that they are working on. " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{ 
			title: " Entry Criteria   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp",
			},
		},
		{
			title: "\t  Test cases are reviewed  \n\t  Build is complete and self test done " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "  Exit Criteria   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "\t  All planned test cases are executed  \n\t  Units are working as expected  \n\t  Code defects are fixed and closed  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "  Documenting and reporting defects  " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "Each developer will fix the defects that they find during unit testing. If other modules are blocked by defects found in the process of a developer doing unit testing, these defects will be reported and tracked.   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "   Functional testing   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "The purpose of the Functional testing is to ensure that features within the application meet the functional requirements of the application as outlined in the requirements document, design document and wireframe."
			    + " The test cases for this testing will be designed following the stories listed in the project iteration plan.  "
			    + "\n The app was tested across multiple iOS and Android devices using the emulator tool and also physically tested in our dedicated mobile application testing labs." 
			    + "\n The rest of this document mainly explains how System Testing is performed by the testing team. " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "  Testing Procedure    " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "\t  The steps in testing consist of:    " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "\t  Creation of test cases  \n\t  ● Preparation of a test case document will list the test name, description, steps to test, expected results and pass/fail status. "
 				+ "● Defect documentation  \n\t  ● Defect Report generation " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		/*{
			title: "\t  Exit Criteria   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},
		{
			title: "\t  Exit Criteria   " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "11dp"
			}
		},*/
		 
		 
		 
	];

	var userStoryTableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: userStoryItems
	});
	userStoriesWindow.add(userStoryTableView);
	
	
	return userStoriesWindow;
}

module.exports = UserStories;