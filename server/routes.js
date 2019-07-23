const router = require('express').Router();
const PostController = require('./PostController');
const UserController = require('./UserController');

const def = (req,res,next) => {
	res.send("Home DIR")
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
router.route('/posts').get(PostController.getPosts);
router.route('/posts/:id').get(PostController.getPost);

router.route('/debug').get(debug);

module.exports = router;
