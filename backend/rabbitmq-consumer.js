const amqp = require('amqplib');

async function setupRabbitMQ() {
    const connection = await amqp.connect('amqp://localhost'); // URL de connexion RabbitMQ
    const channel = await connection.createChannel();
    const queueName = 'notifications'; // Nom de la file d'attente

    await channel.assertQueue(queueName, { durable: true });

    // Écoutez les messages de la file d'attente
    channel.consume(queueName, (message) => {
        if (message !== null) {
            // Traitez le message ici
            console.log('Message reçu:', message.content.toString());
            channel.ack(message); // Acquittez le message après traitement
        }
    });
    
    console.log(`File d'attente ${queueName} prête.`);
}

setupRabbitMQ().catch(console.error);
