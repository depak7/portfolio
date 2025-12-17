const Hackathons = () => {
  const achievements = [
    {
      title: "4th Place - Database Management in AI Agentic Workflow & One-Click CRM Integration",
      description: "Secured 4th place for adding database management capabilities in an AI agentic workflow platform with easy one-click integration for all CRMs including Supabase, Salesforce, Zoho, and other major CRM platforms.",
    },
    {
      title: "Top 10 - AI Chatbot for Partner Resource Queries",
      description: "Built an AI chatbot for querying partner resources and managing client-specific configurations, integrated with Google Chat. The solution is used by the support team for enabling client-specific operations and secured a position in the Top 10.",
    }
  ]

  return (
    <section className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Hackathons</h2>

        {achievements.length > 0 ? (
          <div className="space-y-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">{achievement.description}</p>
                    {achievement.additional && (
                      <p className="text-gray-500 text-sm leading-relaxed">{achievement.additional}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No hackathon achievements to display yet.</p>
        )}
      </div>
    </section>
  )
}

export default Hackathons
