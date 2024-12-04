import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("server ready");
});

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
        id: 1,
        title: 'A JOKE',
        content : 'First Joke!',
    },
        {
        id: 2,
        title: '2 JOKE',
        content : 'second Joke!',
    },
        {
        id: 3,
        title: 'A JOKE',
        content : 'Third Joke!',
    },
        {
        id: 4,
        title: 'A JOKE',
        content : 'forth Joke!',
    },
        {
        id: 5,
        title: 'A JOKE',
        content : 'Fifth Joke!',
    },
];
res.send(jokes);
});
const port = process.env.port || 4000;

app.listen(port, ()=> {
    console.log(`Serve at http://localhost:${port}`);
});