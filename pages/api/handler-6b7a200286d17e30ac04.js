export default function handler(req, res) {
  res.status(200).json({
    message: "6b7a200286d17e30ac04",
    timestamp: new Date().toISOString(),
  });
}