export default function Header() {
  return (
    <header>
      <div className="header__content max-w-[1180px] container mx-auto py-5 px-5 flex items-center justify-between">
        
        {/** Field */}
        <div>
          <a href="#">
            <img src="/assets/images/logo.png" alt="Realize it logo" />
          </a>
        </div>

        {/** Field */}
        <div>
          <button role="button" className="min-w-[180px] py-4 px-5 rounded-lg bg-azure-400 text-white hover:bg-azure-100 hover:text-azure-400 transition-colors duration-200 ease-in-out">Contact us</button>
        </div>

      </div>
    </header>
  )
}