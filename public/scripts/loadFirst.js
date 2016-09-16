module.exports = { 
	loadSecond:function () { 
		alert('This script was loaded first, static. Now we will load the next'); 
		testLoadR2()
	}
} 

function testLoadR2() { 

  R("../scripts/loadSecond", function (err, index) {
    if (err) {
        console.error(err.statusText);
        return;
    }
    // use the exports object as needed
    document.getElementById('content').innerHTML = 'hi'
  });

} 
