let error = true

let db = new Mongo().getDB("friendAPI");

let res = [
  db.friends.drop(),
  db.friends.insert({ myfield: 'hello', thatfield: 'testing' }),
  
]

printjson(res)

// if (error) {
//   print(error)
//   print('Error, exiting')
//   quit(1)
// }