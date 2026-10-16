# front-end_Assignment1

## 1. Apa fungsi utama HTML?

Menurut saya, fungsi utama HTML adalah untuk membuat, mendesign, dan juga mengontrol sebuah
tampilan web page beserta isinya sedemikian rupa, sehingga nantinya dapat di publikasikan secara online di sebuah browser untuk dilihat pengguna.

## 2. Apa fungsi utama CSS?

Cascading Style Sheet (CSS) on the other hand, menurut saya berfungsi sebagai sebuah pengontrol tampilan, gaya, dan tata letak elemen HTML agar sebuah web page dapat terlihat lebih menarik, rapi, dan professional.

## 3. Mengapa external CSS digunakan?

Simple nya adalah, apabila kita manempatkan konten css di page yang sama dengan html code akan terlihat lebih panjang dan kurang rapih. Perhatikan code HTML dan CSS dibawah ini:

```html
<!-- Contoh HTML -->
<div class="end-article">
  <h2>TECHNICAL ABILITIES</h2>
  <div class="skills-container">
    <div class="skills-box">
      <h3 class="skills-title">Software Skills</h3>
      <div class="skills-list">
        <div class="skills-item">Canva</div>
        <div class="skills-item">Microsoft Excel</div>
        <div class="skills-item">Google Sheets</div>
        <div class="skills-item">Alight Motion</div>
        <div class="skills-item">Capcut</div>
      </div>
    </div>
  </div>
</div>
```

```css
/* Contoh CSS */
.end-article {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  border-radius: 12px;
  box-shadow: 2px 6px 6px rgb(168, 91, 53);
  margin: auto;
  background: rgb(239, 189, 127);
  font-family:
    "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin-top: 30px;
}

.skills-container {
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 20px;
  gap: 10px;
}

.skills-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  padding: 20px;
  border: 2px solid #878e96;
  border-radius: 10px;
  background-color: bisque;
  margin-bottom: 30px;
}

.skills-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(239, 189, 127);
  -webkit-text-stroke: 1px #878e96;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}

.skills-item {
  padding: 5px 10px;
  margin: 5px;
  border: 1px solid #878e96;
  border-radius: 5px;
  color: #878e96;
}
```

Imagine apabila setiap class css yang di panggil atau digunakan ini kita tempatkan pada kedua page yang sama? sudah pasti kode akan terlihat lebih panjang, tidak rapih, dan sulit untuk maintenance. Maka dari itu, externall css digunakan karena merupakan metode yang terbaik untuk memisahkan konten (HTML) dari desain (CSS) secara total, sehingga nantinya pengeditan dan pengelolaan web page nya menjadi jauh lebih efisien.

## 4. Apa fungsi `<header>, <nav>, <article>, dan <footer>`?​

Ke - empat tag ini merupakan elemen semantik dalam HTML5 yang menurut saya berfungsi untuk memberikan struktur dan arti yang jelas pada bagian sebuah halaman web.

## 5. Sebutkan satu perubahan CSS yang Anda lakukan pada latihan.​

Salah satu perubahan yang saya lakukan pada latihan adalah mengubah halaman layout halaman dengan menggunakan CSS flexbox secara menyeluruh pada website untuk mengatur tata letak navigasi, header, section education, contact, skills, hobbie, dan langugaes. Saya menggunakan flexbox agar website yang saya gunakan bisa terlihat lebih terstruktur dan layout yang terlihat lebih modern daripada latihan awal yang hanya menggunakan elemen HTML dasar.

## Refleksi: bagian mana yang sudah dikuasai dan bagian mana yang masih perlu dilatih?

Sejauh ini dengan bantuan online HTML documentation dan juga modul ppt, saya telah memahami bagaimana membangun struktur halaman web dan mengatur tampilan halaman web dengan tag dan juga css basic. Saya juga telah menguasai penggunaan external css yang memisahkan struktur dan tampilan sekaligus cara menghubungkan keduanya. Hal - hal yang menurut saya perlu dilatih adalah menggunakan tag maupun style css tanpa perlu menggunakan sebuah Online Documentation maupun modul belajar, saya percaya hal ini dapat saya lakukan apabila saya terus menekuni dan belajar terkait dengan tag dan style yang akan saya gunakan maupun yang telah saya gunakan.
