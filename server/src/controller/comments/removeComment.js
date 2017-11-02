import express, { Router } from 'express';
import Comment from '../../model/commentSchema';

const router = Router();

// REMOVE ONE COMMENT
router.get('/:commentId/removeComment',
  (req, res) => {
    Comment.findByIdAndRemove(req.params.commentId, err => {
      err ? res.send(err) : res.redirect('http://localhost:3000/');
    });

});

export default router;
