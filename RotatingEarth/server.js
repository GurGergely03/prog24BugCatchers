const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.post('/save-image', (req, res) => {
  const imgData = req.body.image;
  console.log('Received Image Data:', imgData);  // Log the received image data

  const base64Data = imgData.replace(/^data:image\/jpeg;base64,/, "");

  const filePath = path.join(__dirname, 'newearth.jpg');
  fs.writeFile(filePath, base64Data, 'base64', function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send('Failed to save image.');
    }
    res.send('Image saved successfully.');
  });
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(express.json({ limit: '10mb' }));

// // Endpoint to handle image saving
// app.post('/save-image', (req, res) => {
//   const imgData = req.body.image;
//   const base64Data = imgData.replace(/^data:image\/jpeg;base64,/, "");

//   // Save the file in the "public" directory (which is served as static files)
//   const filePath = path.join(__dirname, 'newearth.jpg');

//   // Write the image file
//   fs.writeFile(filePath, base64Data, 'base64', function (err) {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Failed to save image.');
//     }
//     res.send('Image saved successfully.');
//   });
// });

// // Start the server
// const PORT = 5500;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });