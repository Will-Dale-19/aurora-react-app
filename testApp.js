const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/test', (req, res) => {

    const testMedicalJSON = {
        first_name: "ronald",
        last_name: "duckly",
        date_of_birth: "march 29",
        pain_level: "5/10",
        pain_area: "lower back"
    }
    const jsonContent = JSON.stringify(testMedicalJSON)
    res.end(jsonContent)
})


app.listen(8090, () => console.log('API is running on http://localhost:8090'));