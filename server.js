import express from 'express';
import multer from 'multer';
import Replicate from 'replicate';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for frontend
app.use(cors());

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

app.post('/api/generate-design', upload.single('image'), async (req, res) => {
  try {
    const { style } = req.body;
    const imagePath = req.file.path;

    if (!style || !req.file) {
      return res.status(400).json({ error: 'Missing style or image' });
    }

    // Build prompt based on style
    const prompts = {
      modern: 'interior design of the same room in modern style, clean lines, neutral colors, contemporary furniture, well lit, realistic',
      minimal: 'interior design of the same room in minimal Scandinavian style, simplicity, functionality, uncluttered spaces, natural materials, well lit, realistic',
      luxury: 'interior design of the same room in luxury style, rich textures, premium materials, elegant details, sophisticated colors, well lit, realistic',
      classic: 'interior design of the same room in classic style, timeless elegance, traditional furniture, ornate details, warm colors, well lit, realistic',
      contemporary: 'interior design of the same room in contemporary style, current trends, bold colors, unique pieces, modern art, well lit, realistic',
      industrial: 'interior design of the same room in industrial style, exposed materials, metal accents, urban aesthetics, raw textures, well lit, realistic'
    };

    const prompt = prompts[style] || prompts.modern;

    console.log('Generating design with prompt:', prompt);

    // Call Replicate API
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          image: fs.createReadStream(imagePath),
          prompt: prompt,
          strength: 0.75,
          num_outputs: 1,
          guidance_scale: 7.5,
          num_inference_steps: 20
        }
      }
    );

    // Clean up uploaded file
    fs.unlinkSync(imagePath);

    // Return the generated image URL
    res.json({ image: output[0] });

  } catch (error) {
    console.error('Error generating design:', error);
    res.status(500).json({ error: 'Failed to generate design' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
