export default function handler(req, res) {
  res.status(200).json({
    message: "9fb1aa13cbf61702edc1",
    timestamp: new Date().toISOString(),
  });
}