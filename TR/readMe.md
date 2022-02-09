# 30 Günde JavaScript

| # Gün |                                                                       Başlıklar                                                                     |
| ----- | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| 01    |                                                             [Tanıtım](./readMe.md)                                                                  |
| 02    |                                               [Veri Türleri](./02_Day_Data_types/02_day_data_types.md)                                              |
| 03    |                             [Boolean lar, Operatörler, Tarih](./03_Day_Booleans_operators_date/03_booleans_operators_date.md)                       |
| 04    |                                            [Koşullar](./04_Day_Conditionals/04_day_conditionals.md)                                                 |
| 05    |                                                     [Diziler](./05_Day_Arrays/05_day_arrays.md)                                                     |
| 06    |                                                       [Döngüler](./06_Day_Loops/06_day_loops.md)                                                    |
| 07    |                                                 [Fonksiyonlar](./07_Day_Functions/07_day_functions.md)                                              |
| 08    |                                                    [Nesneler](./08_Day_Objects/08_day_objects.md)                                                   |
| 09    |                             [Yüksek Dereceli Fonksiyonlar](./09_Day_Higher_order_functions/09_day_higher_order_functions.md)                        |
| 10    |                                           [Setler ve Haritalar](./10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)                                     |
| 11    |                      [Yıkıcılar ve Yapıcılar](./11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)                           |
| 12    |                                  [Düzenli İfadeler](./12_Day_Regular_expressions/12_day_regular_expressions.md)                                     |
| 13    |                             [Konsolda Nesne Metodları](./13_Day_Console_object_methods/13_day_console_object_methods.md)                            |
| 14    |                                         [Hata Yönetimi](./14_Day_Error_handling/14_day_error_handling.md)                                           |
| 15    |                                                    [Sınıflar](./15_Day_Classes/15_day_classes.md)                                                   |
| 16    |                                                        [JSON](./16_Day_JSON/16_day_json.md)                                                         |
| 17    |                                            [Web Depoları](./17_Day_Web_storages/17_day_web_storages.md)                                             |
| 18    |                                                  [Promise ler](./18_Day_Promises/18_day_promises.md)                                                |
| 19    |                                                   [Closure](./19_Day_Closures/19_day_closures.md)                                                   |
| 20    |                                  [Writing Clean Code](./20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)                                   |
| 21    |                                                          [DOM](./21_Day_DOM/21_day_dom.md)                                                          |
| 22    |                            [Manipulating DOM Object](./22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)                            |
| 23    |                                        [Event Listeners](./23_Day_Event_listeners/23_day_event_listeners.md)                                        |
| 24    |                             [Mini Project: Solar System](./24_Day_Project_solar_system/24_day_project_solar_system.md)                              |
| 25    | [Mini Project: World Countries Data Visulalization 1](./25_Day_World_countries_data_visualization_1/25_day_world_countries_data_visualization_1.md) |
| 26    | [Mini Project: World Countries Data Visulalization 2](./26_Day_World_countries_data_visualization_2/26_day_world_countries_data_visualization_2.md) |
| 27    |                             [Mini Proje: Portfolyo](./27_Day_Mini_project_portfolio/27_day_mini_project_portfolio.md)                               |
| 28    |                          [Mini Proje: Liderlik tablosu](./28_Day_Mini_project_leaderboard/28_day_mini_project_leaderboard.md)                       |
| 29    |             [Mini Proje: Animasyon karakterleri](./29_Day_Mini_project_animating_characters/29_day_mini_project_animating_characters.md)            |
| 30    |                                     [Final Projeleri](./30_Day_Mini_project_final/30_day_mini_project_final.md)                                     |

🧡🧡🧡 MUTLU KODLAMALAR 🧡🧡🧡

<div>
<small><strong>Yazarı</strong> daha fazla eğitim materyali oluşturabilmesi için destekleyin</small> <br />  
<a href = "https://www.paypal.me/asabeneh"><img src='./images/paypal_lg.png' alt='Paypal Logo' style="width:10%"/></a>
</div>

<div align="center">
  <h1> 30 Günde JavaScript: Tanıtım</h1>
  <a class="header-badge" target="_blank" href="https://www.linkedin.com/in/asabeneh/">
  <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social">
  </a>
  <a class="header-badge" target="_blank" href="https://twitter.com/Asabeneh">
  <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/asabeneh?style=social">
  </a>

<sub>Yazar:
<a href="https://www.linkedin.com/in/asabeneh/" target="_blank">Asabeneh Yetayeh</a><br>
<small> Ocak, 2020 (Türkçeleştirme Ocak 2022)</small>
</sub>

  <div>

