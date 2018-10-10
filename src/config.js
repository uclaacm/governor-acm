export default {
	API_URL: process.env.WEBPACK ? 'http://localhost:8080/app' : '/app',
	CLIENT_ROOT_URL: '',
	facebook: {
		appId: '1356860031017067'
	},
	routes: {
		user: {
			user: '/api/v1/user',
			activity: '/api/v1/user/activity',
		},
		activity: '/api/v1/activity',
		auth: {
			register: '/api/v1/auth/register',
			login: '/api/v1/auth/login',
			resetPassword: '/api/v1/auth/resetPassword',
		},
		events: {
			event: '/api/v1/event',
			past: '/api/v1/event/past',
			future: '/api/v1/event/future'
		},
		attendance: {
			fetch: '/api/v1/attendance',
			attend: '/api/v1/attendance/attend',
		},
		leaderboard: '/api/v1/leaderboard',
	},
	organization: {
		logo: "/assets/images/logo.png",
		logoLight: "/assets/images/logo-white.png",
		loginTileBackground: "/assets/images/login-tile-bg.jpg",
		shortName: "UCLA ACM",
		name: "UCLA Association for Computing Machinery",
		mission: "To create and support an inclusive community for all of those interested in computer science at UCLA and cultivate the next generation of technology leaders by promoting the spirit of innovation, a culture of creativity, and aspiration of entrepreneurship.",
		officers: [
			{
				name: "Yvonne Chen",
				position: "President",
				email: "ycyvonne@ucla.edu",
				picture: "/assets/images/officers/yvonne.jpg"
			},
			{
				name: "Nathan Yang",
				position: "External VP",
				email: "thenathanyang@ucla.edu",
				picture: "/assets/images/officers/nathan.jpg"
			},
			{
				name: "Natasha Kohli",
				position: "Internal VP",
				email: "natashakohli@ucla.edu",
				picture: "/assets/images/officers/natasha.jpg"
			},
			{
				name: "Adit Deshpande",
				position: "President of AI",
				email: "adeshpande3@ucla.edu",
				picture: "/assets/images/officers/adit.jpg"
			},
			{
				name: "Kevin Tan",
				position: "President of Hack",
				email: "ktan17@ucla.edu",
				picture: "/assets/images/officers/kevin.jpg"
			},
			{
				name: "Jeffrey Zhao",
				position: "President of ICPC",
				email: "zhouhengsun@gmail.com",
				picture: "/assets/images/officers/jeffrey.jpg"
			},
			{
				name: "Akshara Sundara",
				position: "President of Cyber",
				email: "akshara.sundar@gmail.com",
				picture: "/assets/images/officers/akshara.jpg"
			},
			{
				name: "Judy Kim",
				position: "Co-President of Studio",
				email: "judyapplekim@gmail.com",
				picture: "/assets/images/officers/judy.jpg"
			},
			{
				name: "CJ Ordog",
				position: "Co-President of Studio",
				email: "cjordog@gmail.com",
				picture: "/assets/images/officers/cj.jpg"
			},
			{
				name: "Caroline Quigg",
				position: "President of ACM-W",
				email: "quiggc@ucla.edu",
				picture: "/assets/images/officers/caroline.jpg"
			},
			{
				name: "Arpi Beshlikyan",
				position: "President of Design",
				email: "aybeshlikyan@ucla.edu",
				picture: "/assets/images/officers/arpi.jpg"
			},
			{
				name: "John Stucky",
				position: "President of Teach LA",
				email: "stuckyj@gmail.com",
				picture: "/assets/images/officers/john.jpg"
			}
		],
		resources: [
			{
				type: "facebook",
				title: "Facebook",
				subtitle: "facebook.com/uclaacm",
				link: "http://facebook.com/uclaacm"
			},
			{
				type: "twitter",
				title: "Twitter",
				subtitle: "twitter.com/uclaacm",
				link: "http://twitter.com/uclaacm"
			},
			{
				type: "github",
				title: "Github",
				subtitle: "github.com/uclaacm",
				link: "http://github.com/uclaacm"
			},
			{
				type: "website",
				title: "Website",
				subtitle: "acm.cs.ucla.edu",
				link: "http://acm.cs.ucla.edu"
			},
			{
				type: "medium",
				title: "Medium",
				subtitle: "tech@ucla",
				link: "https://medium.com/techatucla"
			},
			{
				type: "slack",
				title: "Slack",
				subtitle: "uclaacm.slack.com",
				link: "http://uclaacm.slack.com"
			},
		]
	},
	levels: [
		{ startsAt: 0, rank: "Hello, World!" },
		{ startsAt: 20, rank: "Factorial Fly" },
		{ startsAt: 40, rank: "Exponential Elephant" },
		{ startsAt: 80, rank: "Cubic Chipmunk" },
		{ startsAt: 120, rank: "Quadratic Quokka" },
		{ startsAt: 180, rank: "Linearithmic Lizard" },
		{ startsAt: 240, rank: "Linear Lemur" },
		{ startsAt: 320, rank: "Square Root Sabre-Tooth" },
		{ startsAt: 400, rank: "Logarithmic Lynx" },
		{ startsAt: 500, rank: "Constant Cheetah" },
		{ startsAt: 800, rank: "Extraterrestrial Eagle" },
	],
	majorMap: [ //order of majors are significant
		{
			major: "Ling CS",
			criteria: [
				{ type: "regex", val: /ling.*comp.*sci/ },
				{ type: "regex", val: /ling.*cs/ }
			]
		},
		{
			major: "Ling",
			criteria: [
				{ type: "regex", val: /ling/ }
			]
		},
		{
			major: "Math CS",
			criteria: [
				{ type: "regex", val: /math.*comp/ },
				{ type: "regex", val: /comp.*math/ },
				{ type: "regex", val: /math .*cs/ }
			]
		},
		{
			major: "CS/CSE/CE",
			criteria: [
				{ type: "regex", val: /comp.*sci/ },
				{ type: "regex", val: /^cs$/ },
				{ type: "regex", val: /^cse$/ },
				{ type: "regex", val: /comp.*eng./ }
			]
		},
		{
			major: "EE",
			criteria: [
				{ type: "regex", val: /elec.*eng/ },
				{ type: "regex", val: /^ee$/ }
			]
		},
		{
			major: "Cog Sci",
			criteria: [
				{ type: "regex", val: /cog.*sci/ }
			]
		},
		{
			major: "CS Bio",
			criteria: [
				{ type: "regex", val: /comp.*bio/ },
				{ type: "regex", val: /cs.*bio/ },
			]
		},
		{
			major: "Stats",
			criteria: [
				{ type: "regex", val: /stat/ },
			]
		},
		{
			major: "Math",
			criteria: [
				{ type: "regex", val: /.*math/ }
			]
		},
		{
			major: "Econ",
			criteria: [
				{ type: "regex", val: /econ/ },
			]
		},
		{
			major: "Undeclared",
			criteria: [
				{ type: "regex", val: /undeclared/ },
				{ type: "regex", val: /undecided/ }
			]
		},
		{
			major: "physics",
			criteria: [
				{ type: "regex", val: /physics/ }
			]
		},
		{
			major: "BioE",
			criteria: [
				{ type: "regex", val: /bioe.*/ }
			]
		},
		{
			major: "Biochem",
			criteria: [
				{ type: "regex", val: /bio.*chem/ }
			]
		},
		{
			major: "ChemE",
			criteria: [
				{ type: "regex", val: /chem.*e/ }
			]
		},
		{
			major: "MechE",
			criteria: [
				{ type: "regex", val: /mech.*e/ }
			]
		},
		{
			major: "CivilE",
			criteria: [
				{ type: "regex", val: /civil.*e/ }
			]
		},
		{
			major: "Chem",
			criteria: [
				{ type: "regex", val: /chem/ }
			]
		},
		{
			major: "Neuro",
			criteria: [
				{ type: "regex", val: /neuro/ }
			]
		}
	]
};