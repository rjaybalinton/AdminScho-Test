const express = require('express');
const router = express.Router();
const admin = require('../controller/admin');  



router.get('/', admin.home);                   
router.get('/application', admin.application);    
router.get('/profile', admin.profile); 
router.get('/search', admin.search);
router.post('/addStudent', admin.addStudent);
// Add route for creating posts
router.post('/addPost', admin.addPost);


module.exports = router;