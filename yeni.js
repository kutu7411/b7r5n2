function yeni(bot){
const { Telegraf,Markup} = require('telegraf')
const sinyal  = require('./sinyal.js');
  
 
async function M(y, imagePath) {
    try {  await bot.telegram.sendPhoto(y, { source: imagePath });
    } catch (error) { console.error('Hata oluştu:', error);  }
}



bot.on('text', (ctx) => {
    const incomingMessage = ctx.message.text.toLowerCase(); // Gelen mesajı küçük harfe çevir
    
    switch (incomingMessage) {
      //////////////////////////////////////////////canlılar////
        case 'Canlılar':ctx.reply('Canlılar ' , Markup.keyboard([
      			["Canlıların Ortak Özellikleri✅","Canlılar ve Çevre"],
      			["Canlıların Temel Bileşenleri","Komünite ve Popülasyon Ekolojisi"],
      			["Canlıların Sınıflandırılması","Ekosistem✅"],
      			["⬅️.."]
			      ]).oneTime().resize());	sinyal.sinyal(ctx);	break;

        case 'Canlıların Ortak Özellikleri✅':ctx.reply('Canlıların Ortak Özellikleri✅✅', Markup.keyboard([
      			["solunum,metobolizma✅","beslenme✅"],
      			["üreme✅","diğer✅"],
      			["⬅️.."]
            ]).oneTime()); sinyal.sinyal(ctx); break;
        case 'solunum,metobolizma✅':M(ctx.chat.id,'./img/ortak2.jpg');break;
        case 'beslenme✅':ctx.replyWithPhoto({ source: fs.createReadStream('./img/ortak0.jpg') });break;
          //M(ctx.chat.id,'./img/ortak0.jpg');break;
        case 'üreme✅':M(ctx.chat.id,'./img/ortak3.jpg');break;
        case 'diğer✅':M(ctx.chat.id,'./img/ortak.jpg');break;

        case 'Ekosistem✅': ctx.reply('Ekosistem✅', Markup.keyboard([
            ['Ekosistem tanımlar✅','Ekolojik Birimler✅'],
            ['Ekosistemde canlı ve cansız faktörler✅'],
            ['Ekosistem beslenme çeşidi✅'],
            ["⬅️..","Döngüler✅","Besin piramidi✅"]
            ]).oneTime()); sinyal.sinyal(ctx); break;
          
        case 'Ekosistem tanımlar✅': M(ctx.chat.id,"./img/ekosistemtanımlar.jpg");break;
        case 'Ekolojik Birimler✅':  M(ctx.chat.id,"./img/ekolojik birimler.jpg");break;

        case "Besin piramidi✅": ctx.reply("Besin piramidi✅", Markup.keyboard([ 
            ["Besin Piramidi Özellikleri✅","Besin Piramidi Enerji✅"],
            ["Besin Piramidi Üretici Tüketici✅"],
            ["⬅️..",,"Biyolojik Birikim✅"] 
            ]).oneTime()); sinyal.sinyal(ctx); break;

        case "Besin Piramidi Özellikleri✅":      M(ctx.chat.id,"./img/ebeslenme1.jpg"); break;
        case "Biyolojik Birikim✅":               M(ctx.chat.id,"./img/pbirikim.jpg");   break;
        case "Besin Piramidi Enerji✅":           M(ctx.chat.id,"./img/penerji.jpg");    break;
        case "Besin Piramidi Üretici Tüketici✅": M(ctx.chat.id,"./img/ptu.jpg");        break;
          
        case 'Ekosistem beslenme çeşidi✅': ctx.reply('Ekosistem✅', Markup.keyboard([ 
            ["⬅️..","sayfa 1✅","sayfa 2✅"] 
            ]).oneTime()); sinyal.sinyal(ctx); break;

        case "sayfa 1✅":M(ctx.chat.id,"./img/ebeslenme1.jpg");break;
        case "sayfa 2✅":M(ctx.chat.id,"./img/ebeslenme2.jpg");break;

          
        case 'Ekosistemde canlı ve cansız faktörler✅':ctx.reply('Ekosistem✅', Markup.keyboard([ 
            ["F1","F2","F3"],
            ["⬅️..","F4"] 
            ]).oneTime()); sinyal.sinyal(ctx); break;
          
        case 'F1': M(ctx.chat.id,'./img/F1.jpg');break;
        case 'F2': M(ctx.chat.id,'./img/F2.jpg');break;
        case 'F3': M(ctx.chat.id,'./img/F3.jpg');break;
        case 'F4': M(ctx.chat.id,'./img/F4.jpg');break;

        case "Döngüler✅":ctx.reply("Döngüler✅", Markup.keyboard([ 
            ["Azot Döngüsü","Karbon Döngüsü"],
            ["⬅️..","Su Döngüsü"] 
            ]).oneTime()); sinyal.sinyal(ctx); break;

        case 'Azot Döngüsü':    M(ctx.chat.id,'./img/dazot.jpg')  ;break;
        case 'Karbon Döngüsü':  M(ctx.chat.id,'./img/dkarbon.jpg');break;
        case 'Su Döngüsü':      M(ctx.chat.id,'./img/dsu.jpg')    ;break;

        

      //////////////////////////////////////////////ilk////
 
        case 'start' : ctx.reply('Merhaba bu botu geliştirmeye devam ediyoruz .\n'+
              'Bu botta menü ve komutlar mevcut.\n'+
              '=>Menü için /biyo veya /biyoloji yazarak menüyü açabilirsiniz.\n'+
              '=>Komutlar için "/" işaretiyla başlayabilirsiniz'+
              'Karşınıza çıkan herhangi bir komutuna tıklayın.\n'+
              'İçerik olarak yeterli yardım olmadığı için bot şuan için yetersiz.'+
              'Bize bu konuda yardım edebilirsiniz.'+
              'İletişim: @mr1ay ')
               sinyal.ilksinyal(ctx);break;
  
        case 'iresim': async (ctx) => {
              try {
                const imageUrl = "https://cdn.glitch.global/7a734158-dcdc-4d56-bc0c-924388680663/dkarbon.jpg?v=1702750221151";
                await bot.telegram.sendPhoto(ctx.chat.id, { photo: imageUrl });
              } catch (error) {   console.error('Resim gönderme hatası:', error);  }
              };
              sinyal.ilksinyal(ctx);break;
  
        case '/biyo'  :
        case '/biyo@biyo_mr1aybot'  :
        case '/biyoloji'  :
        case '/biyoloji@biyoloji_mr1aybot' :
        case 'Biyoloji' :
        case '⬅⬅' :
        case '⬅️..' :
            ctx.reply('+_+',Markup.keyboard([
            ['TYT Biyoloji konuları', 'AYT Biyoloji konuları'],
            ["Canlılar","Genetik","Hücre","Sistem"],
            ["Bot Hakkında","İstatistik"]
            ]).oneTime()); sinyal.ilksinyal(ctx);break; 


        case 'Bot Hakkında': ctx.reply( "Merhaba \nBiyoloji botunda konu anlatımları "+
              "ve soru çözümlerinden ekleyebildiğimiz kadar ekledik."+
              "Bu süreçte içerik konusunda yardımcı olan:\n"+
              "♦️EinsteinAlbert ve ♦️Amine nickli arkadaşlarımıza teşekkür ederiz.\n"+
              "Bot için değişiklik, istek öneriniz için\n"+
              "🔷@mr1ay a yazabilirisiniz.(@developer_mr1ay)"
              , Markup.keyboard([
              ["⬅⬅"]
              ]).oneTime()); sinyal.sinyal(ctx);break;


        case 'help' : ctx.reply('Bu botta menü ve komutlar mevcut.\n'+
              '=>Menü için /biyo veya /biyoloji yazmanız yeterli. Menü altta açılacaktır.\n'+
              '=>Komutlar için ise  "/" işaretini yazdığınızda eklediğimiz '+
              'komutları göreceksiniz. Herhangi birini tıklayın.')
              sinyal(ctx);break;
 
        case '/aytbiyolojikonulari':
        case '/aytbiyolojikonulari@biyoloji_mr1aybot':
        case 'AYT Biyoloji konuları':
 
        case 'AYT Biyoloji konuları' : ctx.reply(
            "AYT BİYOLOJİ \n"+
            "Sinir Sistemi\n"+
            "Endokrin Sistem\n"+
            "Duyu Organları\n"+
            "Destek ve Hareket Sistemi\n"+
            "Sindirim Sistemi\n"+
            "Dolaşım ve Bağışıklık Sistemi\n"+
            "Solunum Sistemi\n"+
            "Boşaltım Sistemi\n"+
            "Üreme Sistemi ve Embriyonik Gelişim\n"+
            "Komünite ve Popülasyon Ekolojisi\n"+
            "Genetik Şifre-Protein Sentezi\n"+
            "Fotosentez – Kemosentez\n"+
            "Hücresel Solunum\n"+
            "Bitki Biyolojisi\n"+
            "Canlılar ve Çevre");
            sinyal.sinyal(ctx);break;
 
        case '/tytbiyolojikonulari':
        case '/tytbiyolojikonulari@biyoloji_mr1aybot': 

        case 'TYT Biyoloji konuları' : ctx.reply(
            "TYT BİYOLOJİ \n"+
            "Canlıların Ortak Özellikleri\n"+
            "Canlıların Temel Bileşenleri\n"+
            "Hücre ve Organeller – Madde Geçişleri\n"+
            "Canlıların Sınıflandırılması\n"+
            "Hücrede Bölünme – Üreme\n"+
            "Kalıtım\n"+
            "Bitki Biyolojisi\n"+
            "Ekosistem" );
            sinyal.sinyal(ctx);break;
 
      //////////////////////////////////////////////hücre///


        case 'Hücre': ctx.reply('Hücre konusu için henüz içerik eklenmedi', Markup.keyboard([
            ["Hücrede Bölünme","Hücresel Solunum"],
            ["Hücre ve Organeller"," Madde Geçişleri"],
            ["⬅️..","Hücree"]
            ]).oneTime()); sinyal.sinyal(ctx);break;


        case "<-": ctx.reply('Hücre konusu için henüz içerik eklenmedi', Markup.keyboard([
            ["Hücrede Bölünme","Hücresel Solunum"],
            ["Hücre ve Organeller"," Madde Geçişleri"],
            ["⬅️..","Hücree"]
            ]).oneTime()); sinyal.sinyal(ctx);break;



        case 'Hücrede Bölünme': ctx.reply('Hücrede Bölünme', Markup.keyboard([
            ["⬅️..","Hücrede Bölünmesi hakkında"],
            ["Mitoz Bölünme","Mayoz Bölünme"],
            ["<-"]
            ]).oneTime()); sinyal.sinyal(ctx);break;
        case "Hücrede Bölünmesi hakkında": M(ctx.chat.id,"./img/hh.jpg");break;

        case "Hücre ve Organeller": ctx.reply('Hücrede Bölünme', Markup.keyboard([
            ["organel1","organel2"],
            ["golgi","koful","koful2"],
            ["kromoplast","lizozom","mitekondri"],
            ["<-","plastit","sentrozom" ]
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case "Hücree" : ctx.reply('Hücrede Bölünme', Markup.keyboard([
            ["hucre1", "hucre2"],
            ["kisimlari" ,"kisimlari2","kisimlari3"],
            ["<-","okaryot" ]
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case "hucre1": M(ctx.chat.id,'./img/hucre1.jpg');break;
        case "hucre2": M(ctx.chat.id,'./img/hucre2.jpg');break;
        case "golgi": M(ctx.chat.id,'./img/hucregolgi.jpg');break;
        case "kisimlari": M(ctx.chat.id,'./img/hucrekisimlari.jpg');break;
        case "kisimlari2": M(ctx.chat.id,'./img/hucrekisimlari2.jpg');break;
        case "kisimlari3": M(ctx.chat.id,'./img/hucrekisimlari3.jpg');break;
        case "koful": M(ctx.chat.id,'./img/hucrekoful.jpg');break;
        case "koful2": M(ctx.chat.id,'./img/hucrekoful2.jpg');break;
        case "kromoplast": M(ctx.chat.id,'./img/hucrekromoplast.jpg');break;
        case "lizozom": M(ctx.chat.id,'./img/hucrelizozom.jpg');break;
        case "mitekondri": M(ctx.chat.id,'./img/hucremitekondri.jpg');break;
        case "okaryot": M(ctx.chat.id,'./img/hucreokaryot.jpg');break;
        case "organel1": M(ctx.chat.id,'./img/hucreorganel1.jpg');break;
        case "organel2": M(ctx.chat.id,'./img/hucreorganel2.jpg');break;
        case "plastit": M(ctx.chat.id,'./img/hucreplastit.jpg');break;
        case "sentrozom": M(ctx.chat.id,'./img/hucresentrozom.jpg');break;
 

      //////////////////////////////////////////////genetik///

        case 'Genetik': ctx.reply('Genetik', Markup.keyboard([
            ["Kalıtım ","Bitki Biyolojisi"],
            ["Fotosentez – Kemosentez"],
            ["Genetik Şifre-Protein Sentezi"],
            ["⬅️.."]
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case 'Kalıtım': ctx.reply('Kalıtım', Markup.keyboard([
            ["Kalıtımın Genel Esasları✅","Kontrol Çaprazlaması✅"],
            ["Çok Alellik✅", "Eşbaskınlık✅","Eksik Baskınlık✅","Soy Ağacı✅"],
            ["Monohibrit✅" ,"Dihibrit✅","Eşeye Bağlı Kalıtım✅"], 
            ["⬅️..","Akraba Evliliği✅","Kan Grupları✅",] 
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case '⬅️Kalıtım': ctx.reply('Kalıtım', Markup.keyboard([
            ["Kalıtımın Genel Esasları✅","Kontrol Çaprazlaması✅"],
            ["Çok Alellik✅", "Eşbaskınlık✅","Eksik Baskınlık✅","Soy Ağacı✅"],
            ["Monohibrit✅" ,"Dihibrit✅","Eşeye Bağlı Kalıtım✅"], 
            ["⬅️..","Akraba Evliliği✅","Kan Grupları✅",] 
            ]).oneTime()); sinyal.sinyal(ctx);break;
        case "Eşbaskınlık✅": M(ctx.chat.id,"./img/kes.jpg");break;
        case 'Eksik Baskınlık✅': M(ctx.chat.id,'./img/kk2.png');break;
        case "Çok Alellik✅": M(ctx.chat.id,"./img/kk1.jpg");break;
        case "Monohibrit✅": M(ctx.chat.id,"./img/kmono.jpg");break;
        case "Dihibrit✅": M(ctx.chat.id,"./img/kdihibri.jpg");break;
        case "Kontrol Çaprazlaması✅": M(ctx.chat.id,"./img/kk3.jpg");break;
        case "Akraba Evliliği✅": M(ctx.chat.id,"./img/akraba.jpg");break;

        case 'Kalıtımın Genel Esasları✅': ctx.reply('Kalıtımın Genel Esasları', Markup.keyboard([
            ["Temel kavramlar✅","Baskınlık- Çekiniklik✅"],
            ["⬅️Kalıtım","Çaprazlama✅"] 
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case "Temel kavramlar✅": M(ctx.chat.id,'./img/km1.jpg');break;
        case "Baskınlık- Çekiniklik✅": M(ctx.chat.id,'./img/km2.jpg');break;
        case "Çaprazlama✅": M(ctx.chat.id,'./img/km3.jpg');break;

        case 'Soy Ağacı✅': ctx.reply("Soy Ağacı", Markup.keyboard([
            ["Soy Ağacı1✅","Soy Ağacı2✅"],
            ["⬅️Kalıtım"] 
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case "Soy Ağacı1✅": M(ctx.chat.id,"./img/so1.jpg");break;
        case "Soy Ağacı2✅": M(ctx.chat.id,"./img/so2.jpg");break;

        case 'Kan Grupları✅': ctx.reply("Kan Grupları", Markup.keyboard([
            ["AB Ka Grubu✅","Rh Kan Grubu✅"],
            ["⬅️Kalıtım","Rh Uyuşmazlığı✅"] 
            ]).oneTime()); sinyal.sinyal(ctx);break;

        case "AB Ka Grubu✅": M(ctx.chat.id,"./img/kan1.jpg");break;
        case "Rh Kan Grubu✅": M(ctx.chat.id,"./img/kan2.jpg");break;
        case "Rh Uyuşmazlığı✅": M(ctx.chat.id,"./img/kan3.jpg");break;


        case 'Eşeye Bağlı Kalıtım✅': ctx.reply("Eşeye Bağlı Kalıtım", Markup.keyboard([
            ["Eşeye Bağlı Kalıtım1✅","Eşeye Bağlı Kalıtım2✅"],
            ["Eşeye Bağlı Kalıtım3✅","Eşeye Bağlı Kalıtım4✅"],
            ["⬅️Kalıtım"] 
            ]).oneTime()); sinyal.sinyal(ctx);break;
        case "Eşeye Bağlı Kalıtım1✅": M(ctx.chat.id,"./img/esey1.jpg");break;
        case "Eşeye Bağlı Kalıtım2✅": M(ctx.chat.id,"./img/esey2.jpg");break;
        case "Eşeye Bağlı Kalıtım3✅": M(ctx.chat.id,"./img/esey3.jpg");break;
        case "Eşeye Bağlı Kalıtım4✅": M(ctx.chat.id,"./img/esey4.jpg");break;




      //////////////////////////////////////////////sistemler///

        case 'Sistem': ctx.reply('.', Markup.keyboard([
            ["Sinir Sistemi","Endokrin Sistem","Duyu Organları","Solunum Sistemi"],
            ["Dolaşım ve Bağışıklık Sistemi","Sindirim Sistemi"],
            ["Üreme Sistemi ve Embriyonik Gelişim"],
            ["⬅️..","Destek ve Hareket Sistemi","Boşaltım Sistemi"],
            ]).oneTime()); sinyal.sinyal(ctx);break;


        case "Sinir Sistemi": ctx.reply("Sinir Sistemi", Markup.keyboard([ 
            ["Sinir Sistemi Bölümleri","Sinir Yapısı","Nöron Kısımları"],
            ["Merkezi Sinir Sistemi","Çevresel Sinir Sistemi","Nöron İşleyişi"], 
            ["Glia Hücreleri","Sinaps","Eşik Değer","Sağ Sol Beyin","Refleks"],
            ["⬅️..","Beyin Lobları","Beyin Lobları 2","Homeostasi"]
            ]).oneTime()); sinyal.sinyal(ctx);break;
         

          
        case "Sistemi Bölümleri": M(ctx.chat.id,'./img/sinirsis.jpg');break;
        case "Sinir Yapısı": M(ctx.chat.id,'./img/siniryapisi.jpg');break;
        case "Nöron Kısımları": M(ctx.chat.id,'./img/sinirnorenkisimleri.jpg');break;
        case "Nöron İşleyişi": M(ctx.chat.id,'./img/sinirnorenisleyisi.jpg');break;
        case "Glia Hücreleri": M(ctx.chat.id,'./img/sinirgliahucreleri.jpg');break;
        case "Eşik Değer": M(ctx.chat.id,'./img/siniresikdeger.jpg');break;
        case "Sinaps": M(ctx.chat.id,'./img/sinirsinaps.jpg');break;
        case "Beyin Lobları": M(ctx.chat.id,'./img/sinirbeyinlob.jpg');break;
        case "Beyin Lobları 2": M(ctx.chat.id,'./img/sinirbeyinlob2.jpg');break;
        case "Homeostasi": M(ctx.chat.id,'./img/sinirhomeostasi.jpg');break;
        case "Merkezi Sinir Sistemi": M(ctx.chat.id,'./img/sinirmerkezi.jpg');break;
        case "Çevresel Sinir Sistemi": M(ctx.chat.id,'./img/sinircevresel.jpg');break;
        case "Refleks": M(ctx.chat.id,'./img/sinirrefleks.jpg');break;
        case "Sağ Sol Beyin": M(ctx.chat.id,'./img/sinirsagsolbeyin.jpg');break;
        
   
    }
});
 


  }module.exports={yeni}