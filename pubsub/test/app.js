const { PubSub } = require('@google-cloud/pubsub');

process.env.PUBSUB_EMULATOR_HOST = '0.0.0.0:8085';

async function listTopics(client) {
  const topics = await client.getTopics();
  console.log('Topics: ', topics);
}

async function testPubSub() {
  console.log('PUBSUB_EMULATOR_HOST: ', process.env.PUBSUB_EMULATOR_HOST);

  try {
    // Instantiate pubsub client
    const pubsub = new PubSub({projectId: 'default-pubsub-project'});
    console.log('Client: ', pubsub);

    // List topics
    listTopics(pubsub);

    // Create a new topic
    const [topic] = await pubsub.createTopic('test-topic');
    console.log(`Topic ${topic.name} created.`);

    // List topics
    listTopics(pubsub);
  } catch (error) {
    console.log('Error:', error);
  }
}

testPubSub();
