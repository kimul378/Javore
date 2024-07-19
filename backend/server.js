const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const supabaseUrl = 'https://ktjwajwueqzgfzaxdklr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0andhand1ZXF6Z2Z6YXhka2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMDMzODUsImV4cCI6MjAzMzc3OTM4NX0.76ch9rDo7pgH62gp5tOt4jfO30DZ_imjLA3QpYd6zYg';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });


app.post('/api/data_wisata', upload.single('foto_wisata'), async (req, res) => {
  const { nama_wisata, kota, deskripsi_wisata, link_maps, travel_plan, day1, day2, day3 } = req.body;
  const foto_wisata = req.file ? req.file.filename : null;

  const { data, error } = await supabase
    .from('Data_Wisata')
    .insert([{ nama_wisata, kota, foto_wisata, deskripsi_wisata, link_maps, travel_plan, day1, day2, day3 }])
    .select();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
});

app.get('/api/data_wisata', async (req, res) => {
  const { data, error } = await supabase
    .from('Data_Wisata')
    .select('*');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
});

app.get('/api/data_wisata/:id', async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('Data_Wisata')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(data);
});

app.get('/api/reviews', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('Reviews_Tabel')
        .select('*');
      
      if (error) {
        throw error;
      }
      
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching reviews:', error.message);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  });

  app.get('/api/reviews/:id', async (req, res) => {
    const { id } = req.params;
  
    const { data, error } = await supabase
      .from('Reviews_Tabel')
      .select('*')
      .eq('wisata_id', id);
  
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  
    res.status(200).json(data);
});

app.post('/api/reviews', async (req, res) => {
    const { wisata_id, reviewer_name, review_text, rating_pengguna } = req.body;
  
    const { data, error } = await supabase
      .from('Reviews_Tabel')
      .insert([{ wisata_id, reviewer_name, review_text, rating_pengguna }])
      .select();
  
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  
    res.status(201).json(data);
  });

  app.post('/api/data_rental', upload.single('foto_rental'), async (req, res) => {
    const { nama_partner, deskripsi, jenis, lokasi, kontak,} = req.body;
    const foto_rental = req.file ? req.file.filename : null;
  
    const { data, error } = await supabase
      .from('Data_Rental')
      .insert([{ nama_partner, deskripsi, jenis, lokasi, kontak, foto_rental }])
      .select();
  
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  
    res.status(201).json(data);
  });
  
  app.get('/api/data_rental', async (req, res) => {
    const { data, error } = await supabase
      .from('Data_Rental')
      .select('*');
  
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  
    res.status(200).json(data);
  });
  
  app.get('/api/data_rental/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('Data_Rental')
      .select('*')
      .eq('id', id)
      .single();
  
    if (error) {
      return res.status(400).json({ error: error.message });
    }
  
    res.status(200).json(data);
  });
  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
