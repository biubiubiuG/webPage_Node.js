var express = require('express');
var router = express.Router();
router.get('/',function (req,res) {
    // response渲染页面 ,views/page
    res.render('page',{page : 'fei页'})
});
module.exports = router;

