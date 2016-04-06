'use strict'
import fetch from 'node-fetch'
const FACTOM_API =  'http://localhost:8088/v1/commit-chain/?'
const API = "localhost:8089/v1/compose-chain-submit/entrycreditaddressname"
const ROOT= "http://localhost:8089/v1/"


//Create factoid address  
function createAddress(name){
    let api = `${ROOT}factoid-generate-address/${name}`
    fetch(api)
        .then(resp=>{
            return resp.json();
        })
        .then(json=>{
            console.log(json);
        })

}

createAddress("lemons");



