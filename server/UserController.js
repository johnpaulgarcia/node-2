exports.createUser = (req,res,next) => {
	let {email,password} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let data = db[key].users.data;
		let id = data.length+1;
		data.push({id,email,password});
		createProfile(db[key],id);
		res.send(data);
	})
	next()
}

createProfile = (data,id) => {
	let profile = data.profiles.data;
	profile.push({userid:id,thumbnail: '',about: ''});
}

exports.updateProfile = (req,res,next) => {
	let {userid,thumbnail,about} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let profile = db[key].profiles.data;
		let index = profile.indexOf(profile.find(val => val.userid === userid));
		profile[index] = {userid,thumbnail,about};
		res.send(profile);
	})
	next();
	//to update
}

exports.getProfile = (req,res,next) => {
	let {email} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let data = db[key].users.data;
		let find = data.find(val=>val.email === email);
		let id = find.id;
		if(id){
			let profiles = db[key].profiles.data.find(val => val.userid === id);
			res.send(profiles);
		}
		else res.send("No Profile Found!");
	});

	next();
}