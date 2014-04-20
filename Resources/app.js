//We'll enclose our code in a self-invoking function to avoid
//inadvertent pollution of the global namespace

(function(){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    var HomePage = require("/pages/Home");
    var ExamSimulationPage = require("/pages/ExamSimulation");
    var KnowledgeAreaPage = require("/pages/KnowledgeArea");
    var AskExpertPage = require("/pages/AskExpert");
    var FormulasPage = require("/pages/Formulas");
    var UserStoriesPage = require("/pages/UserStories");
    var GlossaryPage = require("/pages/Glossary");
    
    
    
	var tabGroup = Titanium.UI.createTabGroup();

	var mainWindow = Titanium.UI.createWindow({
		title: "Project Management Tutorial",
		backgroundColor: "#FFF",
		fullscreen: false,	//[Android: makes the window a "heavyweight" window (thereby allowing the back button to work with it)]
		exitOnClose: true, //[Android: make the application exit if the back button is pressed from the main window]
		navBarHidden: false,
		tabBarHidden: true,
		orientationModes: [ //Denote what orientation modes the window will support (this will follow through to new windows)
			 Ti.UI.LANDSCAPE_LEFT,
			 Ti.UI.LANDSCAPE_RIGHT,
			 Ti.UI.PORTRAIT,
			 Ti.UI.UPSIDE_PORTRAIT
		]
	});
	var tab = Titanium.UI.createTab({
		//icon:'KS_nav_views.png', //Irrelevant; we are hiding the tab bar
		title: (Ti.Platform.osname === "android") ? 'Project Management Tutorial' : "", //Irrelevant; we are hiding the tab bar
		font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "20dp",
				fontWeight: "bold"
			},
		window:mainWindow
	});


	
	//Add a table of tours to the app
	var tours = [
		{
			title: "     Home",
			shortDescription: "Project Management Home page.",
			key : "Home",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/backpackCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "     Exam Simulation",
			shortDescription: "Project Management Exam Simulation page.",
			key : "ExamSimulation",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/calmCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "     Knowledge Area",
			shortDescription: "Project Management page KnowledgeArea",
			key : "KnowledgeArea",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/hotspringsCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "     Ask Expert",
			shortDescription: "Project Management Ask Expert page",
			key : "AskExpert",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/cycleCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "     User's Stories",
			shortDescription: "User Stories Page.",
			key : "UserStories",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/desertCalThumb.png",
			hasChild: true,
			className: "tableRow"
		},
		{
			title: "     Formulas",
			shortDescription: "Project Management Formulas Page.",
			key : "Formula",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/kidsCalThumb.png",
			hasChild: true,
			className: "tableRow",
		},
		{
			title: "     Glossary",
			shortDescription: "Project Management Glossary page.",
			key : "Glossary",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "18dp",
				fontWeight: "bold"
			},
			//leftImage: "/images/natureWatchCalThumb.png",
			hasChild: true,
			className: "tableRow"
		}
	];

	var tableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: tours
	});

	mainWindow.add(tableView);

	function createNewWindow(params){
		var win = Ti.UI.createWindow({
			title: params.title,
			backgroundColor: "#FFF"
		}); 
		var label = Ti.UI.createLabel({
			text: params.shortDescription,
			font: params.font
		});
		win.add(label);
		
		//Fire the click sound
		win.addEventListener("click", function(e){
			Ti.App.fireEvent("clickSound", {caller: "newWindow"});
		});
		return win;
	}

	tableView.addEventListener("click", function(e){
		//Fire the click sound
		Ti.App.fireEvent("clickSound", {caller: "tableRow"});

		var w = createNewWindow({
			title: e.rowData.title,
			shortDescription: e.rowData.shortDescription,
			font: e.rowData.font,
			height: Ti.UI.FILL
		});
		//tab.open(w, {animated: true});
		
		if(e.rowData.key == "ExamSimulation") {
		  var examSimulation = new ExamSimulationPage();
		  tab.open(examSimulation, {animated: true});
		}
		if(e.rowData.key == "Home") {
		  var homePage = new HomePage();
		  tab.open(homePage, {animated: true});
	    }
	    
		if(e.rowData.key == "KnowledgeArea") {
		  var knowledgeArea = new KnowledgeAreaPage();
		  tab.open(knowledgeArea, {animated: true});
	    }
	    
		if(e.rowData.key == "AskExpert") {
		  var askExpert = new AskExpertPage();
		  tab.open(askExpert, {animated: true});
	    }
	    
		if(e.rowData.key == "UserStories") {
		  var userStories = new UserStoriesPage();
		  tab.open(userStories, {animated: true});
	    }
	    
		if(e.rowData.key == "Formula") {
		  var formula = new FormulasPage();
		  tab.open(formula, {animated: true});
	    }
	    
		if(e.rowData.key == "Glossary") {
		  var glossary = new GlossaryPage();
		  tab.open(glossary, {animated: true});
	    }
	});

	//Create handles for the click sound
	var clickSoundFilename = "/media/click";
	clickSoundFilename += (Ti.Platform.osname === "android") ? ".ogg" : ".caf" ;
	//var click = Titanium.Media.createSound({//This is for short sounds (e.g. interface sounds)
		//url: clickSoundFilename,
		//preload: true
	//});
	Ti.App.addEventListener("clickSound", function(e){
		//click.play();
		console.log("click! caller:" + e.caller);
	});

	tabGroup.addTab(tab);

	// open tab group
	tabGroup.open();

})();