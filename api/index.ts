import express from 'express';

const app = express();

app.use(express.json());

// Định nghĩa các route
app.get('/api', (req, res) => {
  res.json({ message: "Chào từ Express chạy trên Bun!", platform: "Vercel" });
});



export default app;