
import React, { useEffect } from 'react';
import { AlertCircle, CheckCircle, PieChart, Settings, Server, Shield, Users, Activity, BarChart3, HeartPulse } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import SolutionItem from '@/components/SolutionItem';
import StatItem from '@/components/StatItem';
import Footer from '@/components/Footer';

const Index = () => {
  // Função para animar elementos quando ficam visíveis no viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-in-left');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d45a6] leading-tight mb-6 animate-fade-in opacity-0">
                Transforme a Gestão do Seu Hospital com Tecnologia de Alto Desempenho
              </h1>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in opacity-0 delay-200">
                Menos retrabalho, mais eficiência e total conformidade regulatória.
                Soluções tecnológicas personalizadas para hospitais que buscam otimização, segurança e redução de custos.
              </p>
              <a 
                href="https://wa.me/5511915002524" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button inline-block animate-fade-in opacity-0 delay-300"
              >
                CONVERSAR COM UM ESPECIALISTA
              </a>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative animate-scale-in opacity-0">
                <div className="absolute inset-0 bg-[#0d45a6] rounded-xl opacity-10 transform -rotate-3"></div>
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-[#0d45a6]">
                      <CheckCircle size={20} />
                      <span className="text-sm font-medium">Eficiência</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#0d45a6]">
                      <Shield size={20} />
                      <span className="text-sm font-medium">Segurança</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#0d45a6]">
                      <PieChart size={20} />
                      <span className="text-sm font-medium">Otimização</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#0d45a6]">
                      <BarChart3 size={20} />
                      <span className="text-sm font-medium">Analytics</span>
                    </div>
                  </div>
                  <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="text-sm font-medium">Sistema Integrado</div>
                    </div>
                    <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-[#0d45a6] rounded-full" style={{ width: '87%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Integração TASY</span>
                      <span>87%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="benefits" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0d45a6] mb-12 animate-fade-in opacity-0">
            Os desafios da sua instituição têm solução:
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <SolutionItem 
                text="Falta de integração entre setores? Reduza erros operacionais e facilite a comunicação entre departamentos."
                delay="delay-100"
              />
              <SolutionItem 
                text="Alto custo operacional? Automatize processos e elimine tarefas redundantes para cortar desperdícios."
                delay="delay-200"
              />
              <SolutionItem 
                text="Pressão para atender normas regulatórias? Tenha total conformidade com LGPD, ANVISA e CNES sem complicações."
                delay="delay-300"
              />
              <SolutionItem 
                text="Dificuldade na gestão de dados? Decida com mais precisão usando dashboards inteligentes e relatórios personalizados."
                delay="delay-400"
              />
              
              <div className="pt-4">
                <a 
                  href="https://wa.me/5511915002524" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button inline-block animate-fade-in opacity-0 delay-300"
                >
                  SOLICITAR ORÇAMENTO
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-scale-in opacity-0 delay-200 transition-all duration-500 hover:scale-105">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/1336967b-6784-440a-9216-426ccf77e822.png" 
                  alt="Tecnologia na saúde" 
                  className="w-full h-auto rounded-xl" 
                />
                <div className="absolute inset-0 bg-[#0d45a6] opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
                
                {/* Elementos gráficos sobrepostos */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0d45a6] mb-12 animate-fade-in opacity-0">
            Como ajudamos gestões hospitalares
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Server size={32} />}
              title="Implementação TASY"
              description="Integração completa para maior eficiência e redução de custos."
              delay="delay-100"
            />
            <FeatureCard
              icon={<Users size={32} />}
              title="Consultoria Especializada"
              description="Soluções customizadas para atender as necessidades do seu hospital."
              delay="delay-200"
            />
            <FeatureCard
              icon={<Activity size={32} />}
              title="Dashboards e Relatórios"
              description="Dados estratégicos para tomadas de decisão mais assertivas."
              delay="delay-300"
            />
            <FeatureCard
              icon={<AlertCircle size={32} />}
              title="Suporte Técnico Especializado"
              description="Atendimento ágil para evitar interrupções e problemas operacionais."
              delay="delay-400"
            />
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://wa.me/5511915002524" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button inline-block animate-fade-in opacity-0 delay-300"
            >
              QUERO SABER MAIS
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0d45a6] mb-12 animate-fade-in opacity-0">
            Resultados comprovados por hospitais de referência
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <StatItem 
              value="+30%" 
              label="de eficiência na gestão hospitalar"
              delay="delay-100"
            />
            <StatItem 
              value="25%" 
              label="Redução nos custos operacionais"
              delay="delay-200"
            />
            <StatItem 
              value="99%" 
              label="de conformidade com exigências regulatórias"
              delay="delay-300"
            />
          </div>
          
          <p className="text-center text-gray-700 max-w-3xl mx-auto animate-fade-in opacity-0 delay-400">
            A tecnologia certa faz toda a diferença para a qualidade do atendimento, a sustentabilidade financeira do seu hospital e, principalmente, a experiência do paciente.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0d45a6] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 animate-fade-in opacity-0">
            Fale com um Especialista e Descubra como Transformar sua Gestão
          </h2>
          <p className="text-lg mb-10 animate-fade-in opacity-0 delay-200">
            Agende uma demonstração gratuita agora mesmo!
          </p>
          <a 
            href="https://wa.me/5511915002524" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-[#0d45a6] font-medium rounded-full py-3 px-8 transition-all duration-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-md hover:shadow-lg inline-block animate-fade-in opacity-0 delay-300"
          >
            QUERO UMA VISITA GRATUITA
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
