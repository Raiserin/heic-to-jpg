const express = require('express');
const cors = require('cors');
const conversionRoute = require('./routes/conversion');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use('/api/conversion', conversionRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});