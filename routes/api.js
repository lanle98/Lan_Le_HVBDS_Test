const express = require("express");
const router = express.Router();
const mysql = require("../config");
const crypto = require("crypto");
const request = require("request");

router.get("/", (req, res) => {
  let query = `SELECT * FROM tbl_projects`;
  mysql.query(query, (err, result) => {
    res.json({ projects: result });
  });
});

router.get("/project/:id", (req, res) => {
  let query = `SELECT * FROM tbl_projects WHERE id=${req.params.id}`;
  mysql.query(query, (err, result) => {
    res.json({ project: result });
  });
});

router.post("/checkout", (req, res) => {
  let requestId = Math.floor(Math.random() * Date.now()),
    orderId = Math.floor(Math.random() * Date.now()),
    data = `partnerCode=MOMOWWRJ20200330&accessKey=5zE4RZNzALZ0DXRP&requestId=${requestId}&amount=${req.body.money}&orderId=${orderId}&orderInfo=đầu tư bất động sản&returnUrl=http://localhost:3000/api/successful&notifyUrl=http://localhost:3000/successful&extraData=`,
    secretKey = "EF1Zinr4HGoUw5JZiT7kEgQqiFqCkM6i",
    signature = crypto
      .createHmac("sha256", secretKey)
      .update(data)
      .digest("hex"),
    // signature = crypto.HmacSHA256(data, secretKey),
    momo_api = {
      partnerCode: "MOMOWWRJ20200330",
      accessKey: "5zE4RZNzALZ0DXRP",
      requestId: requestId.toString(),
      amount: req.body.money,
      orderId: orderId.toString(),
      orderInfo: "đầu tư bất động sản",
      returnUrl: "http://localhost:3000/api/successful",
      notifyUrl: "http://localhost:3000/successful",
      requestType: "captureMoMoWallet",
      signature: signature,
    };

  let add_investor = `INSERT INTO tbl_investors(first_name,last_name,phone,email,orderId) VALUES ('${req.body.first_name}','${req.body.last_name}','${req.body.phone}','${req.body.email}','${orderId}')`;

  mysql.query(add_investor);

  request(
    {
      method: "post",
      url: "https://test-payment.momo.vn/gw_payment/transactionProcessor",
      body: momo_api,
      json: true,
    },
    function (err, resp, body) {
      if (err) throw err;
      console.log(body);
      res.redirect(body.payUrl);
    }
  );
});

router.get("/successful", (req, res) => {
  //   console.log(req.query);
  let insert_transtraction = `INSERT INTO tbl_transactions(orderId,amount,transId,message,responseTime,signature) VALUES (${req.query.orderId},${req.query.amount},${req.query.transId},'${req.query.message}','${req.query.responseTime}','${req.query.signature}')`;
  console.log(insert_transtraction);
  mysql.query(insert_transtraction, (err, result) => {
    res.redirect("../successful");
  });
});

router.get("/transaction", (req, res) => {
  let trans_detail =
    "SELECT i.*, t.amount,t.responseTime FROM tbl_investors i right join tbl_transactions t on t.orderId = i.orderId ORDER BY i.id DESC LIMIT 1;";

  mysql.query(trans_detail, (err, result) => {
    res.json(result);
  });
});

module.exports = router;
