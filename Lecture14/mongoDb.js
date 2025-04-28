use gymDatabase;

db.createCollection("clients")
db.createCollection("memberships")
db.createCollection("workouts")
db.createCollection("trainers")

db.clients.insertMany([
    { client_id: 1, name: "John Doe", age: 28, email: "john@example.com" },
    { client_id: 2, name: "Anna Smith", age: 35, email: "anna@example.com" },
    { client_id: 3, name: "Mike Johnson", age: 42, email: "mike@example.com" }
])

db.clients.find()

//Result:
// [
// {
//     "_id": {"$oid": "680f9c156cc9e2489acc707f"},
//     "age": 28,
//     "client_id": 1,
//     "email": "john@example.com",
//     "name": "John Doe"
// },
//     {
//         "_id": {"$oid": "680f9c156cc9e2489acc7080"},
//         "age": 35,
//         "client_id": 2,
//         "email": "anna@example.com",
//         "name": "Anna Smith"
//     },
//     {
//         "_id": {"$oid": "680f9c156cc9e2489acc7081"},
//         "age": 42,
//         "client_id": 3,
//         "email": "mike@example.com",
//         "name": "Mike Johnson"
//     }
// ]

db.memberships.insertMany([
    { membership_id: 1, client_id: 1, start_date: "2024-01-01", end_date: "2024-12-31", type: "Annual" },
    { membership_id: 2, client_id: 2, start_date: "2024-05-01", end_date: "2024-11-01", type: "Half-Year" },
    { membership_id: 3, client_id: 3, start_date: "2024-03-15", end_date: "2025-03-15", type: "Annual" }
])

db.memberships.find()

//Result:
// [
// {
//     "_id": {"$oid": "680f9cc76cc9e2489acc7083"},
//     "client_id": 1,
//     "end_date": "2024-12-31",
//     "membership_id": 1,
//     "start_date": "2024-01-01",
//     "type": "Annual"
// },
//     {
//         "_id": {"$oid": "680f9cc76cc9e2489acc7084"},
//         "client_id": 2,
//         "end_date": "2024-11-01",
//         "membership_id": 2,
//         "start_date": "2024-05-01",
//         "type": "Half-Year"
//     },
//     {
//         "_id": {"$oid": "680f9cc76cc9e2489acc7085"},
//         "client_id": 3,
//         "end_date": "2025-03-15",
//         "membership_id": 3,
//         "start_date": "2024-03-15",
//         "type": "Annual"
//     }
// ]

db.workouts.insertMany([
    { workout_id: 1, description: "Full Body Training", difficulty: "medium" },
    { workout_id: 2, description: "Yoga Basics", difficulty: "easy" },
    { workout_id: 3, description: "Crossfit Challenge", difficulty: "hard" }
])

db.workouts.find()

//Result:
//     [
//     {
//         "_id": {"$oid": "680f9d0d6cc9e2489acc7087"},
//         "description": "Full Body Training",
//         "difficulty": "medium",
//         "workout_id": 1
//     },
//         {
//             "_id": {"$oid": "680f9d0d6cc9e2489acc7088"},
//             "description": "Yoga Basics",
//             "difficulty": "easy",
//             "workout_id": 2
//         },
//         {
//             "_id": {"$oid": "680f9d0d6cc9e2489acc7089"},
//             "description": "Crossfit Challenge",
//             "difficulty": "hard",
//             "workout_id": 3
//         }
//     ]

db.trainers.insertMany([
    { trainer_id: 1, name: "Alice Green", specialization: "Strength Training" },
    { trainer_id: 2, name: "Bob White", specialization: "Yoga and Stretching" }
])

db.trainers.find()

//Results:
//     [
//     {
//         "_id": {"$oid": "680f9d4c6cc9e2489acc708b"},
//         "name": "Alice Green",
//         "specialization": "Strength Training",
//         "trainer_id": 1
//     },
//         {
//             "_id": {"$oid": "680f9d4c6cc9e2489acc708c"},
//             "name": "Bob White",
//             "specialization": "Yoga and Stretching",
//             "trainer_id": 2
//         }
//     ]

db.clients.find({ age: { $gt: 30 } })

//Result:
//     [
//     {
//         "_id": {"$oid": "680f9c156cc9e2489acc7080"},
//         "age": 35,
//         "client_id": 2,
//         "email": "anna@example.com",
//         "name": "Anna Smith"
//     },
//         {
//             "_id": {"$oid": "680f9c156cc9e2489acc7081"},
//             "age": 42,
//             "client_id": 3,
//             "email": "mike@example.com",
//             "name": "Mike Johnson"
//         }
//     ]

db.workouts.find({ difficulty: "medium" })

//Result:
//     [
//     {
//         "_id": {"$oid": "680f9d0d6cc9e2489acc7087"},
//         "description": "Full Body Training",
//         "difficulty": "medium",
//         "workout_id": 1
//     }
//     ]

db.memberships.find({ client_id: 3})

// Result:
//     [
//         {
//             "_id": {"$oid": "680f9cc76cc9e2489acc7085"},
//             "client_id": 3,
//             "end_date": "2025-03-15",
//             "membership_id": 3,
//             "start_date": "2024-03-15",
//             "type": "Annual"
//         }
//     ]