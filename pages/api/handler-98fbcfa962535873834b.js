export default function handler(req, res) {
  res.status(200).json({
    message: "98fbcfa962535873834b",
    timestamp: new Date().toISOString(),
  });
}