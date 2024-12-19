import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userCredsFilepath = path.join(process.cwd(), 'public', 'database', 'usercreds.json');
  
  if (req.method !== "POST") {
    console.log('Method not allowed');
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;
  console.log('Received username:', username);
  console.log('Received password:', password);

  fs.readFile(userCredsFilepath, 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading user data:', err);
      return res.status(500).json({ message: "An error occurred while reading user data" });
    }

    try {
      const users = JSON.parse(data);

      console.log('Request Body:', req.body); // Debugging statement
      console.log('Parsed Users:', users); // Debugging statement

      const user = users.find(user => user.username === username && user.password === password);

      if (user) {
        console.log('Login successful');
        return res.status(200).json({ message: "Login successful" });
      } else {
        console.log('Invalid credentials');
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (parseError) {
      console.error('Error parsing user data:', parseError);
      return res.status(500).json({ message: "An error occurred while parsing user data" });
    }
  });
}
