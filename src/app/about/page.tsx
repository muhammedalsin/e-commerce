import { Laptop, ShieldCheck, Truck, Star, MonitorSmartphone, BadgeCheck } from "lucide-react";

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
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
