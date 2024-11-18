const { v4: uuidv4 } = require('uuid');

exports.getHome = async (req, res) => {
	res.render('layouts/'+((req.useragent.isMobile) ? 'mobile' : 'desktop')+'/home', {
		title: 'Home Page',
		page: 'home',
		uniqid: uuidv4,
		styles: [
			'main'
		]
	});
};
