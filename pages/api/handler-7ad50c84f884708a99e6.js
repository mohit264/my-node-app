export default function handler(req, res) {
  res.status(200).json({
    message: "7ad50c84f884708a99e6",
    timestamp: new Date().toISOString(),
  });
}