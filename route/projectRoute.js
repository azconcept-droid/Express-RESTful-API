const { authentication, restrictTo } = require('../controller/authController');
const { createProject, getAllProject, getProjectById, updateProject } = require('../controller/projectController')

const router = require('express').Router();

router.route('/').post(authentication, restrictTo ('1'),createProject).get(authentication, getAllProject);

router.route('/:id').get(authentication, getProjectById).patch(authentication, updateProject)

module.exports = router;
