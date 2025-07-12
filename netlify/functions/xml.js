const fetch = require("node-fetch");

exports.handler = async () => {
  const url = "https://drive.google.com/uc?export=download&id=1kCBofkGVCqh32fMffR3mvO7Q0ppynp17";
  const res = await fetch(url);
  const text = await res.text();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/xml"
    },
    body: text,
  };
};
