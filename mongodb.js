const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL='mongodb://127.0.0.1:27017';
const dbName= 'taskmanagerdb';

MongoClient.connect(connectionURL,{useNewUrlParser:true},function(error,client){

    if(error)
    {
        return console.log('Problem connecting to the mongodb database'+database);
    }
  
    const db=client.db(dbName);
    // db.collection('users').insertOne({
    //     name:'umashankar',
    //     age:27
    // },function(error,result){
    //     if(error){
    //         return console.log('Unable to add object to the database'+error);
    //     }
    //      console.log(result.ops);
    // })

    // db.collection('users').insertMany([{name:'phani',age:35},{name:'VL mythili',age:30}],{},function(error,result){
    //     if(error){
    //        return console.log('Error inserting docs to the db')
    //     }
    //     else
    //     console.log(result.ops);
    // })
    db.collection('tasks').insertMany([{description:'Complete Requirements',iscompleted:true},{description:'Complete development',iscompleted:true},{description:'Complete deployment',iscompleted:false}],{},function(error,result){
        if(error)
        {
            return console.log('Error entering details to tasks collection!')
        }
        console.log(result.ops);
    });
});
