const express = require('express')
const router = express.Router();
const client = require('../models/index.js')

const index = require('../views/index.js')
    // const addPage = require('../views/addPage.js')
    // const editPage = require('../views/editPage.js')
const layout = require('../views/layout.js')
    // const main = require('../views/main.js')
    // const userList = require('../views/addPage.js')
    // const userPages = require('../views/userPages.js')
    // const wikiPage = require('../views/wikiPage.js')
const htmlViews = require('../views')

router.get('/', (req, res, next) => {
    res.send(layout(index.main()))
})
router.post('/', (req, res, next) => {
    res.send(index.main())
})

router.get('/users', (req, res, next) => {
    res.send(index.userPages())
})

router.get('/users/:id', (req, res, next) => {
    res.send(index.userPages())
})



router.get('/add', (req, res, next) => {
    res.send(index.addPage())
})
router.post('/add', (req, res, next) => {
    res.send('adding page')
})
router.get('/edit', (req, res, next) => {
    res.send(index.editPage())
})
router.post('/edit', (req, res, next) => {
    res.send('editing page')
})

module.exports = router