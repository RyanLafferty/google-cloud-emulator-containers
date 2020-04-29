const { Firestore } = require('@google-cloud/firestore');

process.env.FIRESTORE_EMULATOR_HOST = '0.0.0.0:8080';

//firebase client
const firestore = new Firestore({
  projectId: 'default-firestore-project'
});

// firestore seed constant
const LINE_ITEMS = [{
  id: 1,
  product: {
    name: 'Apple',
    cost: 1.20
  },
  quantity: 2,
  total_cost: 2.40,
  supplier: {
    name: 'Apple Factory',
    country: 'Canada'
  }
}];

async function seedFirestore() {
  // create / fetch firestore line_items collection
  const collection = firestore.collection('line_items');
  let docs = [];

  // create line_items
  for(let li in LINE_ITEMS) {
    docs.push(collection.doc(li).set(LINE_ITEMS[li]));
  }

  // store line_items
  await docs

  // get line_items collection
  const lineItemsCollection = await collection.get();
  const lineItems = lineItemsCollection.docs.map(li => li.data());

  // print line_items collection
  console.log('Seeded lineItems: ', lineItems);
}

seedFirestore();
