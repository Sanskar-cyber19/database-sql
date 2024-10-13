import { openDB } from "@/utils/connect";

export function CreateData(data){
    const db = openDB();
    const insertApplication = `INSERT INTO TEST(test) VALUES(?)`
    db.exec(insertApplication, [data], function(err){
        if(err){
            return console.error(err.message);
        }
        console.log("data is added....")
    })
}