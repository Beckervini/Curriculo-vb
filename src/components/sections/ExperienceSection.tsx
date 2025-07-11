import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Projetos Acadêmicos - FIAP',
      period: '2023 - Atual',
      location: 'São Paulo, SP',
      description: 'Desenvolvimento de sistemas completos com foco em sustentabilidade e inovação. Criação de APIs REST, interfaces responsivas e deploy em nuvem. Experiência com arquitetura de sistemas e trabalho em equipe.',
      technologies: ['Java', 'Spring Boot', '.NET Core', 'Python', 'SQL', 'Azure', 'Oracle'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="section-header">Experiência</h2>
        <div className="section-divider mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-[hsl(var(--text-primary))] mb-2">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-medium mb-3">
                  <Building size={18} className="experience-icon" />
                  {exp.company}
                </div>
              </div>
              <div className="flex flex-col md:items-end">
                <div className="flex items-center gap-2 text-[hsl(var(--text-secondary))] mb-2">
                  <Calendar size={16} className="experience-icon" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2 text-[hsl(var(--text-secondary))]">
                  <MapPin size={16} className="experience-icon" />
                  {exp.location}
                </div>
              </div>
            </div>
            
            <p className="text-[hsl(var(--text-secondary))] mb-6 leading-relaxed text-lg">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech) => (
                <span key={tech} className="skill-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;