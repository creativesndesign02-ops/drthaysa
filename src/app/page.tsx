'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Calendar, Award, Heart, Stethoscope, Brain, Zap, Users, Star, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      condition: "Fibromialgia",
      text: "Após anos sofrendo com dores constantes, encontrei na Dra. Thaysa não apenas alívio, mas uma nova perspectiva de vida. Seu cuidado e dedicação transformaram minha rotina.",
      rating: 5
    },
    {
      name: "João Santos",
      condition: "Dor Crônica na Coluna",
      text: "O tratamento personalizado da Dra. Thaysa me devolveu a capacidade de trabalhar e aproveitar momentos com minha família. Profissional excepcional e muito humana.",
      rating: 5
    },
    {
      name: "Ana Carolina",
      condition: "Enxaqueca Crônica",
      text: "Depois de consultar diversos especialistas, foi com a Dra. Thaysa que finalmente encontrei um tratamento eficaz. Hoje posso dizer que tenho qualidade de vida novamente.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: Brain,
      title: "Dor Crônica",
      description: "Tratamento especializado para dores persistentes que afetam sua qualidade de vida diária."
    },
    {
      icon: Stethoscope,
      title: "Fibromialgia",
      description: "Abordagem multidisciplinar para o manejo da fibromialgia e suas manifestações."
    },
    {
      icon: Zap,
      title: "Dor Neuropática",
      description: "Cuidado especializado para dores causadas por lesões do sistema nervoso."
    },
    {
      icon: Heart,
      title: "Dor na Coluna",
      description: "Tratamentos inovadores para lombalgias, cervicalgias e outras dores vertebrais."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-800">Dra. Thaysa Macedo</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('clinica')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  A Clínica
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('doutora')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  A Dra. Thaysa
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('contato')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105">
                  Agendar Consulta
                </button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <button onClick={() => scrollToSection('clinica')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                  A Clínica
                </button>
                <button onClick={() => scrollToSection('servicos')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('doutora')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                  A Dra. Thaysa
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                  Depoimentos
                </button>
                <button onClick={() => scrollToSection('contato')} className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium">
                  Agendar Consulta
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Alívio da Dor.
                <span className="text-blue-600 block">Qualidade de Vida.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Especialista em Medicina da Dor, oferecendo tratamentos personalizados e inovadores para devolver o bem-estar e a alegria de viver sem dor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contato')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Calendar className="inline-block mr-2" size={20} />
                  Agendar Consulta
                </button>
                <button onClick={() => scrollToSection('servicos')} className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  Conheça os Serviços
                </button>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img 
                src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dra. Thaysa Macedo - Médica especialista em dor"
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* A Clínica Section */}
      <section id="clinica" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Clínica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um espaço dedicado ao cuidado integral do paciente, onde cada pessoa é única e merece atenção personalizada
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Interior moderno da clínica"
                className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Filosofia de Cuidado</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Atendimento Humanizado</h4>
                    <p className="text-gray-600">Cada paciente é tratado com empatia, respeito e dedicação integral ao seu bem-estar.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Excelência Médica</h4>
                    <p className="text-gray-600">Utilizamos as mais modernas técnicas e protocolos baseados em evidências científicas.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Abordagem Multidisciplinar</h4>
                    <p className="text-gray-600">Trabalhamos em conjunto com outros profissionais para oferecer o melhor resultado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tratamentos especializados em medicina da dor, focados em resultados duradouros e melhoria da qualidade de vida
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button onClick={() => scrollToSection('contato')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
              Agendar Avaliação
            </button>
          </div>
        </div>
      </section>

      {/* A Dra. Thaysa Section */}
      <section id="doutora" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5207873/pexels-photo-5207873.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dra. Thaysa Macedo em seu consultório"
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Dra. Thaysa Macedo</h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">Especialista em Medicina da Dor</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Formada em Medicina pela Universidade Federal, com especialização em Anestesiologia e Medicina da Dor, 
                  a Dra. Thaysa Macedo dedica sua carreira ao alívio do sofrimento e à melhoria da qualidade de vida de seus pacientes.
                </p>
                <p>
                  Com mais de 10 anos de experiência, ela combina conhecimento científico avançado com uma abordagem 
                  verdadeiramente humanizada, entendendo que cada dor é única e merece cuidado individualizado.
                </p>
                <p>
                  Sua missão é proporcionar não apenas o alívio dos sintomas, mas a recuperação completa da alegria de viver 
                  sem limitações impostas pela dor.
                </p>
              </div>
              
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Especialista em Anestesiologia - CRM 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Especialista em Medicina da Dor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Membro da Sociedade Brasileira para o Estudo da Dor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">O que Nossos Pacientes Dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de transformação e recuperação da qualidade de vida
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                {testimonials[currentTestimonial].text}
              </blockquote>
              
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-blue-600">{testimonials[currentTestimonial].condition}</p>
              </div>
            </div>
            
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-blue-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white hover:bg-blue-50 rounded-full shadow-lg flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agende sua consulta e dê o primeiro passo para uma vida sem dor
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Agendar Consulta</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Descreva brevemente seu caso ou dúvidas..."
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informações de Contato</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 3333-3333</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@drathaysamacedo.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua das Flores, 123 - Sala 456<br />
                      Jardins, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Horário de Funcionamento</h4>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Segunda à Sexta:</span> 08:00 - 18:00</p>
                  <p><span className="font-medium">Sábado:</span> 08:00 - 12:00</p>
                  <p><span className="font-medium">Domingo:</span> Fechado</p>
                </div>
              </div>
              
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6634!3d-23.5613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjciUyA0NsKwMzknNTAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  className="w-full h-64 rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dra. Thaysa Macedo</h3>
              <p className="text-gray-300 mb-4">
                Especialista em Medicina da Dor, dedicada a devolver qualidade de vida através de tratamentos personalizados e humanizados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('clinica')} className="text-gray-300 hover:text-white transition-colors">A Clínica</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('doutora')} className="text-gray-300 hover:text-white transition-colors">A Dra. Thaysa</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>contato@drathaysamacedo.com.br</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1" />
                  <span>Rua das Flores, 123 - Jardins<br />São Paulo - SP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Dra. Thaysa Macedo. Todos os direitos reservados. | 
              <a href="#" className="hover:text-white ml-1">Política de Privacidade</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

