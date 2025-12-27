import { useState } from 'react'

const OpenSource = () => {
  const [showAll, setShowAll] = useState(false)

  const contributions = [
    {
      title: "feat(versioning): Add code restore from execution history by enabling easy rollback or comparison to previous working versions of a flow's code, directly from the execution logs.",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/179"
    },
    {
      title: "feat: Emails retention periods/cleanup",
      repository: "usesend",
      year: "2025",
      url: "https://github.com/usesend/useSend/pull/286"
    },
    {
      title: "feat(resend): add domain validation for resend by BubbleLab to enhance security and prevent sending emails from unverified sources ",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/170"
    },
    {
      title: "Fix: fix a credit-consumption issue in BubbleLab by nsuring all validations are performed against the most current flow definition.",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/185"
    },
    {
      title: "Fix: Prevent inline CSS from breaking execution history page styling",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/185"
    },
    {
      title: "Fix: Prevents cron jobs from being activated without required inputs and credentials configured. Also refactors validation logic into a shared utility to reduce code duplication.",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/243"
    },
    {
      title: "Fix: Promise.all visualization for .map() patterns in BubbleFlow",
      repository: "BubbleLab",
      year: "2025",
      url: "https://github.com/bubblelabai/BubbleLab/pull/247"
    },
    // {
    //   title: "feat(integrations): add Jira integration with comprehensive issue management",
    //   repository: "BubbleLab",
    //   year: "2025",
    //   url: "https://github.com/bubblelabai/BubbleLab/pull/222"
    // },
    // {
    //   title: "feat(signin): Implement password sign-in option",
    //   repository: "Cap",
    //   year: "2025",
    //   url: "https://github.com/CapSoftware/Cap/pull/1380"
    // }
  ]

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  const displayedContributions = showAll ? contributions : contributions.slice(0, 4)
  const remainingCount = contributions.length - 4

  return (
    <section className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with title and date */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Open Source Contributions</h2>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>•</span>
            <span>{currentDate}</span>
          </div>
        </div>

        {contributions.length > 0 ? (
          <>
            <div className="space-y-0">
              {displayedContributions.map((contribution, idx) => (
                <div key={idx}>
                  <div className="flex items-start justify-between py-4">
                    <div className="flex-1 pr-4">
                      <h3 className="text-gray-300 mb-1">{contribution.title}</h3>
                      <p className="text-gray-500 text-sm">Contributed to {contribution.repository}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{contribution.year}</span>
                      {contribution.url && (
                        <a
                          href={contribution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center border border-gray-700 rounded bg-gray-900 hover:bg-gray-800 transition-colors"
                          aria-label="View contribution"
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  {idx < displayedContributions.length - 1 && (
                    <div className="border-t border-gray-800"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Footer with "Show all" link */}
            {contributions.length > 4 && (
              <div className="mt-6 pt-4 border-t border-gray-800">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-400 transition-colors text-sm"
                >
                  <span>Show all </span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-400 text-sm">No open source contributions to display yet.</p>
        )}
      </div>
    </section>
  )
}

export default OpenSource

