import * as fs from "fs";

export default function handler(req, res) {
    const sourceStream = fs.createReadStream('./public/source.json', 'utf8');
    sourceStream.pipe(res);
}
