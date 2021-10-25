const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Subhanaallhi wabihamdihi subhanallahil azim Alhamdulillah.Tanjilul karim Automatic restart i am very happy wow. i am tajil');
});

const users = [
    { id: 0, name: 'shabana', email: 'tanjilkarim580@gmail.com' },
    { id: 1, name: 'shabana', email: 'tanjilkarim580@gmail.com' },
    { id: 2, name: 'tanjil', email: 'akjhgkjh[@gmail.com' },
    { id: 3, name: 'karim', email: 'ndjhjkl@gmail.com' },
    { id: 4, name: 'rahim', email: 'lkal;kjk@gmail.com' }

]


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use querry parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

// app .METHOD

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranages', 'banana', 'apple'])
})


app.get('/fruits/mango/fazli', (req, res) => {
    res.send('very taste mango');
})








app.listen(port, () => {
    console.log('listening port', 5000)
});