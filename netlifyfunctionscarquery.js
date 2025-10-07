const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { make, model } = event.queryStringParameters || {};
  if (!make || !model) return { statusCode: 400, body: JSON.stringify({ error:"Missing make or model" }) };

  try {
    const url = `https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`;
    const res = await fetch(url);
    const text = await res.text();
    const match = text.match(/\((.*)\)/);
    const data = match ? JSON.parse(match[1]) : {};
    return { statusCode: 200, body: JSON.stringify(data), headers: { "Access-Control-Allow-Origin": "*" } };
  } catch(err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
