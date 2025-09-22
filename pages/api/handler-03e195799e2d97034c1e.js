export default function handler(req, res) {
  res.status(200).json({
    message: "03e195799e2d97034c1e",
    timestamp: new Date().toISOString(),
  });
}