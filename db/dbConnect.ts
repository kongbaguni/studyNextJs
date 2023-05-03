import mongoose from 'mongoose'

const connection = {isConnected:null} 

async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGODB_URI)
  connection.isConnected = db.connections[0].readyState
  
}

export default dbConnect