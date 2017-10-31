import express, { Router } from 'express';
import Comment from '../../model/commentSchema';

const router = Router();

// REMOVE ONE COMMENT
router.get('/:commentId/removeComment',
  express.urlencoded({extended: true}),
  (req, res) => {
    Comment.findByIdAndRemove(req.params.commentId, (err, comment) => {
      err ? res.send(err) : res.redirect('http://localhost:3000/');
    });

});

export default router;
