import Header from '../components/header';
import Footer from '../components/footer';

export default function News() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-10 items-center bg-gradient-to-b from-blue-200 to-lime-700 via-teal-200">
        <div className="w-full text-center mt-20 py-8 text-4xl font-bold">お問い合わせ</div>
        <div className="flex flex-col rounded-md items-center p-8 gap-8 w-2/3 bg-white">
          <div className="w-full">
            <label htmlFor="name" className="font-bold">お名前</label>
            <input placeholder="入力..." className="w-full p-1 border-2 rounded border-grey-900" type="text" name="" id="name" />
          </div>
          <div className="w-full">
            <label htmlFor="hurigana" className="font-bold">お名前(フリガナ)</label>
            <input placeholder="入力..." className="w-full p-1 border-2 rounded border-grey-900" type="text" name="" id="hurigana" />
          </div>
          <div className="w-full">
            <label htmlFor="e-mail" className="font-bold">メールアドレス</label>
            <input placeholder="入力..." className="w-full p-1 border-2 rounded border-grey-900" type="text" name="" id="e-mail" />
          </div>
          <div className="w-full">
            <label htmlFor="tell" className="font-bold">電話番号</label>
            <input placeholder="入力..." className="w-full p-1 border-2 rounded border-grey-900" type="text" name="" id="tell" />
          </div>
          <div className="w-full">
            <label htmlFor="null" className="font-bold">お問い合わせ内容</label>
            <textarea placeholder="入力..." className="w-full p-1 border-2 rounded border-grey-900" name="" id="null" />
          </div>
          <div className="px-10 py-4 text-xl rounded-md font-bold bg-lime-500">送信</div>
        </div>
      </main>
      <Footer />
    </>
  );
}