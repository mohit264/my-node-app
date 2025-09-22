export default function handler(req, res) {
  res.status(200).json({
    message: "7a6d776f5daa576f4738",
    timestamp: new Date().toISOString(),
  });
}