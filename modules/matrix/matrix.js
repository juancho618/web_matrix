const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('matrix test');
});

module.exports = router;