function AskExpert(params){
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#000');

    //var tabGroup = Titanium.UI.createTabGroup();

	var AskExpertWindow = Titanium.UI.createWindow({
		title: "Ask Expert",
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
	   text : "  Ask an Expert ",
	});
	AskExpertWindow.add(headerLabel);
	
	//Add a table of tours to the app
	var askExpertItems = [
		{
			title: " What are the personal and professional benefits of PMP Certification? " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
			},
		},
		{
			title: "  Obtaining PMP certification is the best way to prepare to assume greater responsibilities in your job, and show your supervisors that you have the dedication and knowledge to be entrusted with those responsibilities. Also, because the certification process through PMI is so thorough and rigorous, completing the program is a great boost to your self-confidence." ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title:  "  What are the business benefits of supporting PMP Certification? ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: "  Individuals aren’t the only ones who reap the benefits of PMP certification. Companies that support the PMP certification of their employees generally have a more disciplined and knowledgeable workforce. The rigors of the PMP certification process and the requirement that certifications be maintained through continuing education mean that employees who hold this credential will always be aware of the latest developments in the field.  ",
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
		{
			title: " Who Needs PMP Certification the Most? " ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp",
			},
		},
		{
			title: "  While just about anyone working on corporate projects can benefit from the knowledge gained from formal project management training, it can have special appeal for certain individuals based on their career ambitions and job roles. For instance, if you want to advance quickly in the field or secure a position with a large company handling high-budget projects, PMP certification can help you attain those goals." ,
			color: "#000",
			font:{
				fontFamily: (Ti.Platform.osname === "android") ? "Aller_Bd" : "Aller",
				fontSize: "10dp"
			}
		},
	];

	var askExpertTableView = Ti.UI.createTableView({
		top: 80,
		height: Ti.UI.FILL,
		backgroundColor: "transparent",
		data: askExpertItems
	});
	AskExpertWindow.add(askExpertTableView);
	
	return AskExpertWindow;
}

module.exports = AskExpert;