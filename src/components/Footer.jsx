const Footer = () => {
  return (
    <footer className="pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Separator */}
        <div className="border-t border-gray-800 mb-8"></div>
        
        {/* Contact Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-500">
            {/* <span>Contact me</span> */}
            <a 
              href="mailto:deepakfordev@gmail.com" 
              className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors group"
              aria-label="Email"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
              </svg>
              <span className="underline underline-offset-4">deepakfordev@gmail.com</span>
            </a>
          </div>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
