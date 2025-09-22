export default function handler(req, res) {
  res.status(200).json({
    message: "6ca6863bb7a1e851a4a4",
    timestamp: new Date().toISOString(),
  });
}