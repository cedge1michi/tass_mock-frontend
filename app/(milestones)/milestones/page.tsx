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

registerLocale('ja', ja as Locale);  // 日本語ロケールを登録

export default function DailyReportDetail() {
  const [startDate, setStartDate] = useState(new Date("2024/4/1"));
  const [endDate, setEndDate] = useState(new Date("2025/3/31"));

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/milestones/edit';
  };
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/milestones/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-full lg:col-span-1">
          <label htmlFor="company" className="block mb-1">開始年月</label>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(new Date())}
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
            onChange={(date: Date) => setEndDate(new Date())}
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
              <th className="border p-2">操作</th>
              <th className="border p-2">開始年月</th>
              <th className="border p-2">終了年月</th>
              <th className="border p-2">関与先/業務内容</th>
              <th className="border p-2">報酬</th>
              <th className="border p-2">計画時間</th>
              <th className="border p-2">コスト</th>
              <th className="border p-2">利益</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 w-20">
              </td>
              <td className="border p-2">
                2023/04
              </td>
              <td className="border p-2">
                2024/03
              </td>
              <td className="border p-2">
                <div className="flex items-center justify-between w-full focus:ring-4 focus:ring-gray-200 hover:bg-gray-100">
                  間接業務
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                  </svg>
                </div>
              </td>
              <td className="border p-2">
                1,000,000
              </td>
              <td className="border p-2">
                120
              </td>
              <td className="border p-2">
                999,999
              </td>
              <td className="border p-2">
                999,999
              </td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                2023/04
              </td>
              <td className="border p-2">
                2024/03
              </td>
              <td className="border p-2">
                営業会議
              </td>
              <td className="border p-2">
                300,000
              </td>
              <td className="border p-2">
                40
              </td>
              <td className="border p-2">
                999,999
              </td>
              <td className="border p-2">
                999,999
              </td>
            </tr>
            <tr className="bg-yellow-50">
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                2023/04
              </td>
              <td className="border p-2">
                2024/03
              </td>
              <td className="border p-2">
                チーム会議
              </td>
              <td className="border p-2">
                700,000
              </td>
              <td className="border p-2">
                80
              </td>
              <td className="border p-2">
                999,999
              </td>
              <td className="border p-2">
                999,999
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
