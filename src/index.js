const express = require('express');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware')

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	limit: 5, // Limit each IP to 5 requests per `window` .
});


app.use('/flightsService', createProxyMiddleware({target: ServerConfig.FLIGHT_SERVICE, changeOrigin: true}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(limiter);
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});