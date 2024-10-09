const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json({ limit: '10mb' }));

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Endpoint to handle image saving
app.post('/save-image', (req, res) => {
  const imgData = req.body.image;
  const base64Data = imgData.replace(/^data:image\/jpeg;base64,/, "");

  // Save the file in the "public" directory (which is served as static files)
  const filePath = path.join(__dirname, 'public', 'canvas_image.jpg');

  // Write the image file
  fs.writeFile(filePath, base64Data, 'base64', function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send('Failed to save image.');
    }
    res.send('Image saved successfully.');
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});