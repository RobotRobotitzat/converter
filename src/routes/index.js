const express = require('express');
const router = express.Router();

// home
router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Node Web'});
});

module.exports = router;