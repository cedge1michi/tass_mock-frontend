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
import InputSelect from "@/components/input_select";

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date("2024/4/1"));
  const [endDate, setEndDate] = useState(new Date("2025/3/31"));

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/client_progresses';
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  }
  return (
    <div>
      <div className="">
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
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              dateFormat="yyyy/MM"  // 日付の形式を yyyy/MM に設定
              showMonthYearPicker
              showFullMonthYearPicker
              locale="ja"  // DatePicker のロケールを日本語に設定
              className="rounded-lg border-gray-300 w-full"
            />
          </div>
          <div className="col-span-3 lg:col-span-4">
            <label htmlFor="reporter" className="block mb-1">関与先</label>
            <InputSelect
              id="description"
              items={[
                { label: '全て', value: '0' },
                { label: '選択肢', value: '1' },
                { label: '選択肢', value: '2' },
                { label: '選択肢', value: '3' },
                { label: '選択肢', value: '4' },
                { label: '選択肢', value: '5' }
              ]}
            />
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
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">計画時間</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費時間</th>
                <th className="border p-2">進捗率</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  100%
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">操作</th>
                <th className="border p-2">関与先/業務内容</th>
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">計画時間</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費時間</th>
                <th className="border p-2">進捗率</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 w-20">
                  <Button color="green" onClick={onClickUpdate}>詳細</Button>
                </td>
                <td className="border p-2">
                  間接業務/営業会議 2024/04-2025/03
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  100%
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2 inline-flex gap-x-2">
          <Button color="blue" onClick={onClickAdd}>CSV出力</Button>
        </div>
      </div>
    </div>
  );
}
