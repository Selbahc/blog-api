import express, { Router } from 'express';
import Comment from '../../model/commentSchema';

const router = Router();

// EDIT ONE COMMENT
router.post('/:commentId/editComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    Comment.findByIdAndUpdate(req.params.commentId, req.body, (err, comment) => {
      err ? res.send(err) : res.json({"OK" : `Comment '${comment.title}' updated`})
    });
});

export default router;
