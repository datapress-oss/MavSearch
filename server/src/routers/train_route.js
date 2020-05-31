const express = require('express')
const router = express.Router()
const path = require('path')

const conttest = require('./../controllers/conttest') 

router.get('/train/:id',conttest )