import Header from '../components/header';
import Footer from '../components/footer';
import { FadeInUp } from '../components/fadein';

export default function About_Catfish() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center gap-20 bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200 pb-60">
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">アメリカナマズ</div>
          <img className="w-2/5" src="/img/catfish.png" alt="アメリカナマズの画像" />
          <div className="w-1/2">
            <div className="flex border-b py-2">
              <div className="w-1/4">名前</div>
              <div>チャネルキャットフィッシュ（アメリカナマズ）</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">学名</div>
              <div>Ictalurus punctatus</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">分類</div>
              <div>ナマズ目 アメリカナマズ科</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">特徴</div>
              <div>口にひげが8本、ヒレには鋭い棘がある</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">サイズ</div>
              <div>30～50cm程度</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">食生</div>
              <div>雑食</div>
            </div>
          </div>
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">アメリカナマズの料理</div>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src="/img/catfish_cooking1.webp" alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ナマズカレー
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  驚くほどふわふわな白身と、とろける皮のコラーゲン。スパイスの効いた濃厚ルーが淡白な身に絡み合う、まるでウナギのような上質な旨味あふれる一皿
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ナマズ丼
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  濃厚な脂の甘みと甘辛いタレが熱々のご飯に染み渡る、ウナギに負けないスタミナ満点の一杯
                </div>
              </div>
              <img src="/img/catfish_cooking2.webp" alt="ナマズカレーの画像" />
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src="/img/catfish_cooking3.webp" alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ナマズのフライ
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  衣はサクッ、中は驚くほどふわふわ。淡白でクセのない白身ですが、噛むとジュワッと上質な脂が溢れ出します
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </main>
      <Footer />
    </>
  );
}
