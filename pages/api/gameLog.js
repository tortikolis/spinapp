import {MongoClient} from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {numberOfGames, time, date} = req.body;

    if(!numberOfGames || !numberOfGames === 0 || !time || !date) {
      res.status(422).json({message:'invalid input'})
      return;
    }

    const newGameLog = {
      numberOfGames,
      time,
      date
    }

    const client = await MongoClient.connect('mongodb+srv://tortikolis:acivoj1612@cluster0.1qz6d.mongodb.net/spinCount?retryWrites=true&w=majority')
    const db = client.db();
    await db.collection('spinCountLog').insertOne(newGameLog);
    client.close();
    
    res.status(201).json({message:'Success! Game log added'})
    console.log(newGameLog)

  }

  if(req.method === 'GET') {
    const client = await MongoClient.connect('mongodb+srv://tortikolis:acivoj1612@cluster0.1qz6d.mongodb.net/spinCount?retryWrites=true&w=majority')
    const db= client.db();
    const data = await db.collection('spinCountLog').find({}).toArray();
    res.status(200).json({data})
    console.log(data)
  }
}
