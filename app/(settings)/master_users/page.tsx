'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent, useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { Locale, ja } from 'date-fns/locale';  // date-fns から日本語ロケールをインポート
import "react-datepicker/dist/react-datepicker.css";
import { calculateOverrideValues } from "next/dist/server/font-utils";

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
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/master_users/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">開始日</label>
          <InputDate id="report_date" value="2024-04-01" />
        </div>
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">終了日</label>
          <InputDate id="report_date" value="2024-04-03" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="reporter" className="block mb-1">所属</label>
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
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="reporter" className="block mb-1">種別</label>
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
              <th className="border p-2">開始日</th>
              <th className="border p-2">開始日</th>
              <th className="border p-2">名称</th>
              <th className="border p-2">所属</th>
              <th className="border p-2">種別</th>
              <th className="border p-2">時間単価</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                2023/04/01
              </td>
              <td className="border p-2">
                2024/03/31
              </td>
              <td className="border p-2">
                <Anchor href="/master_users/edit">支援　一郎</Anchor>
              </td>
              <td className="border p-2">
                社員
              </td>
              <td className="border p-2">
                税理士
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
