import express, { Router } from 'express';
import Article from '../../model/articleSchema';
import Comment from '../../model/commentSchema';

const router = Router();

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

export default router;
