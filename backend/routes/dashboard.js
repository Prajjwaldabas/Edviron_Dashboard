const express = require('express')
const {section, students, fines, transactions,invoices,findFeeDefaulters} = require('../controllers/dashboardController')
const router = express.Router()

router.get('/sections',section)
router.get('/students',students)
router.get('/fines',fines)
router.get('/transactions',transactions)
router.get('/invoices',invoices)
router.get('/defaulters',findFeeDefaulters)






module.exports = router;