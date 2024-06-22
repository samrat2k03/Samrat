export function ReachMe() {

    function scrollToSocialLinks() {
        const socialLinksSection = document.getElementById('social');
        socialLinksSection.scrollIntoView({behavior: "smooth"});
      }

  return (
    <button 
        className="relative flex justify-center items-center font-semibold text-base gap-1 transition-colors text-red-200 text-00 hover:text-yellow-300" 
        style={{ '--primary-color': '#111', '--hovered-color': '#c84747' }}
        onClick={scrollToSocialLinks}
        >
      <p>Reach Me</p>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  )
}