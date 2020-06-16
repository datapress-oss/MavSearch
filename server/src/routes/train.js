const express = require('express')
const router = express.Router()

const GetTrainbyID = require('../controllers/GetTrainByID')

// URL: http://localhost:3000/train/"TheTrainID"
router.get(':id', GetTrainbyID)
