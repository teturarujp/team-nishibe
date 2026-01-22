import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bg-lime-700 pt-40">
      <footer className="rounded-2xl bg-lime-600 text-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-white">江別で沼釣り</p>
            </div>

            <ul className="flex gap-6 text-sm">
              <li>
                <Link to="/" className= "hover:text-blue-600 text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/news" className= "hover:text-blue-600 text-white">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link to="/about/catfish" className= "hover:text-blue-600 text-white">
                  アメリカナマズについて
                </Link>
              </li>
              <li>
                <Link to="/about/eel" className= "hover:text-blue-600 text-white">
                  ヤツメウナギについて
                </Link>
              </li>
              <li>
                <Link to="/about/turtle" className= "hover:text-blue-600 text-white">
                  ミシシッピアカミミガメについて
                </Link>
              </li>
              <li>
                <Link to="/about/frog" className= "hover:text-blue-600 text-white">
                  ウシガエルについて
                </Link>
              </li>
              <li>
                <Link to="/contact" className= "hover:text-blue-600 text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>

            {
              // SNSアイコン
            }
            <div className="flex gap-4">
              {
                // X
              }
              <a href="#" aria-label="X" className="hover:text-black transition text-white">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M18.244 2H21l-6.56 7.49L22 22h-6.828l-5.35-6.78L3.8 22H1l7.02-8.02L2 2h6.828l4.83 6.1L18.244 2z" />
                </svg>
              </a>

              {
                // Instagram
              }
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition text-white">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                </svg>
              </a>

              {
                // YouTube
              }
              <a href="#" aria-label="YouTube" className="hover:text-red-600 transition text-white">
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path
                    d="M23.498 6.186a2.978 2.978 0 00-2.095-2.11C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.403.576a2.978 2.978 0 00-2.095 2.11A31.04 31.04 0 000 12a31.04 31.04 0 00.502 5.814 2.978 2.978 0 002.095 2.11C4.5 20.5 12 20.5 12 20.5s7.5 0 9.403-.576a2.978 2.978 0 002.095-2.11A31.04 31.04 0 0024 12a31.04 31.04 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          <p className="text-center text-sm mt-6 text-white">
            © 2025 チーム西部 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}