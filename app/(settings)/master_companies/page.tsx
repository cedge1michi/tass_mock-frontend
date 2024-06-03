'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent, useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { Locale, ja } from 'date-fns/locale';  // date-fns から日本語ロケールをインポート
import "react-datepicker/dist/react-datepicker.css";
import { calculateOverrideValues } from "next/dist/server/font-utils";

registerLocale('ja', ja as Locale);  // 日本語ロケールを登録

export default function DailyReportDetail() {
  const [startDate, setStartDate] = useState(new Date());

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/master_companies/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-full lg:col-span-1">
          <label htmlFor="company" className="block mb-1">開始年月</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy/MM"  // 日付の形式を yyyy/MM に設定
            showMonthYearPicker
            showFullMonthYearPicker
            locale="ja"  // DatePicker のロケールを日本語に設定
            className="rounded-lg border-gray-300 w-full"
          />
        </div>
        <div className="col-span-full lg:col-span-1">
          <label htmlFor="company" className="block mb-1">終了年月</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            dateFormat="yyyy/MM"  // 日付の形式を yyyy/MM に設定
            showMonthYearPicker
            showFullMonthYearPicker
            locale="ja"  // DatePicker のロケールを日本語に設定
            className="rounded-lg border-gray-300 w-full"
          />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">名称</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-6 lg:col-span-6">
          <label htmlFor="reporter" className="block mb-1">住所</label>
          <InputText id="reporter" />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>絞り込み</Button>
        <Button color="gray" onClick={onClickReset}>リセット</Button>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">開始年月</th>
              <th className="border p-2">終了年月</th>
              <th className="border p-2">名称</th>
              <th className="border p-2">住所</th>
              <th className="border p-2">報酬(円)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                2023/04
              </td>
              <td className="border p-2">
                2024/03
              </td>
              <td className="border p-2">
                <Anchor href="/master_companies/edit">支援サービス株式会社</Anchor>
              </td>
              <td className="border p-2">
                東京都中央区銀座５－５－５
              </td>
              <td className="border p-2">
                5,000
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <Pagination />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickNew}>新規作成</Button>
      </div>
    </div>
  );
}
