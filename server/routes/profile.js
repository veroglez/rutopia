const path = require('path')
const router = require('express').Router()
// const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
// const multer = require('multer')
// const destination= path.join(__dirname, "../public/avatar")
// const upload = multer({dest : destination})
const profileController = require("../controllers/profileController")

router.put('/profile/:id', profileController.editProfile);

// router.get('/profile/:id', profileController.profileGet)
// router.get('/profile/:id/edit', profileController.editProfileGet)
// router.post('/profile/:id/edit', ensureLoggedIn(), upload.single('avatar'), profileController.editProfilePost)

module.exports = router
