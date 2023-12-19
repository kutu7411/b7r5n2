module.exports = {


// sinyal fonksiyonunu tanımlıyoruz.
 

 yaz:function(x,y){  
   const fs = require('fs');
                fs.appendFile(x, '\n'+y, 
                  function (err, data) {
                    if (err) throw err })
                  },

  
sinyal:function(ctx){
              ctx.telegram.sendMessage('-627979832','Kullanılıyoz')
              },

 

ilksinyal:function(ctx){
              	const dosya ="./uyekontrol.json"
	  const fs = require('fs');
	var file = JSON.parse(fs.readFileSync(dosya , "utf8"));
//let bak= editJsonFile(`${__dirname}/bot_ayar.json`); 
  var fu = file.user
  
        //call :asılmenu 
        	 console.log( "...........................")
        	 console.log( ".")
        //:üyeyi dizisini kontrol et 
       var uu1=ctx.from.id
       var uy1=uu1.toString();
  //console.log("uy1=>"+uy1)
       	const found = fu.find(element => element.id == uy1  ); 
  //console.log(found)
      	if (found==undefined) {
      			//id bulamadığında hata var dicek
      		 console.log("hata var")
          var al=ctx.from.language_code+
            '  '+ctx.from.first_name+
            '  '+ctx.from.username
          ekle={"name":al,"id": uy1}
      			fu.push(ekle  ) 
      			let data = JSON.stringify(file,null,2);
      			fs.writeFileSync(dosya, data);
      			// console.log("---->veri eklendi")
        }
      	else {	
      		 console.log("onu userda bulduk")
      		// console.log(file)
        } 
  //
  //
  
  //grup dizisini kontrol et 
  if (ctx.chat.type =='supergroup'|| ctx.chat.type=='group'  ){
    var uu2=ctx.chat.id
       var uy2=uu2.toString();
        var ayar_grup=file.grup 
        const found2 = ayar_grup.find(elemet => elemet.id == uy2 ); 
          //console.log(found2)
      	if (found2==undefined) {
      			//id bulamadığında hata var dicek
      		// console.log("hata var")
          var al2=ctx.chat.title+'  '+ctx.chat.username
          ekle2={"name":al2,"id": uy2}
      			ayar_grup.push(ekle2 ) 
      			//veriyi yazdır
      			let data2 = JSON.stringify(file,null,2);
          // console.log(data2)
         //  console.log("yes")
      			fs.writeFileSync(dosya, data2);
      			// console.log("---->veri eklendi")
        }
      	else {	
      		 console.log("onu grup listesinde bulduk")
      		// console.log(file)
        } 
  
  }   
              
          var date = new Date();
            var hour = date.getHours();
            var hour =hour +3
            hour = (hour < 10 ? "0" : "") + hour;
            var min  = date.getMinutes();
            min = (min < 10 ? "0" : "") + min;
            var sec  = date.getSeconds();
            sec = (sec < 10 ? "0" : "") + sec;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;
            var day  = date.getDate();
            day = (day < 10 ? "0" : "") + day;
             var t= hour + ":" + min + ":" + sec+"\t\t"
              +day + "/" + month + "/" + year  ;
              ctx.telegram.sendMessage('-627979832','Kullanılıyoz')
  var a123='🚩'+
                      '\n=>'+ctx.from.first_name+
                      '\t\t'+ctx.from.username+
                      '\t\t'+ctx.from.language_code+
                      '\t\tid='+ctx.from.id+
                      '\n=>'+t+
                      '\n=>'+ctx.message.text+
                      '\n'         
  
 
               if(ctx.from.id != 1167787866 ){
 const fs = require('fs');
                fs.appendFile(a123 , '\n'+y, 
                  function (err, data) {
                    if (err) throw err })
                  }
},

                
                
             
  
  
getDateTime:function() {
            var date = new Date();
            var hour = date.getHours();
            var hour =hour +3
            hour = (hour < 10 ? "0" : "") + hour;
            var min  = date.getMinutes();
            min = (min < 10 ? "0" : "") + min;
            var sec  = date.getSeconds();
            sec = (sec < 10 ? "0" : "") + sec;
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            month = (month < 10 ? "0" : "") + month;
            var day  = date.getDate();
            day = (day < 10 ? "0" : "") + day;
            return hour + ":" + min + ":" + sec+"\t\t"
              +day + "/" + month + "/" + year  ; 
                  },
  







 UyeSayisi:function(b){
        
      const { Telegraf } = require('telegraf');
        
      const bot = new Telegraf(process.env.B);
      const dosya ="./uyekontrol.json"
      const fs = require('fs');  
      	var file = JSON.parse(fs.readFileSync(dosya , "utf8")); 
        var bilgi = "Toplam kullanici sayisi:"+
                    file.user.length+ 
                    "\nGrupta kullanım sayisi:"+
                    file.grup.length
        bot.telegram.sendMessage(b,bilgi)
      },
  //
  //
  //
  //  
  
 
 
// sinyal fonksiyonunu diğer dosyalardan kullanabilmek için export ediyoruz.

}

