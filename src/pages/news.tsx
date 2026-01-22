import Header from '../components/header';
import Footer from '../components/footer';
import NewsCard from '../components/news_card';
import { FadeInUp } from '../components/fadein';

export default function News() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200">
        <h1 className="inline-block my-20 text-[64px] ml-24 font-bold js-fade font-gothic">
          お知らせ
        </h1>

        <ul className="list-none flex flex-col gap-2 m-0 p-0 mx-24 text-center">
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>
          <FadeInUp>
            <NewsCard />
          </FadeInUp>

          <li className="list-none inline-block px-10 py-2 bg-white rounded-3xl font-bold mt-10 js-fade">
            <a href="#">お知らせ一覧</a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}