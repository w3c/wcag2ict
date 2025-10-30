var respecConfig = {
	noRecTrack: true,
	tocIntroductory: true,
	specStatus: "DNOTE",
	maxTocLevel: 3,
	shortName: "wcag2ict-22",
	
	// publishDate:  "2025-08-21",
	copyrightStart: "2022",
	license: "document",
	
	previousPublishDate:  "2024-11-15",
	previousMaturity:  "NOTE",
	otherLinks: [
		{
			key: "Previous Version",
			data: [
				{
					href: "https://www.w3.org/TR/2024/NOTE-wcag2ict-22-20241115/",
				},
			],
		},
		{
			key: "WCAG2ICT 2.0 W3C Group Note",
			data: [
				{
					href: "https://www.w3.org/TR/wcag2ict-20/",
				},
			],
		},
	],
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
			name: "Phil Day",
			mailto: "phil.day@ncratleos.com",
			company: "NCR Atleos",
			companyURI: "http://www.ncratleos.com/",
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
			name: "Chris Loiselle",
			company: "Oracle Corporation",
			companyURI: "https://www.oracle.com/",
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
	
	postProcess: [postRespec],
	
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
          "ISO_9241-171": {
            "isoNumber": "9241-171",
            "href": "https://www.iso.org/standard/39080.html",
            "title": "Ergonomics of human-system interaction Part 171: Guidance on software accessibility",
            "date": "2008",
            "publisher": "International Standards Organization"
        },
        "ISO/IEC_13066-1": {
            "isoNumber": "13066-1",
            "href": "https://www.iso.org/standard/53770.html",
            "date": "2011",
            "title": "Information technology - Interoperability with assistive technology (AT) Part 1: Requirements and recommendations for interoperability",
            "publisher": "International Standards Organization"
        },
        },
};
