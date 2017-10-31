import express, { Router } from 'express';

import Article from '../../model/articleSchema';

const router = Router();

// EDIT ONE ARTICLE
router.post('/:articleId/editArticle',
  express.urlencoded({extended: true}),
  (req, res) => {
    Article.findByIdAndUpdate(req.params.articleId, req.body, (err, article) => {
      err ? res.send(err) : res.json({"saved" : `Article '${article.title}' updated`})
    });
});

export default router;
