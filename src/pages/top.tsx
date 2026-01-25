import Header from '../components/header';
import Footer from '../components/footer';
import { FadeIn, FadeInUp } from '../components/fadein';
import { Link } from 'react-router-dom';
import { publicPath } from '../utils/publicPath';

export default function Top() {
  return (
    <>
      <Header />
      <main>
        <div className="relative flex justify-center items-center min-h-screen bg-green-100">
          <FadeIn>
            <div className="text-6xl font-azuki font-bold">江別で沼釣り</div>
          </FadeIn>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 50" width="100%" className="absolute bottom-0">
            <path
              d="M 0 25 Q 22.86 25 45.71 12.5 Q 91.43 -12.5 137.14 12.5 Q 160 25 182.86 25 Q 205.71 25 228.57 12.5 Q 274.29 -12.5 320 12.5 Q 342.86 25 365.71 25 Q 388.57 25 411.43 12.5 Q 457.14 -12.5 502.86 12.5 Q 525.71 25 548.57 25 Q 571.43 25 594.29 12.5 Q 640 -12.5 685.71 12.5 Q 708.57 25 731.43 25 Q 754.29 25 777.14 12.5 Q 822.86 -12.5 868.57 12.5 Q 891.43 25 914.29 25 Q 937.14 25 960 12.5 Q 1005.71 -12.5 1051.43 12.5 Q 1074.29 25 1097.14 25 Q 1120 25 1142.86 12.5 Q 1188.57 -12.5 1234.29 12.5 Q 1257.14 25 1280 25 L 1280 50 L 0 50 Z"
              fill="#BFDBFE"></path>
          </svg>
        </div>
        <div className="bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200">
          <div className="w-full text-center py-8 font-azuki text-4xl font-bold">釣れる生き物</div>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-20 px-10 w-full h-80">
              <Link to="/about/catfish" className="w-2/5">
                <img src={publicPath("./img/catfish.png")} alt="アメリカナマズの画像" />
              </Link>
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  アメリカナマズ
                </div>
                <p className="w-full h-4/5 p-4 rounded-lg bg-white">
                  アメリカナマズ（チャネルキャットフィッシュ）は、北米原産のナマズで成長が早く、雑食性で生命力が強いのが特徴です。日本では外来種として河川や湖に定着し、小魚・甲殻類・水生昆虫などを食べます。食味は淡白で臭みが少なく、調理法としてはフライ・ムニエル・唐揚げが代表的です。泥抜きをしっかり行い、皮を引いて血合いを除くことでよりクセのない白身として楽しめます。
                </p>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ヤツメウナギ
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  ヤツメウナギは、顎を持たず吸盤状の口で他の魚に寄生する原始的な魚類で、河川で成長し海へ下る種類もいます。身は淡白で脂が少なく、秋田などでは伝統的に焼き干しや甘露煮として利用されます。下処理ではぬめりを落とすことが重要です。
                </div>
              </div>
              <Link to="/about/eel" className="w-2/5">
                <img src={publicPath("img/eel.png")} alt="ヤツメウナギの画像" />
              </Link>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <Link to="/about/turtle" className='w-2/5'>
                <img src={publicPath("img/turtle.png")} alt="ミシシッピアカミミガメの画像" />
              </Link>
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ミシシッピアカミミガメ
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  ミシシッピアカミミガメ（アカミミガメ）は北米原産の外来種で、雑食性・高い繁殖力・環境適応力をもち、日本でも各地で野生化しています。食用にする場合は、独特のクセを減らすため血抜きと長時間の加熱が必要で、スープや煮込み料理として使われます。
                </div>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp>
            <div className="flex justify-center gap-10 mt-32 px-10 w-full h-80">
              <div className="flex flex-col gap-6 w-3/5">
                <div className="flex items-center w-full h-1/5 text-2xl font-bold">
                  ウシガエル
                </div>
                <div className="w-full h-4/5 p-4 rounded-lg bg-white">
                  ウシガエル（アメリカンブルフロッグ）は北米原産で、日本では外来種として広く分布し、水辺で昆虫・小魚・甲殻類などを捕食します。後肢の肉は淡白で弾力があり、唐揚げ・バター焼き・ソテーなどが一般的な調理法です。下処理では皮をむき、血合いやぬめりを丁寧に除くと食味が良くなります。
                </div>
              </div>
              <Link to="/about/frog" className="w-1/2">
                <img src={publicPath("img/frog.png")} alt="ウシガエルの画像" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </main >
      <Footer />
    </>
  );
}
