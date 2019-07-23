exports.createPost = (req,res,next) => {
	let {userid,content} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let posts = db[key].posts.data;
		let postid = posts.length+1;
		posts.push({userid,postid,content});
		res.send(posts);
	});
	next();

}

exports.addComment = (req,res,next) => {
	let {userid,postid,comment} = req.body;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let comments = db[key].comments.data;
		let commentid = comments.length+1;
		comments.push({userid,postid,commentid,comment});
		res.send(comments);
	});
	next();
}

exports.getPost = (req,res,next) => {
	let postid = req.params.postid;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let posts = db[key].posts.data;
		let myposts = posts.find(val => parseInt(val.postid) === parseInt(postid));
		res.send(myposts);
	});
}

exports.getPosts = (req,res,next) => {
	let userid = req.params.userid;
	let db = req.app.get('db');
	Object.keys(db).map(key=>{
		let posts = db[key].posts.data;
		let myposts = posts.filter(val => parseInt(val.userid) === parseInt(userid));
		res.send(myposts);
	});
	next();
}