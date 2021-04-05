const express =  require("express");
const routes = express.Router();

const Views = __dirname +"/Views/"


const profile = {
    name: "Jakeliny",
    avatar: "https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

// request response 
routes.get('/', (request, response) =>  response.render(Views+"index"))
routes.get('/job', (request, response) =>  response.render(Views+"job"))
routes.get('/job/edit', (request, response) =>  response.render(Views+"job-edit"))
routes.get('/profile', (request, response) =>  response.render(Views+"profile", {profile}))


module.exports = routes;