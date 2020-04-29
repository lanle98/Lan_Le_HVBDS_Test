const express = require("express");
const router = express.Router();
const mysql = require('../config')
const crypto = require('crypto-js')



router.get("/", (req, res) => {
    let query = `SELECT * FROM tbl_projects`
    mysql.query(query, (err, result) => {
        res.json({ projects: result })
    })

})

router.get("/project/:id", (req, res) => {
    let query = `SELECT * FROM tbl_projects WHERE id=${req.params.id}`
    mysql.query(query, (err, result) => {
        res.json({ project: result })
    })

})

router.post('/checkout', (req, res) => {
    let requestId = Math.floor(Math.random() * 100000),
        orderId = Math.floor(Math.random() * 100000),
        data = `partnerCode=MOMOWWRJ20200330&accessKey=5zE4RZNzALZ0DXRP&requestId=${requestId}&amount=${req.body.money}&orderId=${orderId}&orderInfo=order info&returnUrl=https://momo.vn/return&notifyUrl=https://momo.vn/notify&extraData=`,
        secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz",
        signature = crypto.HmacSHA256(data, secretKey),
        momo_api =
        {

            partnerCode: "MOMOWWRJ20200330",
            accessKey: "5zE4RZNzALZ0DXRP",
            requestId: requestId,
            amount: req.body.money,
            orderId: orderId,
            orderInfo: "order info",
            returnUrl: "https://momo.vn/return",
            notifyUrl: "https://momo.vn/notify",
            requestType: "captureMoMoWallet",
            signature: signature

        }

    console.log(momo_api)

})

module.exports = router