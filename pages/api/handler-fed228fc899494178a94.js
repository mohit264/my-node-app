export default function handler(req, res) {
  res.status(200).json({
    message: "fed228fc899494178a94",
    timestamp: new Date().toISOString(),
  });
}