import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userCredsFilepath = path.join(process.cwd(),'public' ,'database', 'usercreds.json');
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  fs.readFile(userCredsFilepath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "An error occurred while reading user data" });
    }
    else {
        console.log('User Data:', data);
        return res.status(200).json({ users: JSON.parse(data) });
    }
  });
}
