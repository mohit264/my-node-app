export default function handler(req, res) {
  res.status(200).json({
    message: "733dda13bdc65de4dfb1",
    timestamp: new Date().toISOString(),
  });
}