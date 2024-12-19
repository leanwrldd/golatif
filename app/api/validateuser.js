import fs from 'fs';
import path from 'path';

const userCredsFilepath = path.join(process.cwd(),'public' ,'database', 'usercreds.json');

export default function handler(req, res) {
    if (req.method === "POST") {
        console.log(req.method);
    }
    else {
        console.log("Fuck this shit");
    }
  fs.readFile(userCredsFilepath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error occurred:', err);
    }
    else {
        console.log('User Data:', data);
        return res.status(200).json({ users: JSON.parse(data) });
    }
  });
}
