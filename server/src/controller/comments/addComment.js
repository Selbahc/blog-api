import express, { Router } from 'express';
import Article from '../../model/articleSchema';
import Comment from '../../model/commentSchema';

const router = Router();

// ADD NEW COMMENT
router.post('/:articleId/newComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    // Article.findById(req.params.articleId, (err, article) => {
    //   if (err) return res.send(err);
    //
    //   const newComment = new Comment(req.body);
    //   // Object.assign({article: article._id}, newComment);
    //
    //   newComment.save(err => {
    //     if (err) return res.send(err);
    //
    //     article.comments = [...article.comments, newComment];
    //
    //     article.save(err => err ?
    //       res.send(err) :
    //       res.json({"saved": "Thanks ! Your comment has been saved"})
    //     );
    //   });
    // });
    
    const newComment = new Comment(req.body);

    newComment.save((err, comment) => {
      if (err) return res.send(err);

      Article.findByIdAndUpdate(req.params.articleId,
        { $push: {comments: comment.id} },
        err => err ? res.send(err) : res.json({"saved": "Thanks ! Your comment has been saved"}));
    });
});

export default router;
