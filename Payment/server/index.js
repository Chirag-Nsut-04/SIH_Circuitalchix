require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { Cashfree } = require('cashfree-pg');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Setting up Cashfree credentials from .env file
Cashfree.XClientId = process.env.CLIENT_ID;
Cashfree.XClientSecret = process.env.CLIENT_SECRET;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

console.log("Client ID:", process.env.CLIENT_ID);  
console.log("Client Secret:", process.env.CLIENT_SECRET); 

function generateOrderId() {
    const uniqueId = crypto.randomBytes(16).toString('hex');

    const hash = crypto.createHash('sha256');
    hash.update(uniqueId);

    const orderId = hash.digest('hex');

    return orderId.substr(0, 12);
}

// Test endpoint
app.get('/', (req, res) => {
    res.send("Hello");
});

// Payment endpoint
app.get('/payment', async (req, res) => {
    try {
        let request = {
            "order_amount": 300.00,
            "order_currency": "INR",
            "order_id": await generateOrderId(),
            "customer_details": {
                "customer_id": "chiragMaini04",
                "customer_phone": process.env.CUSTOMER_PHONE,
                "customer_name": process.env.CUSTOMER_NAME,
                "customer_email": process.env.CUSTOMER_EMAIL
            },
        };

        Cashfree.PGCreateOrder("2023-08-01", request).then(response => {
            console.log(response.data);
            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        });
    } catch (error) {
        console.log(error);
    }
});

// Verify payment endpoint
app.post('/verify', async (req, res) => {
    try {
        let { orderId } = req.body;

        Cashfree.PGOrderFetchPayments("2023-08-01", orderId).then((response) => {
            res.json(response.data);
        }).catch(error => {
            console.error(error.response.data.message);
        });
    } catch (error) {
        console.log(error);
    }
});

app.listen(8000, () => {
    console.log("Server is running on 8000");
});
