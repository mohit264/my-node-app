export default function handler(req, res) {
  res.status(200).json({
    message: "ebe62571f77f988d251a",
    timestamp: new Date().toISOString(),
  });
}