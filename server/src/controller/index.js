import express, { Router } from 'express';

import addArticle from './articles/addArticle';
import getAllArticles from './articles/getAllArticles';
// import getOneArticle from './articles/getOneArticle';
import editArticle from './articles/editArticle';
import removeArticle from './articles/removeArticle';

import addComment from './comments/addComment';
import editComment from './comments/editComment';
import removeComment from './comments/removeComment';

const router = Router();

router.use(addArticle);
router.use(getAllArticles);
//router.use(getOneArticle);
router.use(editArticle);
router.use(removeArticle);

router.use(addComment);
router.use(editComment);
router.use(removeComment);

export default router;
