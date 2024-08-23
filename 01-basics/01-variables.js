const accountId = 144553
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed

accountEmail = "sc@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*prefer not to use var
beacuse of issue in block scope and functional scope */


