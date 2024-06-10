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
import { MouseEvent, useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { Locale, ja } from 'date-fns/locale';  // date-fns から日本語ロケールをインポート
import "react-datepicker/dist/react-datepicker.css";
import { calculateOverrideValues } from "next/dist/server/font-utils";

registerLocale('ja', ja as Locale);  // 日本語ロケールを登録

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date("2024/4/1"));
  const [endDate, setEndDate] = useState(new Date("2025/3/31"));

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/milestones/edit'
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">関与先</label>
          <InputSelect
            id="description"
            items={[
              { label: '間接業務', value: '0' },
              { label: '選択肢', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-3 lg:col-span-8">
          <label htmlFor="reporter" className="block mb-1">業務内容</label>
          <InputSelect
            id="description"
            items={[
              { label: '営業会議 2024/04-2025/03', value: '0' },
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
        <Button color="blue" onClick={onClickEdit}>作成</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">報酬</th>
              <th className="border p-2">計画時間</th>
              <th className="border p-2">コスト</th>
              <th className="border p-2">利益</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                1,000,000
              </td>
              <td className="border p-2">
                120
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
              <th className="border p-2">開始年月</th>
              <th className="border p-2">終了年月</th>
              <th className="border p-2">担当者</th>
              <th className="border p-2">時間単価</th>
              <th className="border p-2">計画時間</th>
              <th className="border p-2">コスト</th>
              <th className="border p-2">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 w-40">
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat="yyyy/MM"  // 日付の形式を yyyy/MM に設定
                  showMonthYearPicker
                  showFullMonthYearPicker
                  locale="ja"  // DatePicker のロケールを日本語に設定
                  className="rounded-lg border-gray-300 w-full"
                />
              </td>
              <td className="border p-2 w-40">
                <DatePicker
                  selected={endDate}
                  onChange={(date: Date) => setEndDate(date)}
                  dateFormat="yyyy/MM"  // 日付の形式を yyyy/MM に設定
                  showMonthYearPicker
                  showFullMonthYearPicker
                  locale="ja"  // DatePicker のロケールを日本語に設定
                  className="rounded-lg border-gray-300 w-full"
                />
              </td>
              <td className="border p-2">
                <InputSelect
                  id="description"
                  items={[
                    { label: '支援　太郎', value: '1' },
                    { label: '選択肢', value: '2' },
                    { label: '選択肢', value: '3' },
                    { label: '選択肢', value: '4' },
                    { label: '選択肢', value: '5' }
                  ]}
                />
              </td>
              <td className="border p-2">
                5,000
              </td>
              <td className="border p-2 w-20">
                <input className="border-gray-300 rounded-lg" value={20} />
              </td>
              <td className="border p-2">
                100,000
              </td>
              <td className="border p-2 w-20">
                <Button color="red" onClick={onClickEdit}>削除</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>担当者追加</Button>
      </div>
    </div >
  );
}
