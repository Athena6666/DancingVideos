const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videoController')

router.get('/', videoController.getAllVideos)
router.post('/', videoController.addVideo)
router.delete('/:id', videoController.deleteVideo)
router.put('/:id', videoController.updateVideo)

module.exports = router