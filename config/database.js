const config = require("./config");
const sql = require("mssql");

module.exports.connect = async () => {
  try {
    await sql.connect(config.config);
    console.log("Connect Success!");
  } catch (error) {
    console.log(error);
  }
}
// sql.connect(config, function (err) {
    
//   if (err) console.log(err);
//   console.log('Success');

//   var request = new sql.Request();
//   request.query('select * from Product', function(err, recordset){
//       if (err) console.log(err);
//       console.log(recordset);
//   });
// });
