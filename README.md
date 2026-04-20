# MYK Soft Landing Page

![MYK Soft](public/og-image.jpg)

MYK Soft bireysel yazılım girişiminin resmi portfolyo ve lansman sayfası. Modern, performans odaklı ve SEO uyumlu mimarisiyle, potansiyel müşterilere Web, Mobil ve Masaüstü çözümleri sunar.

## 🚀 Teknolojiler
- **Framework:** React + Vite
- **Stil:** Tailwind CSS (v4)
- **Animasyon:** Framer Motion
- **İkonlar:** Lucide React
- **Optimizasyon:** Tam SEO ve A11y entegrasyonu, JSON-LD Schema.

## 💻 Yerel Kurulum (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için:

```bash
# 1. Repoyu klonlayın
git clone https://github.com/MYKSoft/myksoft-website.git

# 2. Dizin içerisine girin
cd myksoft-website

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
```

## 🌐 Dağıtım (Deployment)

Proje Vercel ile optimize edilmiştir. `vercel.json` içerisinde tüm SPA yönlendirmeleri, Header ve Cache kuralları tanımlıdır.

Aşağıdaki butona tıklayarak tek tıkla kendi Vercel hesabınıza dağıtabilirsiniz:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMYKSoft%2Fmyksoft-website)

## 🔒 Otomatik Optimizasyonlar
- GitHub Dependabot: Haftalık bağımlılık güncellemeleri açık.
- Vercel Assets Cache: Asset klasörü altındaki statik dosyalar 1 yıl süreyle tarayıcıda önbelleğe (Immutable) alınır.
- Security Headers: XSS ve Frame saldırılarına karşı default güvenli başlıklar entegrelidir.

## 📄 Lisans

Bu proje, açık kaynaklı [MIT Lisansı](LICENSE) kapsamında lisanslanmıştır. Kodlar özgürce kullanılabilir, değiştirilebilir ve dağıtılabilir. Telif hakkı (c) 2026 Mustafa Yaşar KAR (MYK Soft) aittir.
