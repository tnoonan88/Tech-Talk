const router = require('express').Router();
const { Comment } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        commentBody: req.body.commentBody,
        blogId: req.body.blogId,
        userId: req.body.userId
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
