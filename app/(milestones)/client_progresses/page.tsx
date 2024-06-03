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

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date());

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
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
              className="rounded-lg border-gray-300 bg-gray-100 w-full"
              disabled
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
              className="rounded-lg border-gray-300 bg-gray-100 w-full"
              disabled
            />
          </div>
          <div className="col-span-6 lg:col-span-4">
            <label htmlFor="job_name" className="block mb-1">関与先</label>
            <InputText id="job_name" disabled />
          </div>
          <div className="col-span-6 lg:col-span-6">
            <label htmlFor="job_name" className="block mb-1">担当者</label>
            <InputText id="job_name" />
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
                <th className="border p-2">目標時間</th>
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
                <th className="border p-2">担当者</th>
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">目標時間</th>
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
                  <Anchor href="/individual_progresses">
                    支援　太郎
                  </Anchor>
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

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">年月</th>
                <th className="border p-2">報酬</th>
                <th className="border p-2">時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">2024/04(Accordion: Summary)</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">支援　太郎(Detail)</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">2024/05(Accordion: Summary)</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">支援　太郎(Detail)</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
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
