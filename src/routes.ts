import { Router, Request, Response } from 'express';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import fs from 'fs';

const router = Router();
const dbPath = path.resolve(__dirname, 'db.json');

router.get('/ping', (req, res) => {
  res.json(true);
});

router.get('/read_all', (req: Request, res: Response) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
      if (err) {
          return res.status(500).send('Error reading database file');
      }
      const submissions = JSON.parse(data);
      res.json(submissions);
  });
});

router.post('/submit', (req, res) => {
  try{ 
    const { Name, Email, Phone, GitHubLink, StopwatchTime  } = req.body;
    const submissions = JSON.parse(readFileSync(dbPath, 'utf-8'));
    console.log('Current Submissions:', submissions);
    submissions.push({ Name, Email, Phone, GitHubLink, StopwatchTime });
    console.log('New Submission:', {  Name, Email, Phone, GitHubLink, StopwatchTime   });
    writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
    console.log('Updated Submissions:', submissions);
    res.status(201).json({ message: 'Submission saved successfully!' });
  }
  catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ message: 'Internal server error' });

  }
});



router.get('/read', (req, res) => {
  try {
    const index = parseInt(req.query.index as string, 10);
    const submissions = JSON.parse(readFileSync(dbPath, 'utf-8'));
    if (index < 0 || index >= submissions.length) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    console.log(submissions.length);
    res.json(submissions[index]);
  }
  catch (error){
    console.error('Error reading submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
