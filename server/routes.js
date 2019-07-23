const router = require('express').Router();
const PostController = require('./PostController');
const UserController = require('./UserController');

const def = (req,res,next) => {
	res.send("API: /api/{options (e.g /api/create/user)}")
}

const debug = (req,res,next) => {
	res.status(200).json(req.app.get('db'))
}

router.route('/').get(def);
router.route('/create/user').post(UserController.createUser);
router.route('/create/post').post(PostController.createPost);
router.route('/create/comment').post(PostController.addComment);
router.route('/user/profile').post(UserController.getProfile);
router.route('/user/profile').patch(UserController.updateProfile);
router.route('/user/:userid/posts').get(PostController.getPosts);
router.route('/posts/:postid').get(PostController.getPost);

router.route('/debug').get(debug);

module.exports = router;
