import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
const port = 3333;

app.use(bodyParser.json())

app.post('/submit', (req: Request, res: Response) => {
    const data = req.body;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error while saving data');
        } else {
            res.send('Data successfully saved');
        }
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})