import express, { Router } from 'express';

import Article from '../model/articleSchema';
import Comment from '../model/commentSchema';

const router = Router();

// ADD NEW ARTICLE
router.post('/newArticle',
  express.urlencoded({extended: true}),
  (req, res) => {
    const newArticle = new Article(req.body);

    newArticle.save(err => {
      if (err) return res.send(err);
      res.json({"saved": "Thanks ! Your article has been saved"});
    });
});

// GET ALL ARTICLES
router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) return res.send(err);
    res.json(articles);
  })
});

// GET ALL ARTICLES WITH COMMENTS
router.get('/details', (req, res) => {
  Article.find().populate('comments').exec((err, article) => {
    err ? res.send(err) : res.json(article);
  });
});

// ADD NEW COMMENT
router.post('/:articleId/newComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    Article.findById(req.params.articleId, (err, article) => {
      if (err) return res.send(err);

      const newComment = new Comment(req.body);
      Object.assign({article: article._id}, newComment);

      newComment.save(err => {
        if (err) return res.send(err);

        article.comments = [...article.comments, newComment];

        article.save(err => err ?
          res.send(err) :
          res.json({"saved": "Thanks ! Your comment has been saved"})
        );
      });
    });
});

// REMOVE ONE ARTICLE AND ALL COMMENTS ATTACHED
router.get('/:articleId/removeArticle',
  express.urlencoded({extended: true}),
  (req, res) => {
    Article.findByIdAndRemove(req.params.articleId, (err, article) => {
      if (err) return res.send(err);

      for (let comment of article.comments) {
        Comment.findByIdAndRemove(comment, (error, comment) => {
          if (error) return res.send(error);
        });
      }

      res.redirect('http://localhost:3000/');
    })
});

// REMOVE ONE COMMENT
router.get('/:commentId/removeComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    Comment.findByIdAndRemove(req.params.commentId, (err, comment) => {
      err ? res.send(err) : res.redirect('http://localhost:3000/');
    });

});

// EDIT ONE COMMENT
router.post('/:commentId/editComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    Comment.findByIdAndUpdate(req.params.commentId, req.body, (err, comment) => {
      err ? res.send(err) : res.json({"OK" : `Comment '${comment.title}' updated`})
    });
});

// EDIT ONE ARTICLE
router.post('/:articleId/editArticle',
  express.urlencoded({extended: true}),
  (req, res) => {
    Article.findByIdAndUpdate(req.params.articleId, req.body, (err, article) => {
      err ? res.send(err) : res.json({"OK" : `Article '${article.title}' updated`})
    });
});

export default router;
