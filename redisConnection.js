const redis = require('redis');

const client=redis.createClient({
    url:"redis://redis-12818.c301.ap-south-1-1.ec2.cloud.redislabs.com:12818",
    password:"kanmanni26"
})

client.connect().then(()=>{
    console.log("redis connected")
})

module.exports = client
