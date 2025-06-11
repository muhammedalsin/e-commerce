import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-2">
            LİDER BİLGİSAYAR
          </h2>
          <p className="text-gray-400">
            Teknoloji ve bilgisayar ürünlerinde uzmanlaşmış modern bir
            mağazayız. Kalite ve güven ile hizmetinizdeyiz.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white mb-2">İletişim</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={18} /> info@liderbilgisayar.com
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={18} /> +90 555 111 22 33
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={18} /> Merkez, D010, 55020 İlkadım/Samsun
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Bizi Takip Edin
          </h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 Muhammed Alsin. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
