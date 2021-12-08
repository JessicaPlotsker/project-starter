const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'AniLib',
    description: 'An application that let users find anime titles in nearby libraries.',
  });
});


module.exports = router;