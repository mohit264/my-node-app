export default function handler(req, res) {
  res.status(200).json({
    message: "1f49d386d52b786fc281",
    timestamp: new Date().toISOString(),
  });
}