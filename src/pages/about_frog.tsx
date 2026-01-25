import Header from '../components/header';
import Footer from '../components/footer';
import { FadeInUp } from '../components/fadein';
import { publicPath } from '../utils/publicPath';

export default function About_Frog() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center gap-20 bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200 pb-60">
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">ウシガエル</div>
          <img className="w-2/5" src={publicPath("img/frog.png")} alt="ウシガエルの画像" />
          <div className="w-1/2">
            <div className="flex border-b py-2">
              <div className="w-1/4">名前</div>
              <div>ウシガエル</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">学名</div>
              <div>Lithobates catesbeianus</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">分類</div>
              <div>無尾目アカガエル科</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">特徴</div>
              <div>背中に線がないことと、大きな鼓膜</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">サイズ</div>
              <div>12～18cm程度</div>
            </div>
            <div className="flex border-b py-2">
              <div className="w-1/4">食生</div>
              <div>肉食</div>
            </div>
          </div>
          <div className="w-full text-center mt-20 py-8 text-4xl font-bold">ウシガエルの料理</div>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src={publicPath("img/frog_cooking1.webp")} alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  カエルもも肉のソテー
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  表面はカリッと香ばしく、中は驚くほどジューシーです。脂っこさがなくヘルシーで、白ワインとの相性も抜群な大人の味わい
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ピリ辛カエル炒め
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  クセのない上品な味わいのカエル肉は、ピリ辛ダレと合わせることで最強の旨味に変わります
                </div>
              </div>
              <img src={publicPath("img/frog_cooking2.webp")} alt="ナマズカレーの画像" />
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <img src={publicPath("img/frog_cooking3.webp")} alt="ナマズカレーの画像" />
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  カエルの竜田揚げ
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  醤油ダレに漬け込んだ肉厚な身をカラッと揚げました。鶏の唐揚げよりも脂っこさがなく、それでいて肉汁はたっぷり
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
