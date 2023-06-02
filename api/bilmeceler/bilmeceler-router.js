// değişiklik yapmayın
const router = require('express').Router();
const bilmeceler = require('./bilmeceler-data');
const mw=require("../middleware/restricted");

router.get('/',mw, (req, res) => {
  res.status(200).json(bilmeceler);
});

module.exports = router;
