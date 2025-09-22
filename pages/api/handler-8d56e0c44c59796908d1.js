export default function handler(req, res) {
  res.status(200).json({
    message: "8d56e0c44c59796908d1",
    timestamp: new Date().toISOString(),
  });
}