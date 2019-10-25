const oracledb = require('oracledb');
oracledb.getConnection(
  {
    user          : "SYSTEM",
    password      : "123456",
    connectString : "localhost/orcl"
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      "SELECT * " +
        "FROM BOS_course",
      function(err, result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.rows);
        doRelease(connection);
      });
  });

module.exports = {
    oracledb
};