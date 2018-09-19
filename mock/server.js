// module.exports = function() {
//     var data = { users: [] }
//     // Create 1000 users
//     for (var i = 0; i < 1000; i++) {
//       data.users.push({ id: i, name: 'user' + i })
//     }
//     return data
//   }
let Mock  = require('mockjs');
let Random = Mock.Random;
var data = { 
        news: []
};
module.exports = function(){
    var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));
    for (var i = 0; i < 100; i++) {
      
        var content = Random.cparagraph(0,10);
    
        data.news.push({
             id: i, 
             title: Random.cword(8,20),
             desc: content.substr(0,40),
             tag: Random.cword(2,6),
             views: Random.integer(100,5000),
             images: images.slice(0,Random.integer(1,3))
        })
    }
    return data;
}
