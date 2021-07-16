import sql from 'k6/x/sql';
 
const db = sql.open('sqlserver', 'Server=.\;Database=MyApp;User Id==*************;');;Password=*************;');

export function setup() {

}

export function teardown() {
  db.close();
}

export default function () {
  console.log('Test case: begin.')

  let results = sql.query(db, "select operationId from dbo.Log where N = 1;");
  
  for (const row of results) {
    console.log(`From database: ${row.operationId}`);
  }

  console.log('Test case: end.')
} 
