import Link from 'next/link'
;

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        className="w-44 object-contain cursor-pointer"
                        src="/assets/img/logo.png"
                        alt=""
                    />
                </Link>
            <div className="hidden md:inline-flex items-center space-x-5">
                    <h3><Link href="/about">About</Link></h3>
                    <h3><Link href="/contact">Contact</Link></h3>
                    <h3 className="text-white bg-blue-600 px-4
                     py-1 rounded-full"><Link href="/follow">Follow</Link></h3>
            </div>
           </div>

          <div className="flex items-center space-x-5 text-blue-600">
              <h3>Sign In</h3>
              <h3 className="border px-4 py-1 rounded-full border-blue-600">Get Started</h3>
          </div>
        </header>

    );
}

export default Header;