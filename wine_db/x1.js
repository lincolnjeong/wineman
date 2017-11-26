node_xj = require("xls-to-json");
node_xj({
    input: "winelist.xls",  // input xls 
    output: "winelist.json", // output json 
    sheet: "1"  // specific sheetname 
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
});