export default function Footer() {
  return (
    <footer className="bg-navy-300 text-white">
      <div className="footer__content container mx-auto max-w-[1180px] py-16 px-5 text-sm">
        <div className="space-y-6">
          <div>
            <img src="/assets/images/logo--blue.png" alt="RealizeIt logo" className="" width={100} />
          </div>
          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#">
                  <img src="/assets/images/icon-facebook.png" alt="Facebook" width={20} className="inline-block" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/icon-twitter.png" alt="Twitter" width={20} className="inline-block" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/icon-instagram.png" alt="Instagram" width={20} className="inline-block" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/icon-envelop.png" alt="Email" width={20} className="inline-block" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p>
              CCKF, Inc. d/b/a/ RealizeIt<br />
              &copy; 2022, RealizeIt, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}