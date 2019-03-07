require('dotenv').config()
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const massive = require('massive')

const app = express()
app.use(express.json())

let { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env
app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db =>
    app.set('db', db)
)
app.post('/pokemon',(req, res) => {
    if (!req.session.pokemon) {
        req.session.pokemon = []
    }
    const {
        name,
        level,
        img,
        id
    } = req.body
    let newItem = {
        name: name,
        level: level,
        img: img,
        id: id,
        quantity: 1
    }
    
    req.session.cart.push(newItem)
    res.status(200).send(req.session.cart)
},)

app.post('/auth/signup', async (req, res) => {
    let { username, password } = req.body
    let db = req.app.get('db')
    let userFound = await db.user_check([username])
    if (userFound[0]) {
        return session.status(200).send('Email already exists')
    }
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    let createdUser = await db.create_customer([username, hash])
    req.session.user = {id: createdUser[0].id, username: createdUser[0].username}
    res.status(200).send(req.session.user)
})

app.post('/auth/login', async (req,res)=> {
    let { username, password } = req.body
    let db = req.app.get('db')
    let userFound = await db.user_check([username])
    if (!userFound[0]) {
        return res.status(200).send('Username does not exist')
    }
    let result = bcrypt.compareSync(password, userFound[0].hash)
    if (result){
        req.session.user = {id:userFound[0].id, username: userFound[0].username}
        res.status(200).send(req.session.user)
    }else {
        return res.status(401).send('Nice try')
    }
})
app.get('/api/user-data', (req,res) => {
    if (req.session.user){
        res.status(200).send(req.session.user)
    }else{
        res.status(401).send('Please log in')
    }
})
app.get('/auth/logout', (req,res)=>{
    req.session.destroy()
    res.sendStatus(200)
})

app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} troops at your command, my lord.`)
})



