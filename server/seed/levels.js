import db from "../db/connection";
import Listing from "../models/level";
// import User from '../models/user'

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const main = async () => {
//   // Add users to db
//   const user1 = new User({
//     username: "Benjamin",
//     email: "ben@ben.com",
//     password_digest:
//       "2b$11$KF.y9Q9uGxrdXtsGUAsR.uaifffYIMll1DDdB3lptd63uwEcSUrS2",
//     levels = []
//   });
//   await user1.save()

// Add levels to db
// const levels = [
//     {
//         levelName: "Test Level One",
//         difficulty: 'Easy',
//         height: 3,
//         width: 3,
//         levelData: '[[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":1,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":0},{"isStart":false,"isFinish":true,"isWall":false,"isCurrent":true,"isVisited":true,"col":3,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":5,"row":0},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":0}],[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":1},{"isStart":false,"isFinish":false,"isWall":true,"isCurrent":false,"isVisited":false,"col":1,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":3,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":1},{"isStart":false,"isFinish":false,"isWall":true,"isCurrent":false,"isVisited":false,"col":5,"row":1},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":1}],[{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":0,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":1,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":2,"row":2},{"isStart":true,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":3,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":4,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":5,"row":2},{"isStart":false,"isFinish":false,"isWall":false,"isCurrent":false,"isVisited":true,"col":6,"row":2}]]'
//     }
// ]
// };
