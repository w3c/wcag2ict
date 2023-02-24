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
	
	editors: [
		{
			name: "Mary Jo Mueller",
			mailto: "maryjom@us.ibm.com",
			company: "IBM",
			companyURI: "https://www.ibm.com/",
			w3cid: 46880,
		},
		{
			name: "Chris Loiselle",
			mailto: "chris.loiselle@oracle.com",
			company: "Oracle Corporation",
			companyURI: "http://www.oracle.com/",
			w3cid: 65246,
		},
		{
			name: "Phil Day",
			mailto: "phil.day@ncr.com",
			company: "NCR",
			companyURI: "http://www.ncr.com/",
			w3cid: 139781,
		}
	],
	
	formerEditors: [
		{
			name: "Michael Cooper",
			company: "W3C",
			companyURI: "http://https://www.w3.org/",
		},
		{
			name: "Peter Korn",
			company:"Amazon",
			companyURI: "https://www.amazon.com/",
			
		},
		{
			name: "Andi Snow-Weaver",
			company: "IBM",
			companyURI: "http://www.ibm.com/",
		},
		{
			name: "Gregg Vanderheiden",
			company: "Invited Expert, Trace Research and Development Center",
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
	
	postProcess: [fetchWcagInfo],
	
	localBiblio: {
		"HARDING-BINNIE": {
      		"authors": [
      			"Harding G. F. A.",
      			"Binnie, C.D."
      		],
      		"date": "2002",
      		"title": "Independent Analysis of the ITC Photosensitive Epilepsy Calibration Test Tape"
      	},
			"UNDERSTANDING-WCAG22" : {
			"title": "Understanding Web Content Accessibility Guidelines 2.2",
			"href": "https://www.w3.org/WAI/WCAG22/Understanding/",
			},
			"WCAG22-TECHS": {
				"title": "Techniques for WCAG 2.2",
				href: "https://www.w3.org/WAI/WCAG22/Techniques/",
			},
   	"IEC-4WD": {
      		"date": "May 5, 1998",
      		"title": "IEC/4WD 61966-2-1: Colour Measurement and Management in Multimedia Systems and Equipment - Part 2.1: Default Colour Space - sRGB",
      	},
	},
};
