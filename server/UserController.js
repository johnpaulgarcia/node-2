exports.createUser = (req,res,next) => {
	let {email,password} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let data = db[key].users.data;
		let id = data.length+1;
		data.push({id,email,password});
		createProfile(db[key],id);
		res.send(db);
	})
	next()
}

createProfile = (data,id) => {
	let profile = data.profiles.data;
	profile.push({id,thumbnail: '',about: ''});
}

exports.updateProfile = (req,res,next) => {
	let {id,thumbnail,about} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let profile = db[key].profiles.data;
		profile[id] = {id,thumbnail,about};
	})
	res.send(db);
	next();
	//to update
}

exports.getProfile = (req,res,next) => {
	res.send("Get Profiles");
}