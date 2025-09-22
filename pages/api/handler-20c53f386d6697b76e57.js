export default function handler(req, res) {
  res.status(200).json({
    message: "20c53f386d6697b76e57",
    timestamp: new Date().toISOString(),
  });
}