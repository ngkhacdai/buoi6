const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const uri = 'mongodb+srv://ngkhacdai:FeIazp6Sgfv3KthP@cluster0.fbcyexd.mongodb.net/TextMongoDB?retryWrites=true&w=majority';
const svModel = require('./svModel')
app.get('/', async function (req, res) {
    await mongoose.connect(uri).then(console.log('Kết nối thành công'));
    const sv = new svModel();
    sv.Ten = 'a';
    sv.Tuoi = 1;
    sv.Diachi = 'a';

    try {
        await sv.save();
        res.send(sv)
    } catch (error) {
        console.log(error);
    }
})
app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`)
});