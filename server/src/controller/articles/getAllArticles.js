import express, { Router } from 'express';
import Article from '../../model/articleSchema';

const router = Router();

// GET ALL ARTICLES WITH COMMENTS
router.get('/', (req, res) => {
  Article.find()
    .populate('comments')
    .exec((err, articles) => {
      err ? res.send(err) : res.json(articles);
    });
});

export default router;
