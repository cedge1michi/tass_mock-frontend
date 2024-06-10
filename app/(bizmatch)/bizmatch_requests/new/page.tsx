'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputCheckbox from "@/components/input_checkbox";
import InputDate from "@/components/input_date";
import InputDatetime from "@/components/input_datetime";
import InputFile from "@/components/input_file";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import InputTextArea from "@/components/input_textarea";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/bizmatch_requests/edit'
  };
  const onClickCancel = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickApply = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-8 mx-4">
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="content" className="block mb-1">種別<span className="ml-2 px-1 pb-[2px] text-xs text-gray-100 rounded-lg bg-orange-500">必須</span></label>
          <select id="content" className="w-full py-2 border-0 border-b border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50">
            <option value="1" key="1">委託</option>
            <option value="1" key="1">選択肢</option>
            <option value="1" key="1">選択肢</option>
          </select>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label htmlFor="content" className="block mb-1">カテゴリー<span className="ml-2 pb-[2px] px-1 text-xs text-gray-100 rounded-lg bg-orange-500">必須</span></label>
          <select id="content" className="w-full py-2 border-0 border-b border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50">
            <option value="1" key="1">公文書二重チェック</option>
            <option value="1" key="1">選択肢</option>
            <option value="1" key="1">選択肢</option>
          </select>
        </div>
        <div className="col-span-6 lg:col-span-7">
          <label htmlFor="company" className="block mb-1">タイトル<span className="ml-2 pb-[2px] px-1 text-xs text-gray-100 rounded-lg bg-orange-500">必須</span></label>
          <input type="text" id="company" className="w-full py-2 border-0 border-b border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50" placeholder="依頼内容のタイトル" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">予算<span className="ml-2 pb-[2px] px-1 text-xs text-gray-100 rounded-lg bg-orange-500">必須</span></label>
          <input type="text" id="company" className="w-full py-2 border-0 border-b border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50" placeholder="予算金額（例：10000）" />
          <span className="text-xs text-gray-400">数字を入力してください。</span>
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="process_date" className="block mb-1">締切<span className="ml-2 pb-[2px] px-1 text-xs text-gray-100 rounded-lg bg-orange-500">必須</span></label>
          <input type="date" id="process_date" className="w-full py-2 border-0 border-b border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50" />
        </div>
        <div className="col-span-6 lg:col-span-8">
          <label htmlFor="attachment" className="block mb-1">添付ファイル</label>
          <input type="file" id="attachment" className="w-full py-2 border-0 border-b border-gray-300 focus:outline-none focus:ring-0 file:py-[2px] file:px-4 file:rounded-full file:border-0 file:text-gray-600 file:bg-gray-300" />
        </div>
        <div className="col-span-full">
          <label htmlFor="memo" className="block mb-1">内容</label>
          <textarea id="memo" className="w-full py-2 border rounded-lg border-gray-300 transition focus:ring-0 focus:border-gray-300 placeholder-gray-500 placeholder-opacity-50" placeholder="依頼内容の詳細" rows={3} />
        </div>
      </div>

      <div className="mt-8 mb-4 mx-4 inline-flex gap-x-2">
        <button className="py-2 px-4 inline-flex items-center text-white border border-transparent bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">作成</button>
        <button className="py-2 px-4 inline-flex items-center text-white border border-transparent bg-gray-500 rounded-full hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">戻る</button>
      </div>
    </div>
  );
}
