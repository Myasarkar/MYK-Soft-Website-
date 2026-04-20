import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Smartphone, 
  Monitor, 
  Code2, 
  Play, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Laptop,
  ArrowRight,
  Github,
  ExternalLink,
  Menu,
  X,
  Star
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAgAnaliziExpanded, setIsAgAnaliziExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <Network className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">MYK <span className="text-indigo-500">Soft</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-400">
               <a href="#hakkimizda" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-indigo-500 pb-1">Hakkımızda</a>
               <a href="#hizmetler" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-indigo-500 pb-1">Hizmetler</a>
               <a href="#uygulamalar" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-indigo-500 pb-1">Uygulamalar</a>
               <a href="https://github.com/MYKSoft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-indigo-500 pb-1">
                 <Github className="w-4 h-4" /> GitHub
               </a>
               <a href="#iletisim" className="px-5 py-2 bg-neutral-900 border border-neutral-700 rounded-full text-white hover:bg-neutral-800 transition-colors">
                 İletişim
               </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-8 flex flex-col gap-4 text-center">
                <a href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2">Hakkımızda</a>
                <a href="#hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2">Hizmetler</a>
                <a href="#uygulamalar" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2">Uygulamalar</a>
                <a href="https://github.com/MYKSoft" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-neutral-300 hover:text-white transition-colors py-2 flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <div className="pt-6 mt-2 border-t border-neutral-800">
                  <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex w-full justify-center px-5 py-4 bg-indigo-600 rounded-full text-white font-bold hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                    İletişim
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
        {/* Abstract Dark Tech Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
               <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
               <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Bireysel Yazılım Girişimi</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              İhtiyaçlarınızı Analiz Ediyor, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Geleceği Kodluyoruz.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              MYK Soft, karmaşık iş süreçlerinizi analiz ederek size özel, ölçeklenebilir ve modern Website, Mobil ve Masaüstü yazılım çözümleri sunar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#hizmetler" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2">
                Hizmetleri Keşfet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#iletisim" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white font-medium hover:bg-neutral-800 transition-all">
                Projeyi Konuşalım
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section (Hakkimizda) */}
      <section id="hakkimizda" className="py-20 bg-transparent border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">MYK Soft</h2>
                <div className="w-12 h-12 bg-neutral-800 border border-neutral-700 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                  <Network className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <p className="text-xl text-neutral-400 leading-relaxed border-l-4 border-indigo-500 pl-6 py-2">
                Genel ihtiyaçları analiz ederek en doğru ve verimli yazılım çözümlerini üretiyoruz. Teknoloji ile hayatı kolaylaştırıyoruz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-neutral-300 font-medium bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span>Kullanıcı Odaklı</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-300 font-medium bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <span>Yenilikçi Çözümler</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 relative"
            >
               {/* Abstract decorative element representing software crafting */}
               <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl opacity-50" />
                <div className="relative h-full w-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col p-8">
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-3 h-3 rounded-full bg-neutral-700" />
                     <div className="w-3 h-3 rounded-full bg-neutral-700" />
                     <div className="w-3 h-3 rounded-full bg-neutral-700" />
                   </div>
                   <div className="flex-1 space-y-4">
                     <div className="h-4 w-3/4 bg-neutral-800 rounded animate-pulse" />
                     <div className="h-4 w-1/2 bg-indigo-900/30 rounded animate-pulse" />
                     <div className="h-4 w-5/6 bg-neutral-800 rounded animate-pulse" />
                     <div className="h-4 w-2/3 bg-neutral-800 rounded animate-pulse" />
                     <div className="mt-8 p-4 bg-neutral-950 rounded-xl border border-neutral-800">
                        <Code2 className="w-8 h-8 text-indigo-400 mb-2" />
                        <div className="h-2 w-1/3 bg-indigo-900/50 rounded" />
                     </div>
                   </div>
                </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Her platformda kusursuz çalışan, işinizi büyütecek modern yazılımlar geliştiriyoruz.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Globe className="w-6 h-6" />}
              title="Web Yazılım"
              description="SEO uyumlu, hızlı ve modern arayüzlü web platformları."
              iconColor="text-indigo-400"
              delay={0}
            />
            <ServiceCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="Android Uygulama"
              description="Geniş kitlelere hitap eden, optimize edilmiş yerel uygulamalar."
              iconColor="text-green-400"
              delay={0.1}
            />
            <ServiceCard 
              icon={<Smartphone className="w-6 h-6" />}
              title="iOS Uygulama"
              description="Apple ekosistemine tam uyumlu, premium deneyim odaklı yapılar."
              iconColor="text-blue-400"
              delay={0.2}
            />
            <ServiceCard 
              icon={<Laptop className="w-6 h-6" />}
              title="Windows Masaüstü"
              description="Kurumsal ihtiyaçlar için güçlü ve güvenli masaüstü çözümleri."
              iconColor="text-cyan-400"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Featured Application (Portfolio) */}
      <section id="uygulamalar" className="py-24 bg-transparent border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Öne Çıkan Referanslar</h2>
            <a href="https://github.com/MYKSoft" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
              Tüm projeleri GitHub'da gör <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Main App Card - Lyndor */}
            <a href="https://lyndor.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-3xl bg-neutral-900 overflow-hidden relative shadow-2xl group cursor-pointer border border-neutral-800 flex flex-col md:flex-row">
               {/* Image Section */}
               <div className="md:w-3/5 h-64 md:h-auto relative overflow-hidden">
                 <div className="absolute inset-0 bg-[#C5A059]/20 mix-blend-color-burn z-10 transition-opacity duration-500 group-hover:opacity-0" />
                 <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                 }} />
               </div>
               
               {/* Content Section */}
               <div className="md:w-2/5 p-8 flex flex-col justify-center relative bg-gradient-to-r from-neutral-900 to-neutral-950">
                  <div className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-3">
                    Web & SEO Optimizasyonu
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#C5A059] transition-colors font-serif">Lyndor Beauty</h3>
                  <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                    Çatalca'da hizmet veren güzellik ve wellness merkezi için hazırladığımız SEO uyumlu, hızlı ve şık rezervasyon odaklı kurumsal web sitesi.
                  </p>
                  <div className="inline-flex items-center gap-2 text-indigo-400 font-medium group-hover:text-white transition-colors">
                    Canlı Siteyi İncele <ExternalLink className="w-4 h-4" />
                  </div>
               </div>
            </a>

            {/* Android App Card - Ağ Analizi */}
            <div className="rounded-3xl bg-neutral-900 overflow-hidden relative shadow-2xl group border border-neutral-800 flex flex-col md:flex-row-reverse">
               {/* Mobile App Visual Section */}
               <div className="md:w-2/5 h-64 md:h-auto bg-[#070e1a] flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-l border-neutral-800">
                  <div className="absolute inset-0 bg-cyan-500/5 mix-blend-color-burn z-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" />
                  
                  {/* Mock phone/UI visual */}
                  <div className="relative mt-32 w-56 h-96 bg-neutral-950 border-[6px] border-neutral-800 border-b-0 rounded-t-[2.5rem] flex flex-col items-center pt-4 overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:translate-y-[-10px]">
                    <div className="w-16 h-1.5 bg-neutral-800 rounded-full mb-6" />
                    {/* UI placeholder */}
                    <div className="w-full h-full bg-neutral-900 justify-center p-6 flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] mb-4">
                         <div className="flex items-end gap-[3px] h-[55%] w-[55%] mb-1">
                           <div className="w-full h-1/3 bg-teal-400 rounded-sm" />
                           <div className="w-full h-1/2 bg-teal-400 rounded-sm" />
                           <div className="w-full h-3/4 bg-cyan-400 rounded-sm" />
                           <div className="w-full h-full bg-cyan-400 rounded-sm" />
                         </div>
                      </div>
                      <div className="text-cyan-400 font-bold text-2xl">-45 dBm</div>
                      <div className="text-neutral-500 text-xs mt-1">Mükemmel Sinyal</div>
                      <div className="w-full h-12 bg-neutral-950 rounded-xl mt-6 border border-neutral-800" />
                    </div>
                  </div>
               </div>

               {/* Content Section */}
               <div className="md:w-3/5 p-8 flex flex-col justify-center relative bg-gradient-to-l from-neutral-950 to-neutral-900">
                  <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5" /> Android Uygulama
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-16 h-16 bg-[#040810] border-2 border-cyan-400 rounded-2xl flex items-center justify-center p-2 shadow-lg shrink-0">
                       <div className="w-full h-full rounded-full border-2 border-cyan-400 flex items-end justify-center p-1.5">
                         <div className="flex items-end gap-[2px] h-[70%] w-[70%] mb-1">
                           <div className="w-full h-1/3 bg-teal-400 rounded-sm" />
                           <div className="w-full h-1/2 bg-teal-400 rounded-sm" />
                           <div className="w-full h-3/4 bg-cyan-400 rounded-sm" />
                           <div className="w-full h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] rounded-sm" />
                         </div>
                       </div>
                     </div>
                     <div>
                       <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-1">Ağ Analizi <span className="hidden sm:inline-block text-sm font-normal text-neutral-400">(Erken Erişim)</span></h3>
                       <p className="text-sm text-cyan-400 font-medium tracking-wide">MYK Soft</p>
                     </div>
                  </div>

                  <div className="text-sm text-neutral-400 mb-8 leading-relaxed space-y-3">
                    <p>
                      <strong className="text-white">Profesyonel ağ analizi, sinyal gücü takibi ve hız testi uygulaması.</strong><br/>
                      Ağ bağlantınızın kalitesini merak mı ediyorsunuz? Ağ Analizi, mobil ve Wi-Fi bağlantılarınızı en ince ayrıntısına kadar incelemeniz, sinyal gücünü takip etmeniz ve internet hızınızı ölçmeniz için tasarlanmış profesyonel bir araçtır.
                    </p>
                    
                    <AnimatePresence>
                      {isAgAnaliziExpanded && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 overflow-hidden pt-2"
                        >
                          <p>Modern ve şık arayüzü ile hem teknik kullanıcılar hem de bağlantı sorunlarını teşhis etmek isteyen herkes için mükemmel bir çözümdür.</p>
                          
                          <div>
                            <strong className="text-white flex items-center gap-2 mb-2">🚀 Öne Çıkan Özellikler:</strong>
                            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                              <li><strong className="text-neutral-300">Gerçek Zamanlı Sinyal Takibi:</strong> Hücresel ağınızın sinyal gücünü (dBm) anlık olarak izleyin. Operatör bilgisi, ağ tipi (4G/5G) ve hücre kimliği gibi teknik detaylara anında erişin.</li>
                              <li><strong className="text-neutral-300">Entegre Hız Testi:</strong> İnternet performansınızı saniyeler içinde ölçün. Ping süresi, indirme (download) ve yükleme hızlarınızı grafikle görüntüleyin.</li>
                              <li><strong className="text-neutral-300">Gelişmiş Ağ Analizi:</strong> Wi-Fi ve hücresel bağlantılarınızın teknik parametrelerini (SSID, IP adresi, ağ geçidi, DNS) detaylıca inceleyin.</li>
                              <li><strong className="text-neutral-300">Tam Ekran (Immersive) Mod:</strong> Kesintisiz veri takibi deneyimi için özel dashboard tasarımı.</li>
                              <li><strong className="text-neutral-300">Dinamik ve Modern Arayüz:</strong> Android 15 (API 35) standartlarına tam uyumlu, ekran boyutuna göre optimize edilmiş akıcı tasarım.</li>
                              <li><strong className="text-neutral-300">Gizlilik Odaklı:</strong> Verileriniz cihazınızda yerel olarak işlenir. Kişisel veriniz sunucularımızda depolanmaz veya paylaşılmaz.</li>
                            </ul>
                          </div>

                          <div>
                            <strong className="text-white flex items-center gap-2 mb-1">🛠️ Teknik Detaylar:</strong>
                            <p>Uygulamamız, en doğru verileri sunmak için gelişmiş ağ kütüphanelerini kullanır. Bağlantı kopmaları veya düşük hız sorunlarını teşhis etmek için idealdir.</p>
                          </div>

                          <div>
                            <strong className="text-white flex items-center gap-2 mb-1">🔐 İzinler Hakkında:</strong>
                            <p>Uygulamanın baz istasyonu ve ağ detaylarını gösterebilmesi için sistem gereksinimi olan "Konum" ve "Telefon Durumu" izinleri gereklidir. Bu izinler sadece teknik analiz amaçlı kullanılır ve gizliliğiniz MYK Soft güvencesi altındadır.</p>
                          </div>
                          
                          <p className="text-cyan-400 font-medium">Bağlantınızı kontrol altına alın ve ağ performansınızı profesyonel bir düzeyde takip etmeye başlayın!</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button 
                      onClick={(e) => { e.preventDefault(); setIsAgAnaliziExpanded(!isAgAnaliziExpanded); }}
                      className="text-cyan-400 hover:text-cyan-300 font-bold text-xs uppercase tracking-wider transition-colors focus:outline-none flex items-center gap-1 mt-2"
                    >
                      {isAgAnaliziExpanded ? "Daha Az Göster" : "Devamını Oku..."}
                    </button>
                  </div>

                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-full font-bold text-sm transition-colors border border-cyan-500/20 w-fit mt-auto shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                     Google Play'de İncele <ExternalLink className="w-4 h-4" />
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="iletisim" className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Projeniz için Hazır mısınız?</h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Fikrinizi hayata geçirmek için buradayız. İhtiyaçlarınızı analiz edip size özel çözümler sunalım.
          </p>
              <a href="mailto:iletisim@myksoft.example.com" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full text-lg hover:bg-indigo-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                Bize Ulaşın
              </a>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Analiz Edilen Projeler</span>
              <span className="text-lg font-bold text-white">124+</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Yayınlanan Uygulamalar</span>
              <span className="text-lg font-bold text-white">48</span>
            </div>
          </div>
          
            <div className="flex flex-col items-center md:items-end">
              <a href="https://github.com/MYKSoft" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors mb-3">
                 <Github className="w-5 h-5" /> Code on GitHub
              </a>
              <p className="text-sm text-neutral-500 mb-1">&copy; {new Date().getFullYear()} MYK Soft. Tüm hakları saklıdır.</p>
              <p className="text-[11px] text-indigo-500 italic">Sınırları zorlayan bireysel kodlama.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, iconColor, delay }: { icon: React.ReactNode, title: string, description: string, iconColor: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-neutral-900/40 p-8 rounded-2xl border border-neutral-800 hover:bg-neutral-900 transition-colors group"
    >
      <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6">
        <div className={iconColor}>{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed mb-6">
        {description}
      </p>
      <div className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-400 uppercase tracking-widest group-hover:text-indigo-400 transition-colors cursor-pointer">
        Detaylı İncele 
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}
