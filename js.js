// Import mqtt library
const mqtt = require('mqtt');

// Define MQTT broker URL
const brokerUrl = 'mqtt://broker.example.com';

// Connect to MQTT broker
const client = mqtt.connect(brokerUrl);

// Handle connection events
client.on('connect', function () {
    console.log('Connected to MQTT broker');
    // Subscribe to a topic
    client.subscribe('topic/gpio');
});

// Handle message reception
client.on('message', function (topic, message) {
    // Check if the message is for GPIO activation
    if (topic === 'topic/gpio') {
        const gpioCommand = message.toString();
        // Process GPIO activation command
        console.log('Received GPIO activation command:', gpioCommand);
        // Activate GPIO based on the command
        // (Add your GPIO activation logic here)
    }
});

// Function to send GPIO activation command
function activateGPIO() {
    // Publish message to GPIO activation topic
    client.publish('topic/gpio', 'activate');
    console.log('GPIO activation command sent');
}

// Example: Activate GPIO when a button is clicked
const button = document.getElementById('gpioButton');
button.addEventListener('click', function () {
    activateGPIO();
});
