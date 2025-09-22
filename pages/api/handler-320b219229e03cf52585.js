export default function handler(req, res) {
  res.status(200).json({
    message: "320b219229e03cf52585",
    timestamp: new Date().toISOString(),
  });
}