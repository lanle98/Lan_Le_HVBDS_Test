const express = require("express");
const router = express.Router();
const mysql = require('../config')
const crypto = require('crypto')
const request = require('request')



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
        secretKey = "EF1Zinr4HGoUw5JZiT7kEgQqiFqCkM6i",
        signature = crypto.createHmac("sha256", secretKey)
            .update(data)
            .digest('hex'),
        // signature = crypto.HmacSHA256(data, secretKey),
        momo_api =
        {

            partnerCode: "MOMOWWRJ20200330",
            accessKey: "5zE4RZNzALZ0DXRP",
            requestId: requestId.toString(),
            amount: req.body.money,
            orderId: orderId.toString(),
            orderInfo: "order info",
            returnUrl: "https://momo.vn/return",
            notifyUrl: "https://momo.vn/notify",
            requestType: "captureMoMoWallet",
            signature: signature

        };
    let request_api = request({
        method: 'post',
        url: 'https://test-payment.momo.vn/gw_payment/transactionProcessor',
        body: momo_api,
        json: true,
    }, function (err, resp, body) {
        if (err)
            throw err;
        console.log(body);
        res.redirect(body.payUrl)
    }



    )




    // res.end('https://test-payment.momo.vn/gw_payment/transactionProcessor', JSON.stringify(momo_api))

})

module.exports = router