import Header from '../components/header';
import Footer from '../components/footer';
import { publicPath } from '../utils/publicPath';

export default function About_Eel() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center gap-20 bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200 pb-60">
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">ヤツメウナギ</div>
          <img className="w-2/5" src={publicPath("img/eel.png")} alt="ヤツメウナギの画像" />
          <div className="w-1/2">
            <div className="flex border-b py-2">
              <div className="w-1/4">名前</div>
              <div>ヤツメウナギ</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">学名</div>
              <div>Petromyzontiformes</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">分類</div>
              <div>ヤツメウナギ目 ヤツメウナギ科</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">特徴</div>
              <div>顎がなく、ウナギのような細長い体で、目の横に7つのエラ穴と吸盤状の口を持つ</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">サイズ</div>
              <div>40～50cm程度</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">食生</div>
              <div>寄生性</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}