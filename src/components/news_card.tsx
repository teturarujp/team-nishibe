export default function NewsCard() {
  return (
    <li className="item js-fade rounded-2xl bg-white">
      <a href="#"
        className="flex flex-nowrap md:flex-nowrap flex-wrap text-[#333] p-5 hover:[&_.title]:text-blue-600">
        <p className="date m-0 min-w-[140px] text-[16px] text-[#999] pr-5 md:min-w-[140px] min-w-[100px]">
          2020/4/15
        </p>

        <p className="category m-0 min-w-[140px] pr-5 md:min-w-[140px] min-w-[100px]">
          <span className="inline-block bg-[#999] text-white text-center px-5 py-1 text-[12px] leading-none">
            お知らせ
          </span>
        </p>

        <p className="title m-0 w-full md:mt-0 mt-2">
          ここにお知らせが入りますここにお知らせが入りますここにお知らせが入ります
        </p>
      </a>
    </li>
  );
}