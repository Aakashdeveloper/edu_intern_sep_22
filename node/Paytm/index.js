const express = require("express");
const https = require("https");
const qs = require("querystring");
const checksum_lib = require("./Paytm/checksum");
const config = require("./Paytm/config");
const cors = require('cors')

const app = express();
app.use(cors())
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
app.set('views','./views')
app.set('view engine','ejs')

const PORT = process.env.PORT || 4100;

app.get('/',(req,res) => {
  res.render('index')
})

app.post("/paynow", [parseUrl, parseJson], (req, res) => {
  // Route for making payment
  console.log(">>>>",req.body)
  var paymentDetails = {
    orderID: req.body.id,
    amount: req.body.cost,
    customerId: req.body.name,
    customerEmail: req.body.email,
    customerPhone: req.body.phone,
    customerRest: req.body.rest_name
}
if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone ) {
  res.status(400).send('Payment failed')
} else {
    var params = {};
    params['MID'] = config.PaytmConfig.mid;
    params['WEBSITE'] = config.PaytmConfig.website;
    params['CHANNEL_ID'] = 'WEB';
    params['INDUSTRY_TYPE_ID'] = 'Retail';
    params['ORDER_ID'] = 'TEST_'  + paymentDetails.orderID;
    params['CUST_ID'] = paymentDetails.customerId;
    params['TXN_AMOUNT'] = paymentDetails.amount;
    /* where is app is hosted (heroku url)*/
    params['CALLBACK_URL'] = 'http://localhost:4100/callback';
    params['EMAIL'] = paymentDetails.customerEmail;
    params['MOBILE_NO'] = paymentDetails.customerPhone;
  

    checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {
        var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
       
        var form_fields = "";
        for (var x in params) {
            form_fields += "<input type='hidden' name='" + x + "' value='" + params[x] + "' >";
        }
        form_fields += "<input type='hidden' name='CHECKSUMHASH' value='" + checksum + "' >";

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' + txn_url + '" name="f1">' + form_fields + '</form><script type="text/javascript">document.f1.submit();</script></body></html>');
        res.end();
    });
}
});
app.post("/callback", (req, res) => {
  // Route for verifiying payment

  var body = '';

  req.on('data', function (data) {
     body += data;
  });

   req.on('end', function () {
     var html = "";
     var post_data = qs.parse(body);

     // received params in callback
     console.log('Callback Response: ', post_data, "\n");


     // verify the checksum
     var checksumhash = post_data.CHECKSUMHASH;
     // delete post_data.CHECKSUMHASH;
     var result = checksum_lib.verifychecksum(post_data, config.PaytmConfig.key, checksumhash);
     console.log("Checksum Result => ", result, "\n");


     // Send Server-to-Server request to verify Order Status
     var params = {"MID": config.PaytmConfig.mid, "ORDERID": post_data.ORDERID};

     checksum_lib.genchecksum(params, config.PaytmConfig.key, function (err, checksum) {

       params.CHECKSUMHASH = checksum;
       post_data = 'JsonData='+JSON.stringify(params);

       var options = {
         hostname: 'securegw-stage.paytm.in', // for staging
         // hostname: 'securegw.paytm.in', // for production
         port: 443,
         path: '/merchant-status/getTxnStatus',
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
           'Content-Length': post_data.length
         }
       };


       // Set up the request
       var response = "";
       var post_req = https.request(options, function(post_res) {
         post_res.on('data', function (chunk) {
           response += chunk;
         });

         post_res.on('end', function(){
           console.log('S2S Response: ', response, "\n");
           console.log(">>>>>".response)
           var _results = JSON.parse(response);
           /* where it will come back after payment*/
           res.redirect(`http://localhost:4100/viewBooking?status=${_results.STATUS}&ORDERID=${_results.ORDERID}&date=${_results.TXNDATE}&bank=${_results.BANKNAME}`)
           });
       });

       // post the data
       post_req.write(post_data);
       post_req.end();
      });
     });
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
