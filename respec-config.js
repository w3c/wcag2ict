var respecConfig = {
	noRecTrack: true,
	tocIntroductory: true,
	specStatus: "ED",
	
	shortName: "wcag2ict",
	
	//publishDate:  "",
	copyrightStart: "2022",
	license: "document",
	
	//previousPublishDate:  "",
	//previousMaturity:  "WD",
	prevRecURI: "https://www.w3.org/TR/wcag2ict/",
	
	// if there a publicly available Editors Draft, this is the link
	edDraftURI: "https://w3c.github.io/wcag2ict/",
	
	editors:[ {
		name: "Mary Jo Mueller",
		mailto: "maryjom@us.ibm.com",
		company: "IBM",
		companyURI: "https://www.ibm.com/",
		w3cid: 46880
	},{
		Name: "Chris Loiselle",
		company: "Oracle Corporation",
		companyURI: "http://www.oracle.com/",
		w3cid: 65246
	},{
		name: "Phil Day",
		company: "NCR",
		companyURI: "http://www.ncr.com/",
		w3cid: 139781
	}
],
	//authors:  [
	//    { name: "Your Name", url: "http://example.org/",
	//      company: "Your Company", companyURI: "http://example.com/" },
	//],
	
	/*
	 alternateFormats: [
	 { uri: 'wcag21-diff.html', label: "Diff from Previous Recommendation" } ,
	 { uri: 'wcag21.ps', label: "PostScript version" },
	 { uri: 'wcag21.pdf', label: "PDF version" }
	 ],
	 */
	group: "ag",
	github: "w3c/wcag2ict",
	
	maxTocLevel: 4,
	
	localBiblio: {
		"HARDING-BINNIE": {
      		"authors": [
      			"Harding G. F. A.",
      			"Binnie, C.D."
      		],
      		"date": "2002",
      		"title": "Independent Analysis of the ITC Photosensitive Epilepsy Calibration Test Tape"
      	},
      	
      	"IEC-4WD": {
      		"date": "May 5, 1998",
      		"title": "IEC/4WD 61966-2-1: Colour Measurement and Management in Multimedia Systems and Equipment - Part 2.1: Default Colour Space - sRGB",
      	}
	}
};
