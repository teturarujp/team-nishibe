import Header from '../components/header';
import Footer from '../components/footer';
import { FadeInUp } from '../components/fadein';

export default function About_Turtle() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center gap-20 bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200 pb-60">
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">ミシシッピアカミミガメ</div>
          <img className="w-2/5" src="/img/turtle.png" alt="ミシシッピアカミミガメの画像" />
          <div className="w-1/2">
            <div className="flex border-b py-2">
              <div className="w-1/4">名前</div>
              <div>ミシシッピアカミミガメ</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">学名</div>
              <div>Trachemys scripta</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">分類</div>
              <div>カメ目 ヌマガメ科</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">特徴</div>
              <div>目の後ろに赤い筋模様がある</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">サイズ</div>
              <div>10～30cm程度</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">食生</div>
              <div>雑食</div>
            </div>
          </div>

          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">ミシシッピアカミミガメの料理</div>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src="/img/turtle_cooking1.webp" alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  アカミミガメの炊き込みご飯
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  野趣あふれる力強さと、上品な味わいが同居する贅沢な一杯
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  アカミミガメの中華蒸し
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  鶏肉よりもきめ細やかな繊維質と、とろける皮の食感のコントラストはカメ料理の真骨頂
                </div>
              </div>
              <img src="/img/turtle_cooking2.webp" alt="ナマズカレーの画像" />
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src="/img/turtle_cooking3.webp" alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  アカミミガメの唐揚げ
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  特製ダレにじっくり漬け込んでカラッと揚げた身は、臭みなど微塵もなく、鶏肉以上にジューシーで深い味わいです
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
