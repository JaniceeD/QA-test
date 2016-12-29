var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
var client = webdriverio.remote(options);

client
    .init()
    .url('https://www.amaysim.com.au/my-account/my-amaysim/dashboards')
    .waitForExist('#my_amaysim2_user_session_login', 15000)
  	.setValue('#my_amaysim2_user_session_login' ,'0468827174')
    .setValue('#password' ,'theHoff34')
    .click('#login_button')
    .waitForExist('#menu_list', 15000).then(function(){
        console.log('test My Data & Plan');
    })
    .url('https://www.amaysim.com.au/my-account/my-amaysim/products')	
	.end();