🇬🇧 [English](./readMe.md)
🇪🇸 [Spanish](./Spanish/readme.md)
🇷🇺 [Russian](./RU/README.md)
TR [Turkish](./TR/readMe.md)

  </div>

</div>
</div>

[2. Gün >>](./02_Day_Data_types/02_day_data_types.md)

![Otuz Günde JavaScript](./images/day_1_1.png)

- [30 Günde JavaScript](#30-günde-javascript)
- [📔 Birinci Gün](#-Birinci-gün)
  - [Tanıtım](#tanıtım)
  - [Gereksinimler](#gereksinimler)
  - [Başlangıç](#başlangıç)
    - [Node.js Yüklemek](#nodejs-yüklemek)
    - [Tarayıcı](#tarayıcı)
      - [Google Chrome Yüklemesi](#google-chrome-yüklemesi)
      - [Google Chrome Konsolunu Açmak](#google-chrome-konsolunu-açmak)
      - [Tarayıcı Konsolunda Kod Yazmak](#tarayıcı-konsolunda-kod-yazmak)
        - [Console.log](#consolelog)
        - [Birden Fazla Argümanla Console.log](#birden-fazla-argümanla-consolelog)
        - [Yorumlar](#yorumlar)
        - [Sözdizimi](#sözdizimi)
      - [Matematiksel Işlemler](#matematiksel-işlemler)
    - [Kod Editörü](#kod-editörü)
      - [Visual Studio Code Yükleme](#visual-studio-code-yükleme)
      - [Visual Studio Code Nasıl Kullanılır](#visual-studio-code-nasıl-kullanılır)
  - [Bir Web Sayfasına JavaScript Eklemek](#bir-web-sayfasına-javascript-eklemek)
    - [Satır Içi Script](#satır-içi-script)
    - [Dahili Script](#dahili-script)
    - [Harici Script](#harici-script)
    - [Çoklu Harici Scriptler](#çoklu-harici-scriptler)
  - [Veri türlerine giriş](#veri-türlerine-giriş)
    - [Sayılar](#sayılar)
    - [String ler](#string-ler)
    - [Boolean lar](#boolean-lar)
    - [Undefined Tanımsız](#undefined-tanımsız)
    - [Null Boş](#null-boş)
  - [Veri Türlerini Kontrol Etmek](#veri-türlerini-kontrol-etmek)
  - [Yorumlar](#yorumlar-yeniden)
  - [Variables Değişkenler](#variables-değişkenler)
- [💻 Birinci Gün: Egzersizler](#-Birinci-gün-egzersizler)

# 📔 Birinci Gün 

## Tanıtım

Bu JavaScript meydan okumasına katılmaya karar verdiğiniz için sizi **tebrik ediyoruz**. Bu meydan okumada bir Javascript programlayıcısı olmak için gereken her şeyi yani programlama ile ilgili tüm genel konsepti öğreniyor olacaksın. 30GündeJavaScript meydan okuma kursunun sonunda istediğiniz takdirde size bir tamamlama sertifikası da veriyoruz. Eğer yardıma ihtiyacınız olursa ya da diğer insanlara yardım etmek isterseniz [telegram grubumuza](https://t.me/ThirtyDaysOfJavaScript) katılabilirsiniz.

**30GündeJavaScript** rehberi hem yeni başlayan hem de gelişmiş seviyede geliştirici olan tüm kullanıcılar için bir rehber niteliğindedir. JavaScript'e hoşgeldiniz. JavaScript web'in dilidir. Ben JavaScript öğrenir ve öğrenirken eğleniyorum, umarım yakında sen de bana katılırsın.

Bu adım adım JavaScript meydan okumasında, insanlık tarihindeki en popüler programlama dili olan JavaScript öğreneceksin.
JavaScript **_websitelerine interaktiflik katmak, mobil uygulamaları oluşturmak, masaüstü uygumaları üretmek, oyun oluşturmak_** için ve hatta şu günlerde JavaScript **_makine öğrenimi_** ve **_Yapay Zeka_** için de kullanılmaktadır.
**_JavaScript (JS)_** popülaritesini yıllar içinde artırdı ve neredeyse altı yıldır bu popülerliğini korumakta olup Github üzerindeki en cok kullanılan programlama dili de yine JavaScript'tir.

## Gereksinimler

Bu zorluğun üstesinden gelebilmek için önceden programlama dili bilmeniz gerekmemektedir. Yalnızca şunlara ihtiyacınız bulunmaktadır:

1. Motivasyon
2. Bir bilgisayar
3. Internet
4. Bir tarayıcı
5. Bir kod editörü

## Başlangıç

İnanıyorum ki, geliştirici olabilmeniz aşırı derecede bir arzuya sahipsiniz. Eğer bilgisayar ve Internetiniz varsa o zaman siz bu eğitime başlamak için gereken her şeye sahipsiniz demektir

### Node.js yüklemek

Şu başlangıç aşamasında belki Node.js'e ihtiyacınız olmayabilir fakat ilerisi için ihtiyaç duyabilirsiniz. Bu nedenle dilerseniz siz şimdiden [node.js](https://nodejs.org/en/) yükleyin.

![Node download](images/download_node.png)

Gösterildiği gibi web sitesinden indirin ve çift tıklayarak bilgisayarınıza yükleyin

![node yüklemesi](images/install_node.png)

Bilgisayarınızda node yüklü olup, olmadığını çalıştır menüsüne cmd yazarak komut satırı ya da başka bir terminalden aşağıdaki şekilde kontrol edebilirsiniz.

```sh
kullanici $ node -v
v12.14.0
```

Bu eğitimi yaparken ben Node'un 12.14.0 sürümünü kullandım, fakat Türkçe çevirisinin yazıldığı tarihte Node.js v16.13.2 sürümü bulunuyordu ki, muhtemelen sizin kullandığınız sürüm çok daha güncel olacaktır.

### Tarayıcı

Kullanılabilecek çok sayıda tarayıcı bulunmaktadır. Ancak, ben güçlü bulduğum Google Chrome tarayıcıyı kullanmanızı öneriyorum.

#### Google Chrome Yüklemesi

Henüz bilgisayarınızda [Google Chrome](https://www.google.com/chrome/) yüklü değil ise yükleyin. Elbette belki biliyorsunuzdur. Tarayıcınızın konsolunda da küçük JavaScript kodları yazabilirsiniz, ancak biz uygulama geliştirmek için tarayıcınızdaki konsolu kullanmıyoruz.

![Google Chrome](images/google_chrome.png)

#### Google Chrome Konsolunu Açmak

Tarayıcınızın sağ üst köşesindeki alt alta üç noktaya tıklayarak, burada _Diğer Araçlar -> Geliştirici Araçları_ bölümüne tıklayarak ya da F12 kısayolu ile tarayıcınızdaki konsolu açabilirsiniz. Ben kısayolu kullanmayı tercih ediyorum.

![Opening chrome](images/opening_developer_tool.png)

Ayrıca F12'nin yanı sıra bilgisayarınızın işletim sistemine uygun olarak aşağıdaki kısayolları kullanarak da tarayıcınızdaki konsola ulaşabilirsiniz.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](images/opening_chrome_console_shortcut.png)

Google Chrome konsolunu açtıktan sonra, yukarıdaki resimde gösterilen sekme butonlarına tıklayarak kurcalayın ve keşfetmeye çalışın. Çünkü zamanımızın çoğunu gördüğünüz bu konsolda harcayağız. Konsolda tüm JavaScript kodlarınızı görebilirsiniz. Ayrıca Google Konsol V8 motoru kullandığınızda, kodunuz makine koduna dönüştürülür. Şimdi Google Chrome konsolunda Konsol sekmesine aşağıdaki resimde gördüğünüz JavaScript kodlarını yazalım:

![konsolda kod yazmak](./images/js_code_on_chrome_console.png)

#### Tarayıcı Konsolunda Kod Yazmak

Bizler Google konsolunda veya herhangi bir tarayıcı konsolunda herhangi bir JavaScript kodu yazabiliriz. Fakat, bu eğitimde Google Chrome kullandığımız için pekiştirme görselleri yalnızca bu tarayıcıdan verilecektir. Aşağıdaki kısa yolları kullanarak konsolunuzu açın:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
F12
```

##### Console.log

İlk JavaScript kodumuzu yazmak için, yerleşik bir fonksiyon olan **console.log()** fonksiyonunu kullandık. Bununla girdi verisi olarak bir argüman ilettik ve bu fonksiyon bize çıktıyı iletti. Girdi verisi olarak 'Merhaba, Dünya' cümlesini console.log() fonksiyonu ile ilettiğimizi görüyorsunuz.

```js
console.log('Merhaba, Dünya!')
```

##### Birden Fazla Argümanla Console.log

**console.log()** fonksiyonu virgülle ayrılmış birden fazla parametre alabilir. Kullanabilmek için sözdizimi aşağıda gördüğünüz gibi şu şekilde sürer:**console.log(param1, param2, param3)**

![çok sayıda argümanı console log ile iletme](./images/console_log_multipl_arguments.png)

```js
console.log('Merhaba', 'Dünya', '!')
console.log('MUTLU', 'YENİ', 'YILLAR', 2020)
console.log(30, 'Günde', 'JavaScript', 'Öğreniyoruz')
```

Parça kodda da görebileceğiniz gibi, _console.log()_ birden fazla argüman (parametre) alabilir.

Tebrikler! JavaScript kodu kullanarak _console.log()_ ile ilk kodunuzu yazdınız.

##### Yorumlar

Kodumuza yorumlar ekleyebiliyoruz. Yorumlar, kodu daha okunaklı kılmak ve kodumuzda açıklamalar bırakmak için oldukça önemlidir. JavaScript yorum işaretleriyle biçimlendirdiğimiz yani yazdığımız alandaki bölümleri derlemez. JavaScript'te, // ile başlayan herşey bir yorum satırı olarak kabul edilir ve ayrıca /\* \*/ şeklinde ifadeler arasına alınmış herşey de yine yorum olarak kabul edilir.

**Örnek: Tek satırda yorum**

```
// Bu benim ilk yorumum ve işaretlemem
 // Bu ise ikinci yorumum ve açıklamam  
 // Görüldüğü gibi ben buradaki bir alt satıra geçilmeden devam edilebilecek tek satırdaki yorumum 
```

**Örnek: Çok sayıda satırdan oluşan yorum**

```
/*
Bu çok satırlı bir yorumdur.
Çok satırlı yorumlar birden fazla satırı kapsayabilir. 
JavaScript web'in dilidir ve yorumlar kodlarımızı,
açıklamaya yararlar.
 */
```

##### Sözdizimi

Programlama dilleri insan dillerine benzerler. İngilizce veya diğer birçok dil, anlamlı bir mesaj iletmek için kelimeler, deyimler, cümleler, birleşik cümleler ve daha fazlasını kullanır. Sözdiziminin İngilizce anlamı, bir dilde iyi oluşturulmuş cümleler oluşturmak için kelimelerin ve deyimlerin düzenlenmesidir. Sözdiziminin (Syntax) teknik tanımı, bir bilgisayar dilindeki ifadelerin yapısıdır. Programlama dillerinin kendilerine özgü sözdizimleri vardır. JavaScript bir programlama dilidir ve diğer programlama dilleri gibi kendi sözdizimine sahiptir. JavaScript'in anladığı bir sözdizimi yazmazsak, farklı türde hatalar ortaya çıkar. Farklı JavaScript hata türlerini daha sonra keşfedeceğiz ve açıklayacağız. Şimdilik sözdizimi hatalarını basitçe görelim.

![Hata](images/raising_syntax_error.png)

Ben yukarıda resimde görülen şekilde kasıtlı olarak hatalar yaptım. Sonuç olarak, yapılan hatalar sonucunda konsol sözdizimi hatalarını bize verir. Aslında, sözdizimi çok bilgilendirici metinlerdir. Ne tür bir hata yapıldığını bildirir. Bizler hata geri bildirim kılavuzunu okuyarak sözdizimini (kodumuzu) düzeltebilir ve sorunları çözebiliriz. Bir programdaki hataları belirleme ve kaldırma işlemine hata ayıklama (debugging) denir. Şimdi yaptığım hataları düzeltelim:

```js
console.log('Merhaba, Dünya!')
console.log('Merhaba, Dünya!')
```

Buraya kadar, _console.log()_ kullanarak metnin nasıl görüntüleneceğini gördük. Eğer _console.log()_ kullanarak metin veya dize yazdırıyorsak, metnin tek tırnak, çift tırnak veya ters tırnak işareti içinde olması gerekir.
**Örneğin:**

```js
console.log('Merhaba, Dünya!')
console.log("Merhaba, Dünya!")
console.log(`Merhaba, Dünya!`)
```

#### Matematiksel Işlemler

Şimdi sayı veri türleri için Google Chrome konsolunda _console.log()_ kullanarak JavaScript kodları yazma konusunda daha fazla pratik yapalım. Metne ek olarak JavaScript kullanarak matematiksel hesaplamalar da yapabiliriz. Aşağıdaki basit hesaplamaları yapalım. Konsol, **_console.log()_** işlevi olmadan doğrudan bağımsız değişkenleri alabilir. Ancak, buna ilişkin kullanımlar, bu eğitimde açıklanmamıştır, çünkü eğitimimiz boyuncu biz bu fonksiyonları hep bir metin düzenleyicide kullanacağız. Dilerseniz konsola doğrudan sayılar yazarak oynayabilirsiniz.

![Aritmetik](images/arithmetic.png)

```js
console.log(2 + 3) // Toplama (Addition)
console.log(3 - 2) // Çıkarma (Subtraction)
console.log(2 * 3) // Çarpma (Multiplication)
console.log(3 / 2) // Bölme (Addition)
console.log(3 % 2) // Modül - kalan bulma (Modulus - finding remainder)
console.log(3 ** 2) // Üs Alma (Exponentiation) 3 ** 2 == 3 * 3
```

### Kod Editörü

Kodlarımızı tarayıcı konsoluna yazabiliriz, ancak daha büyük projeler için bunu yapamayıç. Tüm geliştiriciler kodlarını yazmak için gerçek bir çalışma ortamında, farklı kod editörleri (düzenleyicileri) kullanır. Bu 30 günlük JavaScript eğitiminde bizler Visual Studio Code kullanacağız.

#### Visual Studio Code Yükleme

Visual studio code, çok popüler bir açık kaynak metin düzenleyicisidir. Ben [download Visual Studio Code](https://code.visualstudio.com/) indirerek kurmanızı tavsiye ediyorum, fakat başka editörler kullanıyorsanız, lütfen istediğiniz editör ile eğitime devam etmekten çekinmeyin.

![Vscode](images/vscode.png)

Visual Studio Code yüklediyseniz hemen kullanmaya başlayalım.

#### Visual Studio Code Nasıl Kullanılır

Visual Studio Code'unuzu simgesine tıklayarak başlatın. Açıldığında aşağıdaki gibi bir arayüz görüreniz, soldaki menüleri tıklayarak bir etkileşime geçin ve kurcalayın.

![Vscode ui](./images/vscode_ui.png)

![Vscode add project](./images/adding_project_to_vscode.png)

![Vscode open project](./images/opening_project_on_vscode.png)

![script file](images/scripts_on_vscode.png)

![Installing Live Server](images/vsc_live_server.png)

![running script](./images/running_script.png)

![coding running](./images/launched_on_new_tab.png)

## Bir Web Sayfasına JavaScript Eklemek

JavaScript bir web sayfasına üç farklı şekilde eklenebilir:


- **_Satır İçi script_**
- **_Dahili script_**
- **_Harici script_**
- **_Çoklu Harici scriptler_**

Aşağıdaki bölümlerde, web sayfanıza JavaScript kodu eklemenin farklı yolları anlatılmaktadır.

### Satır Içi Script

Masaüstünüzde veya istediğiniz herhangi bir yerde, bir proje klasörü oluşturun. Buna 30GundeJS adını verin ve proje klasöründe bir **_index.html_** dosyası oluşturun. Ardından aşağıdaki kodu yapıştırın ve bu _.html_ uzantılı dosyayı örneğin [Chrome](https://www.google.com/chrome/) gibi bir tarayıcıda açın.


```html
<!DOCTYPE html>
<html>
  <head>
    <title>30GündeScript:Satır İçi Script</title>
  </head>
  <body>
    <button onclick="alert('30GündeJavaScript\'e hoş geldiniz!')">Bana tıkla</button>
  </body>
</html>
```

Artık, ilk satır içi komut dosyanızı yazdınız. _alert()_ yerleşik işlevini kullanarak bir açılır uyarı mesajı oluşturabiliriz.

### Dahili Script

Dahili script  _head_ veya _body_ etiketleri arasına yazılabilir, ancak bunun HTML belgesinin gövdesine yerleştirilmesi tercih edilir. Öncelikle sayfanın _head_ kısmına yazalım.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30GündeScript:Dahili Script</title>
    <script>
      console.log('30GündeJavaScript\'e hoş geldiniz!')
    </script>
  </head>
  <body></body>
</html>
```

Çoğu zaman dahili bir scripti bu şekilde yazarız. JavaScript kodunun _body_ kısmına yazılması en çok tercih edilen seçenektir. _Console.log()_ çıktısını görmek için tarayıcınızın konsolunu yukarıda belirttiğimiz şekilde açın.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30GündeScript:Dahili Script</title>
  </head>
  <body>
    <button onclick="alert('30GündeJavaScript\'e hoş geldiniz!');">Click Me</button>
    <script>
      console.log('30GündeJavaScript\'e hoş geldiniz!')
    </script>
  </body>
</html>
```

_console.log()_  çıktısını görmek için tarayıcı konsolunu açın.

![js code from vscode](./images/js_code_vscode.png)

### Harici Script

Dahili scripte benzer şekilde, harici sicript bağlantısı da _header_ (_head_ etiketleri arasında) veya _body_ etiketleri arasında olabilir, ancak _body_ ye yerleştirilmesi tercih edilir. Öncelikle bunu uygulayabilmek için _.js_ uzantılı harici bir JavaScript dosyası oluşturmalıyız. _.js_ uzantılı tüm dosyalar JavaScript dosyalarıdır. Proje dizininizin içine _giris.js_ adında bir dosya oluşturun ve içine aşağıdaki kodu yazın. Ardından bu _.js_ dosyasını _body_ etiketinin alttaki yani kapanış etikeninin üzerine yazarak, onu bağlayın.

```js
console.log('30GündeJavaScript\'e hoş geldiniz!')
```

Şimdi bu _giris.js_ uzantılı dosyayı _index.html_ dosyanızdaki _head_ etiketleri arasına aşağıdaki gibi ekleyin:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30GündeJavaScript:Harici script</title>
    <script src="giris.js"></script>
  </head>
  <body></body>
</html>
```

_head_ etiketleri arasındaki yukarıda yazdığınız kod bulunduğu halde aşağıda yazanları uyguladığınız takdirde (yani _giris.js_ harici script bağlantısını, _head_ etiketleri arasında bıraktığınız durumda), _.js_ dosyanız _index.html_ tarafından üst üste iki defa yeniden derlenir. Siz böylelikle aynı komutların iki defa üst üste derlendiğine şahit olursunuz. Bu yüzden yukarıdaki kullanımı uyguladı iseniz, tüm kodları silin ve şimdi _body_ etikeninin kapanış bölümünün üzerine gelecek şekilde aşağıdaki gösterilen kodları yazarak bağlama yapın:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>30GündeJavaScript:Harici script</title>
  </head>
  <body>
    <!-- head veya body etiketleri arasında olabilir --> 
    <!-- Harici komut dosyasını koymak için önerilen yer burasıdır. -->
    <!-- Diğer html vb. etiketli kodlar JS bağlantısının üzerinde kalmalıdır. -->
    <script src="giris.js"></script>
  </body>
</html>
```

_console.log()_ çıktısını görmek için tarayıcı konsolunu açın.

### Çoklu Harici Scriptler

Ayrıca isterseniz birden fazla harici JavaScript dosyasını da bir web sayfasına bağlayabilirsiniz.
30GundeJS klasörü içerisinde (veya istediğiniz başka bir yerde fakat aynı klasör içinde olmak şartıyla ki _giris.js_ dosyasını da burada yine kullandığımız için daha önce kullandığınız klasör önerilir.) bir merhaba_dunya.js dosyası oluşturun ve aşağıdaki kodu yazın. 

```js
console.log('Merhaba, Dünya!')
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Çoklu Harici Scriptler</title>
  </head>
  <body>
    <script src="./merhaba_dunya.js"></script>
    <script src="./giris.js"></script>
  </body>
</html>
```

Burada _merhaba_dunya.js_ adını verdiğimiz dosyanın _giris.js_ adını verdiğimiz _.js_ dosyasının üstünde veya altında olması çok fazla önem taşımaktadır. Bu nedenle derlemenin tüm tarayıcılarda yukarıdan aşağıya olacak şekilde gerçekleştirildiğini **unutmamanız** gerekmektedir. Konsoldan da görebileceğiniz gibi yukarıdaki gibi bir kullanımda; _giris.js_ içinde bulunan _30GündeJavaScript'e hoş geldiniz!_ metni, konsolda _merhaba_dunya.js_ içine yazdığımız _Merhaba, Dünya!_ yazısından daha sonra görüntülenecektir.

![Multiple Script](./images/multiple_script.png)

## Veri türlerine giriş

JavaScript'te ve ayrıca diğer programlama dillerinde farklı tiplerde veri türleri vardır. Şunlar JavaScript'in **ilkel veri türleri**dir: _Dize (String), Sayı (Number), Boolean (Ondalıklı=, undefined (tanımsız), Null (Boş) ve Symbol (Sembol)_.

### Sayılar

- Tam sayılır (Integers): (negatif, sıfır ya da pozitif) tüm tam sayılar
  Örneğin:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Ondalıklı (Decimal), Kaydırmalı (Float) sayılar: Ondalıklı sayılar
  Örneğin _(Türkçe'deki kullanımdan farklı olarak virgül yerine nokta kullanıldığına dikkat edin.)_
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### String ler

İki tek tırnak, çift tırnak veya ters tırnak arasında yer alan, bir veya daha fazla karakterden oluşan bir harf öbekleri. Örneğin:

**Örnek:**

```js
'Asabeneh'
'Finlandiya'
'JavaScript güzel bir programlama dilidir'
'Öğrenmeyi seviyorum'
'Umuyorum, bu ilk günün tadını çıkarırsın'
`Unutma, ayrıca bir backtick kullanarak bir dize de oluşturabiliriz.`
'Bir dize, birçok sayfaya sığacak kadar fazla karaktere sahip olabilir.'
```

### Boolean lar

Bir boole değeri, _True_ veya _False_'tır. Bunu bir mantıksal bir veri değeri türü olarak anlamanız daha önemlidir. Mantıksal veri değerinden kasıt, bu kullanımın değerinin yalnızca _1_ veya _0_ olacağıdır. Herhangi bir karşılaştırmanın sonucu, doğru (_1_) veya yanlış (_0_) olan bir boole (doğru veya yanlış) değeri döndürür.

**Örnek:**

```js
true // kodunu yazdığım ve belirttiğim ışık yanıyorsa, bu doğrudur
false // kodunu yazdığım ve belirttiğim ışık yanmıyor ise, bu yanlıştır
```

### Undefined Tanımsız

JavaScript'te bir değişkene, değer atamaz isek değer undefined'tır (tanımsız). Buna ek olarak, bir fonskiyon hiçbir şey döndürmüyorsa, yine undefined (tanımsız) döndürür _(yani bize undefined çıktısını verir)_.

```js
let adim
console.log(adim) // undefined (tanımsız, tanım atanmamış), çünkü buna henüz bir değer atanmamış
```

### Null Boş

JavaScript'te _null_ Türkçe boş ile aynı anlama gelir.

```js
let bosDeger = null
```

## Veri Türlerini Kontrol Etmek

Kodlarımız büyüdüğünde veya canımız istediğinde bir veri türünün ne olduğunu kontrol etmez isteyebiliriz. Bu durumda biz JS'de **typeof** operatörünü kullanırız. Kullanımı için aşağıdaki örneğe bakın.

```js
console.log(typeof 'Asabeneh') // string (dize)
console.log(typeof 5) // number (sayı)
console.log(typeof true) // boolean (boole, ondalıklı)
console.log(typeof null) // object type (nesne türü)
console.log(typeof undefined) // undefined (tanımlanmamış ya da tanımsız)
```

## Yorumlar Yeniden

Yukarıda bahsettik fakat JavaScript'te yorum yapmanın diğer programlama dillerine benzer olduğunu unutmayın. Yorumlar, kodunuzu daha okunabilir hale getirmek için önemlidir. Yorum yapmanın iki yolu olduğunu yeniden hatırlatmakta fayda görüyorum. Çünkü, istenildiği takdirde kodlar da yorum haline kolaylıkla getirilebilir ki, yukarıda bundan bahsetmediğimizi unutmayın: 

- _Tek satırdaki yorum_
- _Çok satırlı yorum_

```js
// kodun açıklamasındaki yorumum
// let adim = 'Asabeneh'; tek satirda yer alan yorumum
// let soyadim = 'Yetayeh'; tek satirda yer alan yorumum
```

Çok satırlı yorum:

```js
/*
  let konumum = 'Helsinki';
  let yas = 100;
  let evlilik = true;
  İşte bu çok satırlı yoruma en iyi örneklerden birisidir. 
  Çünkü kod da içerebilir ve yazdığınız hiçbir şey derlenerek kullanıcıya gösterilmez.
  Kullanıcının her zaman kodlardan erişebileceğini de unutmamak gerekir.
*/
```

## Variables Değişkenler

Değişkenlere (_variables_) veri (_containers_) _konteynırları_ ya da veri _kapsayıcıları_ diyebiliriz. Unutmayınız ki değişkenler, verileri bir bellek (_RAM_) konumunda depolamakla görevlidir ve bunun için kullanılırlar. Siz bir variables atadığınızda, bunun için bellekte bir konum ayrılır. Bundan sonra bir değişkene veri atadığınızda ise söz konusu bellekteki bu konum atadığınız veri ile doldurulacaktır. Bu değişken, boş bırakılır ise yukarıda da bahsettiğimiz gibi _null_ veya bir diğer atanmamış ise _undefined_ şeklinde bir veriye sahip olacaktır. Bir değişken için İngilizcesi olan _variables_ terimini kullanmanız şiddetle önerilir. Bir variables oluşturmak için bizler _var_, _let_, ya da _const_ anahtar kelimelerini (_keywords_) kullanırız.

Değişken değerinin farklı bir yerde değiştirilmesi gerekiyorsa, _let_ kullanırız. Eğer değişken verisi hiçbir yerde değişmeyecek ise bu durumda _const_ kullanırız. Örneğin, PI, ülke adı ve yerçekimi değişmediğinden dolayı bunlar için _const_ kullanırız. Bu eğitimde biz _var_ kullanmayacağız ve kullanmanızı da tavsiye etmiyorum. Çok fazla kaçağı olduğundan dolayı _var_ değişken bildirimini kullanmanız hatalara neden olacaktır. Biz _var_, _let_ ve _const_ hakkında diğer bölümlerde (scope/kapsam) çok daha ayrıntılı konuşacağız. Fakat şu anda bunlarla ilgili bu kadar açıklama yeterlidir.

Geçerli bir JavaScript değişkeni, aşağıdaki adlandırma kurallarına uymalıdır:

- Bir JavaScript değişkeni adı, asla bir sayı ile başlayamaz.
- Bir JavaScript değişken adı, dolar ve alt çizgi işareti dışında başka bir özel karakter içeremez.
- Bir JavaScript değişken adının, camelCase kuralıyla oluşturulması önerilir.
- Bir JavaScript değişken adının, kelimeleri arasında boşluk olamaz.

Aşağıda geçerli JavaScript değişkenlerine örnekler verilmiştir.

```js
onAdi
ilkAdi
ikinciAdi
sonAdi
ulke
sehir
buyukSehir
yas
evliMi

ilk_adi
soy_adi
evli_mi
buyuk_sehir

sayi1
sayi_1
_sayi_1
$sayi1
yil2020
yil_2020
```

Listenin ilk bölümünde belirtilen değişken isimleri JavaScript'te camelCase bildirim kuralına uyularak yazılmıştır. Biz eğitimimizde, camelCase değişken adı yazım kurallarını uygulayacağız.

Geçersiz değişken adlarına örnekler:

```sh
  ilk-adi
  1_sayi
  sayi_#_1
```

Şimdi değişkenleri farklı veri türleriyle birlikte tanımlayalım. Değişken bildirmek yani tanımlamak için değişken adından önce _let_ ya da _const_ anahtar kelimelerini kullanmamız gerekir. Değişken adının ardından eşittir işareti (atama operatörü) ve sonrasında ise değeri (atanmış veri) yazarız.

```js
// Sözdizimi
let degiskeninAdi = deger
```

**Değişken bildirimine dair örnekler**

```js
// Farklı veri türlerinin, farklı değişkenlerini bildirme
let ilkAdi = 'Asabeneh' // bir kişinin adı
let sonAdi = 'Yetayeh' // bir kişinni soyadı
let ulke = 'Finlandiya' // ülke
let sehir = 'Helsinki' // başkent
let yas = 100 // yaş
let evliMi = true // doğru

console.log(ilkAdi, sonAdi, ulke, sehir, yas, evliMi)
```

```sh
Asabeneh Yetayeh Finlandiya Helsinki 100 true
```

```js
// Değişkenlerde sayı değerlerini bildirme
let yas = 100 // yaş
const yercekimi = 9.81 // m/s2 cinsinden yer çekimi
const kaynamaNoktasi = 100 // suyun kaynama noktası, °C cinsinden sıcaklık
const PI = 3.14 // geometrik sabit
console.log(yercekimi, kaynamaNoktasi, PI)
```

```sh
9.81 100 3.14
```

```js
// Değişkenler ayrıca virgülle ayrılmış bir satırda bildirilebilir.
let isim = 'Asabeneh', // isim
meslek = 'öğretmen', //meslek
ikamet = 'Finlandiya' //yaşadığı yer
console.log(isim, meslek, ikamet)
```

```sh
Asabeneh öğretmen Finlandiya
```

01-Day klasörü içindeki _index.html_ dosyasını tarayıcınızda açarsanız, şu sonucu alıyor olmalısınız:

![Birinci gün](./images/day_1.png)

🌕 Harikasınız! 1. gün mücadelesini tamamladınız ve mükemmel olma yolunda ilerliyorsunuz. Şimdi öğrendiklerinizi, geliştirmek için beyin egzersizleri yapmanız gerekiyor.

# 💻 Birinci Gün: Egzersizler

1. _"Yorumlar kodu okunabilir hale getirmeye yardımcı olur"_ yazan tek satırlı bir yorum yazın
2. _"30GundeJavaScript eğitimine hoş geldiniz"_ yazan başka bir yorum satırı oluşturun
3. _"Yorumlar kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici bir hale getirir."_ yazılı, birden çok satıra yayılmış çok satırlı bir yorum yazın
4. Bir degisken.js isimli dosya oluşturun ve bu _.js_ dosyasında string, boolean, undefined ve null veri türlerinde değişken yazın
5. Bir veriturleri.js isimli dosya oluşturun farklı veri türlerindeki verileri kontrol etmek için JavaScript **_typeof_** operatörünü kullanın. Tüm değişkenlerin veri türlerini kontrol ettiğinizden emin olun
6. Herhangi bir değer atamadan dört adet değişken yazın
7. Değer atamadığınız bu dört değişkene şimdi birer değer atayın
8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
9. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
10. Şimdi _benimYasim_ ve _seninYasin_ adlı iki değişken oluşturun ve bunlara aşağıdaki değerleri atayın. Ardından bunları tarayıcının konsoluna yazdırın

```sh
Ben 25 yaşındayım.
Sen 30 yaşındasın.
```

🎉 TEBRİKLER ! 🎉

[2. Gün >>](./02_Day_Data_types/02_day_data_types.md)
