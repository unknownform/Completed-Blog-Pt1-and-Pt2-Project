var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
const commentController = require('../controllers/commentController');
router.get('/',function(req){
  res.redirect('/article');
});



router.get('/article/add', articleController.renderAddForm);
router.get('/article/:articleId', articleController.displayArticle);
router.post('/article/add',articleController.addArticle);
router.get('/article/:article/edit', articleController.renderAddForm);
router.post('/article/:articleId/edit', articleController.updateArticle);
router.get('/article/:articleId/delete', articleController.deleteArticle);


router.post('/article/:articleId/comment/create', commentController.createComment);
router.post('/comment/:commentId/reply/create', commentController.addReply);
module.exports = router;


