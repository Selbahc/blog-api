import express, { Router } from 'express';
import Article from '../../model/articleSchema';

const router = Router();

// GET ONE ARTICLE WITH COMMENTS
router.get('/:articleId', (req, res) => {
  Article.findById(req.params.articleId)
    .populate('comments')
    .exec((err, article) => {
      if (err) return res.send(err);
      res.json(article);
    });
});

export default router;
