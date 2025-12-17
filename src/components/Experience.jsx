const Experience = () => {
  const experiences = [
    {
      icon: "K",
      iconBg: "from-purple-500 to-pink-500",
      company: "KaptureCX",
      role: "Software Development Engineer-I",
      period: "Dec 2024 - Present",
      location: "Bengaluru, Karnataka",
      isActive: true,
      technologies: [
        "Java",
        "SpringBoot",
        "JPA",
        "Hibernate",
        "MySQL",
        "Kafka" ,
        "Redis",
        "Asterisk",
        "Docker",
        "Kubernetes",
        "Jenkins",
      ],
      descriptions: [
        "Designed and engineered a WebRTC + SIP–based inbound/outbound calling system integrated with omnichannel ticket creation (Instagram, Facebook, etc.), increasing customer connection rate by 20% and improving resolution efficiency by 40%.",
        "Developed scalable Reactive REST APIs and microservices using WebClient + async execution, improving throughput/latency by 30% across distributed systems.",
        "Implemented Key-Based Executors to enforce deterministic sequential processing and eliminate unordered execution issues under high concurrency.",
        "Architected an AI-driven merchant onboarding and verification platform, reducing manual review workload by 60% and enabling seamless onboarding of 500+ merchants/day.",
        "Engineered ML-integrated voice-bot escalation workflows with automated handover, reliably processing 10K+ daily escalation events with high accuracy and operational stability.",
        "Executed large-scale database migration for ticketing data including relational tables and transactional history, ensuring zero data loss and full consistency.",
      ],
    },
    {
      icon: "Y",
      iconBg: "from-blue-400 to-cyan-400",
      company: "Yectra Technologies",
      role: "Software Development Trainee",
      period: "Apr 2024 - Nov 2024",
      location: "Coimbatore, Tamil Nadu",
      technologies: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "Docker",
        "Azure B2C",
        "Redis",
        "Kafka",
        "Azure Container Apps",
        "Azure Static Web Apps",
      ],
      descriptions: [
        "Architected backend services for an app marketplace enabling developer submissions and admin control, integrating Azure B2C for secure authentication and identity management.",
        "Built REST APIs for a food-delivery platform using Spring Boot, Kafka (event streaming), and Redis (caching), improving throughput by 45% and stabilizing peak-load operations with reduced latency.",
        "Managed backend infrastructure for a user management system integrated with ML-based visitor monitoring, tracking mall footfall in real-time and enabling automated attendance management through continuous monitoring and analytics.",
      ],
    },
  ]

  return (
    <section className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-6">
              {/* Company Header */}
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.iconBg} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                  {exp.icon}
                </div>

                {/* Company Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <div className="flex items-center gap-2">
                      {/* LinkedIn icon */}
                      {/* <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg> */}
                      {exp.isActive && (
                        <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full font-medium">Working</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exp.role}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Technologies & Tools */}
              <div>
                <h4 className="font-bold mb-3 text-sm">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="px-3 py-1.5 bg-gray-900 rounded-md text-sm flex items-center gap-2 border border-gray-800 text-gray-300"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-2">
                {exp.descriptions.map((desc, descIdx) => (
                  <div key={descIdx} className="flex gap-3">
                    <span className="text-gray-600 mt-1.5 text-xs">•</span>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
