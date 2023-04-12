const express = require('express');
const multer = require('multer');
const gm = require('gm').subClass({ imageMagick: true });

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            res.status(400).json({ error: 'No file provided' });
            return;
        }

        gm(req.file.buffer)
            .toBuffer('JPG', (err, buffer) => {
                if (err) {
                    console.error('Conversion error:', err);
                    res.status(500).json({ error: 'Conversion failed' });
                } else {
                    const base64Image = buffer.toString('base64');
                    res.json({ file: base64Image });
                }
            });
    } catch (error) {
        console.error('Conversion error:', error);
        res.status(500).json({ error: 'Conversion failed' });
    }
});

module.exports = router;
