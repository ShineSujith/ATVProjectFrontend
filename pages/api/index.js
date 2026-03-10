async function handler(req, res) {
  console.log(JSON.stringify(req.body));
  if (req.method === "POST") {
    const response = await fetch("http://localhost:8001/api/sendTextInput", {
      method: "POST",
      body: JSON.stringify({ payload: req.body }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.json(data);
  }
}

export default handler;
