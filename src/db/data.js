const games = [
	{
		id: 1,
		name: "Sniper 2",
		rating: "8.6 / 10 ",
		category: "Action",
		img: "https://s3-alpha-sig.figma.com/img/e2d9/711b/a6f5d7a71a54d3b57d70ff7b677a5c9a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EL0o15zj1OzPLP-QiuPdmUAvC3IXtw-55xkpw00XkWIYlJWUA4A7lrlx1ONLkdTD40057r4mvjuuR0RTOlrrJCBnktVQ8fYNUOGZjEbdG0Jdh5Xl8ISQyIp4p5~4SKQXinBqdmBnFV7gU1qgyeaVxUebsUIr0sAHWyBw1esegXL3w3wP3xfL~x4aif6nXYgH6ryBkbDSZyT~KH1TZ2DSLyqHMLn0mHn9iBStK3~tZ5pa88uUIybUJojtEIHviwqVNy6FDWxGViYVzUh7SehyOYbT~2y7FTZ7UNLW2nHE~lZTFHDnhS-f3gVMXQK38Ga98GjAWfP-GaSt~rq79NDVxw__",
	},
	{
		id: 2,
		name: "Motor Race",
		rating: "8.6 / 10 ",
		category: "Racing",
		img: "https://s3-alpha-sig.figma.com/img/ef07/b841/7fb09d758f99d1f8b0b227e288fc4a73?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPU3CVXvmly7lVZdeWyIifQPGRymkYPvQVnpFuqafmVPIwpfVgGe7cBtE~ECNelPZ8kQyXNShPXro0lUrO900M2m1uEHjPJkI39Zauxu15i1yT4Kcn1e-qeTavkJHywdgboPgZjDFAc~TI0jUCCdb4f60jVP~TO76e2IZrLyDFKCJs6lGTQao~3KfeNI6qmoAYH4vzxNRHFxK3ff0A6BqTg~F8qs~AIcZ~MPLQCMmqo-cXsz3fDNoEA3E60wIt9EzjHmwo8q8FWxhd0dVxkUreXKZq3DRuA3nUBeW1-AEXvZ7yjMsoShKf6zctJEulwMpsa4bVrzWWVAnhenqh032A__",
	},
	{
		id: 3,
		name: "The Witcher 3",
		rating: "10 / 10 ",
		category: "Rpg",
		img: "https://s3-alpha-sig.figma.com/img/cd77/9a78/a8b3ad8a1715432072351ca3019e6f6a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7LLePgatnpywQlDrG9wA5ydor2DKPYtckIZImiv3GBbGZKAbckb3H~rUcJ6u57oYDRn-0hZv-ZK~zxAyKW7HPBsnFasdzOs6LWUIrmxWMqlIBlikEK9ArbtKldaZkJSJ0wracpXvJQx4NdUfZp~omh4QFCG-gvbfNAwEUjs24UBEH9YNt6P02bUiwvUcJMvS6PFxCYrNfSReDKpAN9nmydFNdc40l6vAIQCSGOPnOAjnwvo3nmXQp1wnrF9yfczf2AppmvNtSCdUfpTqkP8R6RgPdgHM2vrlrOu7sL38JOupxzfp3oSQQ~QLgN21fsjIMC1A6x44A8ww0yyA9yp3Q__",
	},
	{
		id: 4,
		name: "PUBG",
		rating: "5.6 / 10 ",
		category: "Bottle Royal",
		img: "https://s3-alpha-sig.figma.com/img/4af7/edc9/0ae6d03f0c8a71e4497fc5f31f5d7d45?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JF60nCmKubRd6pHTvZBxiwALvMgD~BWj8X1FUAsAbculrmLexLlSVu3iH0UbmDdBNYpvy-BknmXhHQ706u4HM-QUmtjLttdCmbQHHHmohwdTz1zlMkUCy3l4FxyOkjqq1vwKIrTi9JzOcFapIohVWQyOf~iffFRqqWaYkLTGsj41CmEXHoEX8N5aJbqa4Y251OCd2~GisIg3VSEoRCXrKGnIEc2fDb3nW1FlJK4lRr8Bvp9a7Si4NXrYYL23X6PCH-jivSi53Q~ISOi-YSOmN6MUHg7knmlKWuYd8MqKMci8bwMymQHiI2TEpiciCJiwPr6SKWnOQKIeOM4clxHZPg__",
	},
	{
		id: 5,
		name: "Ghost of Tsushima",
		rating: "9.6 / 10 ",
		category: "Rpg",
		img: "https://s3-alpha-sig.figma.com/img/e802/1458/ebe6c0e11a17f9bdcf010f787177714f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSzpkZfM9YzQQaMjgtyydSw1lgq0zHYY2AA3RvExSOqOGAq3V4FRqMJH6MP0BIQS6hLBkPP~FRUO9GJGuAYbDO2wImwdl9u4aRBtpuwIsFi2-CVPpkRuLcmw7pX~RxjNyFX3YaCMF5sNBxh1I9yOya9Atxazu647CvSozRhh6w9G3quch0PfXF7IBJDyuUUUjU0NdhB-IQwpudKhmRxUK-0DC0QxGYJxQ5gKIok41mvoiBwBJhOT2kdcwboraOfXn-MySUQARAdmiNtPva4zBkbSOh0PvHl4vSD1yHIFA9RF87X9rZSXhGNcL~uhiuNSu2rnKtguuCOyf-qG96k-Ag__",
	},
	{
		id: 6,
		name: "Free Fire",
		rating: "3.6 / 10 ",
		category: "Bottle Royal",
		img: "https://s3-alpha-sig.figma.com/img/5bca/f974/6b94d62088850bae67b01fc804692f53?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qE1UNM2hlKyataGm~KDQ7NAdJ5GRUwFQxNjFRujc57da4V7Rz7h6YVec4UELhKc1Z75edNqYeOdkmmvGP2A~FbsKnm3Z73-OlD7NPbBk8uyhRKidihAW9SzQVth5lO~n35eTuqPji~dXZ~sYpt2opm4c-95obr9MgvZWK~pE63uddUnG-~vlyb38eVTBqOQIZaLW-uCRbTP4-t~qS3G6ds0cFWa~3LspE2BQrkxQ3jx99DEcJvwUAE4dtlJ1tBhR6OjyEw5IwuxyhvCjyGN4e35pvfDhvejUJyyXDVuAJZZWZ~fGeXHYI-hNSSETmQM-z-czjdm-oulcSwhJ447veA__",
	},
];

export { games };
