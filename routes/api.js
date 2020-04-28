const express = require("express");
const router = express.Router();
const mysql = require('../config')


router.get("/", (req, res) => {
    let query = `SELECT * FROM tbl_projects`
    mysql.query(query, (err, result) => {
        res.json({ projects: result })
    })

})

router.get("/project/:id", (req, res) => {
    let query = `SELECT * FROM tbl_projects WHERE id=${req.params.id}`
    mysql.query(query, (err, result) => {
        res.json({ projects: result })
    })

})

module.exports = router