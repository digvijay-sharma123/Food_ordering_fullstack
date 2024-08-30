const mongoose = require('mongoose');
const MongoURI =  'mongodb+srv://kumardigvijay752:Anshu-1234@cluster0.ldf1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const MongoDB = async () => {
//     await mongoose.connect(MongoURI, { useNewUrlParser: true }, async (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             console.log("Connected");
//             mongoose.connection.db.admin().listDatabases((err, result) => {
//                 if (err) {
//                     console.error('Error listing databases:', err);
//                 } else {
//                     console.log('Databases in the cluster:', result.databases);
//                 }
//             });
//             const db = mongoose.connection.useDb('mernfood');
//             const foodItemsCollection = db.collection('food_item');
//             const fetched_data = await mongoose.connection.db.collection("food_item");
//             fetched_data.find({}).toArray(async function (err, data) {
//                 console.log(data)
//                 const foodcategory = await mongoose.connection.db.collection("food_category");
//                 foodcategory.find({}).toArray(function (err, catData) {
//                     if (err) console.log(err);
//                     else {
//                         global.food_item = data;
//                         global.food_category = catData;
//                     }
//                 })
//             })

//         }

//     })
// }
const MongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        // Access a specific database
        const db = mongoose.connection.useDb('mernfood');

        // Access the 'food_item' collection from the specific database
        const foodItemsCollection = db.collection('food_item');
        const foodItems = await foodItemsCollection.find({}).toArray();

        // Access the 'food_category' collection from the specific database
        const foodCategoryCollection = db.collection('food_category');
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        // Assign fetched data to global variables
        global.food_item = foodItems;
        global.food_category = foodCategories;

    } catch (err) {
        console.error("Error connecting to MongoDB or fetching data:", err);
    }
};
module.exports = MongoDB;

