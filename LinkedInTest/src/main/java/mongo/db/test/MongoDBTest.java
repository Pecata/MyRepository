package mongo.db.test;

import java.net.UnknownHostException;
import java.util.Set;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.WriteResult;

public class MongoDBTest {

	
	private static void insertInCollection(DBCollection coll){
		
		BasicDBObject doc = new BasicDBObject("name", "Petko").
								append("email", "petko_yanakiev@abv.bg");
		coll.insert(doc);
	}
	
	private static void findOne(DBCollection coll){
		DBObject object= coll.findOne();
		System.out.println(object);
	}
	
	private static void findAll(DBCollection coll){
		DBCursor cursor = coll.find();
		try{
			while(cursor.hasNext()){
				System.out.println(cursor.next());
			}
		}finally{
			cursor.close();
		}
	}
	
	private static void removeObject(DBCollection coll){
		BasicDBObject object = new BasicDBObject("name","Petko");
		WriteResult res= coll.remove(object);
		System.out.println(res.toString());
	}
	
	private static void findSpecific(DBCollection coll){
		BasicDBObject query = new BasicDBObject("name","Petko");
		DBCursor cursor = coll.find(query);
		try{
			while(cursor.hasNext()){
				System.out.println(cursor.next());
			}
		}finally{
			cursor.close();
		}
	}
	
	public static void main(String[] args)
	{
		try {
			MongoClient mongoClient= new MongoClient("localhost",27017);
			
			DB db = mongoClient.getDB("names");
			DBCollection coll = db.getCollection("mynames");
			
			Set<String> colls= db.getCollectionNames();
			for(String s: colls){
				System.out.println(s);
			}
			//removeObject(coll);
			insertInCollection(coll);
			findOne(coll);
			findAll(coll);
			findSpecific(coll);
			
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
