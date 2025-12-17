import { Sparkles } from 'lucide-react'

const Projects = () => {
  const projects = [
    // Add your projects here
    // Example structure:
    {
      iconType: "image",
      iconSrc: "https://8upwgyqr5v9h1dni.public.blob.vercel-storage.com/ecom-fort.webp", // Update with your image path
      name: "Ecom Fort",
      description: "A production-ready multi-store e-commerce marketplace.",
      descriptions: [
        "Built a full-stack multi-vendor marketplace enabling store owners to manage storefronts and customers to shop centrally.",
        "Implemented semantic product discovery using text and image embeddings, improving search relevance and accuracy by 35%.",
        "Optimized backend APIs and database performance to support scalable ordering, analytics, and vendor growth."
      ],
      liveUrl: "https://ecomfort.com",
      githubUrl: "https://github.com/depak7/ecom-fort",
    },
    {
      iconType: "component",
      iconComponent: Sparkles,
      iconBg: "from-blue-500 to-cyan-500",
      name: "AI-Animator",
      description: "An AI-powered system for generating dynamic 3D animations from natural language.",
      descriptions: [
        "Built an AI-driven animation pipeline that converts natural language prompts into dynamic 3D animated scenes.",
        "Implemented real-time progress streaming using Server-Sent Events for interactive rendering and visualization.",
        "Automated deployment and CI/CD on Azure, enabling rapid iteration and reliable production workflows."
      ],
      liveUrl: "https://polite-bay-0d07b5600.2.azurestaticapps.net/",
      githubUrl: "https://github.com/depak7/ai-animation-studio",
    }
  ]

  return (
    <section className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Projects</h2>

        {projects.length > 0 ? (
          <>
            <div className="space-y-12">
              {projects.map((project, idx) => (
                <div key={idx} className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    {project.iconType === "image" && project.iconSrc ? (
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-gray-800 flex items-center justify-center bg-black-900">
                        <img 
                          src={project.iconSrc} 
                          alt={`${project.name} icon`}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                        />
                      </div>
                    ) : project.iconType === "component" && project.iconComponent ? (
                      <div className="p-2 sm:p-3 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex-shrink-0">
                        {(() => {
                          const IconComponent = project.iconComponent
                          return <IconComponent className="text-cyan-400" size={20} />
                        })()}
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.iconBg || 'from-purple-500 to-pink-500'} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                        {project.icon || project.name[0]}
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-400 transition-colors"
                              aria-label="View live project"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-gray-400 transition-colors"
                              aria-label="View on GitHub"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                      {project.description && (
                        <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                      )}
                      {project.period && (
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>{project.period}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descriptions */}
                  {project.descriptions && project.descriptions.length > 0 && (
                    <div className="space-y-2">
                      {project.descriptions.map((desc, descIdx) => (
                        <div key={descIdx} className="flex gap-3">
                          <span className="text-gray-600 mt-1.5 text-xs">•</span>
                          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* View all link */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <a
                href="https://github.com/depak7?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors text-sm"
              >
                <span>View all</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-sm">No projects to display yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
