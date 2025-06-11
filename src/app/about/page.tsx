import {
  Laptop,
  ShieldCheck,
  Truck,
  Star,
  MonitorSmartphone,
  BadgeCheck,
} from "lucide-react";

const AboutPage = () => {
  return (
    <section className="fix-height container m-auto">
      {/* <h1 className="text-3xl font-bold text-gray-800 p-5">
        About This App
      </h1>
      <p className="px-5 text-gray-600 text-xl">
        The best web hosting solution for your online success
      </p> */}

      <div className="bg-white min-h-screen py-16 px-6 md:px-20 text-gray-800">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Başlık */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
              Hakkımızda
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bilgisayar ve teknoloji ürünlerinde uzmanlaşmış, kaliteli ve
              güvenilir çözümler sunan bir teknoloji mağazasıyız.
              Müşterilerimize en iyi ürünleri uygun fiyatlarla ulaştırmayı
              hedefliyoruz.
            </p>
          </div>

          {/* Vizyon ve Değerler */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2 mb-3">
                <Star className="w-5 h-5" /> Vizyonumuz
              </h2>
              <p className="text-gray-700">
                Türkiye’nin dört bir yanındaki teknoloji tutkunları için ilk
                tercih edilen bilgisayar satış noktası olmak.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5" /> Değerlerimiz
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Güven ve kalite</li>
                <li>Müşteri memnuniyeti</li>
                <li>Şeffaflık</li>
                <li>Yenilikçilik</li>
              </ul>
            </div>
          </div>

          {/* Neden Biz */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BadgeCheck className="w-6 h-6" /> Neden Bizi Tercih Etmelisiniz?
            </h2>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <Laptop className="w-5 h-5 text-blue-600 mt-1" />
                Orijinal ve garantili ürünler
              </li>
              <li className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-blue-600 mt-1" />
                Hızlı ve ücretsiz kargo
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-1" />
                Güvenli ödeme sistemleri
              </li>
              <li className="flex items-start gap-3">
                <MonitorSmartphone className="w-5 h-5 text-blue-600 mt-1" />
                Geniş ürün yelpazesi
              </li>
            </ul>
          </div>

          {/* İkinci El Ürünler */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <Laptop className="w-6 h-6" /> İkinci El Ürünlerimiz
            </h2>
            <p className="text-gray-700 mb-4">
              Bütçesini düşünen müşterilerimiz için, test edilmiş ve garantili
              ikinci el laptop ve masaüstü bilgisayarlar sunuyoruz.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Bakımlı, temiz ve çalışır durumda cihazlar</li>
              <li>Teknik kontrol sonrası satışa sunulan ürünler</li>
              <li>Detaylı ürün açıklamaları ve uygun fiyatlar</li>
              <li>7 gün iade garantisi</li>
            </ul>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-2xl shadow-md border">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              Her türlü soru, görüş veya öneriniz için aşağıdaki formu
              doldurabilirsiniz.
            </p>
            <div className="bg-white py-16 px-6 md:px-20">
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
                {/* FORM */}
                <form
                  method="post"
                  action="mailto:muhammedpay10@gmail.com"
                  className="space-y-5 bg-gray-50 p-8 rounded-xl shadow-lg h-full"
                >
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">
                    Bize Ulaşın
                  </h2>

                  <div>
                    <label className="block text-gray-700 mb-1">Adınız</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Adınızı girin"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="E-posta adresinizi girin"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-1">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Mesajınızı yazın"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                  >
                    Gönder
                  </button>
                </form>

                {/* HARİTA */}
                <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[550px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5198043.663770883!2d44.09858996537961!3d41.293835171259616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877004824520b%3A0xf3bc3e0a41d6bc05!2zTMSwREVSIELEsExHxLBTQVlBUiBNQcSeQVpBU0k!5e0!3m2!1sar!2str!4v1749635773055!5m2!1sar!2str"
                    className="w-full h-full"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lider Bilgisayar Mağazası"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
