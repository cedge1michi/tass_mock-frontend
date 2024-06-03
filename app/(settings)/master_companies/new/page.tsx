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
  const [startDate, setStartDate] = useState(new Date());

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/master_companies/edit'
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
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="company" className="block mb-1">報酬(円)</label>
          <InputText id="company" />
        </div>
        <div className="col-span-full lg:col-span-8">
        </div>
        <div className="col-span-full lg:col-span-5">
          <label htmlFor="company" className="block mb-1">名称</label>
          <InputText id="company" />
        </div>
        <div className="col-span-full lg:col-span-7">
          <label htmlFor="company" className="block mb-1">住所</label>
          <InputText id="company" />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>作成</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>
    </div>
  );
}
