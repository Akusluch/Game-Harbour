const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/addReview', withAuth, async (req, res) => {
    try {
      const newReview = await Review.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newReview);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.put('/review/:id', withAuth, async (req, res) => {
  try {
    const updatedReview = await Review.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;