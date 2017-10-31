import express, { Router } from 'express';
import Article from '../../model/articleSchema';

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

export default router;
