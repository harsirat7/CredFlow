const amqp = require("amqplib");


const userExchangeFunction = async () => {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const exchange = "userExchange";

}