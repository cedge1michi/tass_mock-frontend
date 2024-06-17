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
import DatePicker, { registerLocale } from 'react-datepicker';
import Pagination from "@/components/paginaton";
import { MouseEvent, useState } from "react";

function get_path(url: string) {
  let pos = url.indexOf(':');
  let referrer = url.substring(pos + 3);
  pos = referrer.indexOf('/');
  referrer = referrer.substring(pos);
  return referrer;
}

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date("2024/4/1"));
  const [endDate, setEndDate] = useState(new Date("2025/3/31"));

  const referrer = get_path(document.referrer);
  console.info(referrer);

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">報告日</label>
          <InputDate id="report_date" disabled />
        </div>
        <div className="col-span-3 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">作成者</label>
          <InputSelect
            id="description"
            items={[
              { label: '支援　一郎', value: '0' },
              { label: '選択肢', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
            disabled
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="report_content" className="block mb-1">業務日報</label>
          <InputTextArea id="report_content" rows={3} disabled />
        </div>

        <hr className="mt-2 col-span-full" />

        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="start_date" className="block mb-1">開始日時</label>
          <InputDatetime id="start_date" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="end_date" className="block mb-1">終了日時</label>
          <InputDatetime id="end_date" />
        </div>
        <div className="col-span-full lg:col-span-8">
          <label htmlFor="job_name" className="block mb-1">業務名</label>
          <InputText id="job_name" />
        </div>
        <div className="col-span-full">
          <label htmlFor="report_description" className="block mb-1">業務内容</label>
          <InputTextArea id="report_description" rows={3} />
        </div>
        <div className="col-span-full lg:col-span-5">
          <label htmlFor="job_type" className="block mb-1">業務区分</label>
          <InputCheckbox
            items={[
              { label: '税務代理(1号)', key: 'job_type[0]' },
              { label: '税務書類作成(2号)', key: 'job_type[1]' },
              { label: '税務相談(3号)', key: 'job_type[2]' }
            ]}
          />
        </div>
        <div className="col-span-full lg:col-span-7">
          <label htmlFor="company" className="block mb-1">関与先/業務内容</label>
          <InputText id="company" />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label htmlFor="content" className="block mb-1">内容</label>
          <InputSelect
            id="content"
            items={[
              { label: '所得税確定申告', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-6 lg:col-span-5">
          <label htmlFor="company" className="block mb-1">内容（その他）</label>
          <InputText id="company" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="company" className="block mb-1">対象年度</label>
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
        <div className="col-span-6 lg:col-span-3">
          <label htmlFor="description" className="block mb-1">てん末</label>
          <InputSelect
            id="description"
            items={[
              { label: '申告書作成', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-6 lg:col-span-7">
          <label htmlFor="description_other" className="block mb-1">てん末（その他）</label>
          <InputText id="description_other" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="process_date" className="block mb-1">処理年月日</label>
          <InputDate id="process_date" />
        </div>
        <div className="col-span-full lg:col-span-7">
          <label htmlFor="attachment" className="block mb-1">税理士法第３３条の２の添付書面</label>
          <InputFile id="attachment" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="submit_date" className="block mb-1">税務代理権限書提出日</label>
          <InputDate id="submit_date" />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label htmlFor="taxaccountant_name" className="block mb-1">担当税理士</label>
          <InputText id="taxaccountant_name" />
        </div>
        <div className="col-span-full">
          <label htmlFor="memo" className="block mb-1">備考</label>
          <InputTextArea id="memo" rows={3} />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>保存</Button>
        <Button color="red" onClick={onClickFiler}>削除</Button>
        <Button color="gray" onClick={onClickReset}>戻る</Button>
      </div>
    </div>
  );
}
