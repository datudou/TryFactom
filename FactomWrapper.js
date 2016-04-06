'use strict'
import fetch from 'node-fetch'
const FACTOM_API =  'http://localhost:8088/v1/commit-chain/?'
const API = "localhost:8089/v1/compose-chain-submit/entrycreditaddressname"
const ROOT= "http://localhost:8089/v1/"


//Create factoid address  
function createAddress(name){
    let api = `${ROOT}factoid-generate-address/${name}`
    unirest.get(api)
        .end(resp=>{
            console.log(resp.);
        })
}

createAddress("lemonswang");



unirest.post(API)
    .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
    .send({"ExtIDs":["466972737421", "7365636F6E64"], "Content":"48656C6C6F20466163746F6D21"})
    .end(function (response) {
        console.log(response.body);
    });

