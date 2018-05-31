require('dotenv').load()
const express = require('express')
const app = express()
const queries = require('./queries')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const accountSid = 'AC6c7ed4c66b89eb6bc508d17fea90a322'
const client = require('twilio')(accountSid, process.env.AUTHTOKEN)

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post('/texts', (req, res) => {
    console.log(req.body)
    for (i = 0; i < req.body.numbers.length; i++) {
        const options = {
            body: req.body.message,
            from: '+17122019171',
            to: req.body.numbers[i]
        }
        client.messages.create(options, {
        }).then(message => console.log(message.sid))
            .done()
    }
})

app.get("/messages", (request, response) => {
    queries.list().then(message => {
        response.json({ message })
    }).catch(console.error)
})

app.get("/messages/identity", (request, response) => {
    queries.read(request.params.identity, 'messages').then(message => {
        message
            ? response.json({ message })
            : response.sendStatus(404)
    }).catch(console.error)
})

app.post("/messages", (request, response) => {
    console.log(request.body)
    queries.create('messages', request.body).then(message => {
        response.status(201).json({ message })
    }).catch(console.error)
})

app.delete("/messages/:id", (request, response) => {
    queries.delete(request.params.id, 'messages').then(() => {
        response.sendStatus(204)
    }).catch(error => {console.error(error)})
})

app.put("/messages/:id", (request, response) => {
    queries.update(request.params.id, 'messages', request.body).then(message => {
        response.json({ message })
    }).catch(console.error)
})

app.get("/numbers", (request, response) => {
    queries.listPeople().then(number => {
        response.json({ number })
    }).catch(console.error)
})

app.get("/numbers/:id", (request, response) => {
    queries.read(request.params.id, 'numbers').then(number => {
        crop
            ? response.json({ number })
            : response.sendStatus(404)
    }).catch(console.error)
})

app.post("/numbers", (request, response) => {
    queries.create('numbers', request.body).then(number => {
        response.status(201).json({ number })
    }).catch(console.error)
})

app.delete("/numbers/:id", (request, response) => {
    queries.delete(request.params.id, 'numbers').then(() => {
        response.sendStatus(204)
    }).catch(console.error)
})

app.put("/numbers/:id", (request, response) => {
    queries.update(request.params.id, 'numbers', request.body).then(number => {
        response.json({ number })
    }).catch(console.error)
})

app.use((request, response) => {
    response.sendStatus(404)
})