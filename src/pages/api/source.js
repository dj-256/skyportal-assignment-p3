// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

export default function handler(req, res) {
    const source = JSON.parse(fs.readFileSync('./public/source.json', 'utf8'));
    res.status(200).json({...source, timestamp: Date.now()});
}
