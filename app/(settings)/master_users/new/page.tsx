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

registerLocale('ja', ja as Locale);  // 日本語ロケールを登録

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date());

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/master_taxaccountants/edit'
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
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">開始日</label>
          <InputDate id="report_date" value="2024-04-03" />
        </div>
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">終了日</label>
          <InputDate id="report_date" value="2024-04-03" />
        </div>
        <div className="col-span-full lg:col-span-4">
          <label htmlFor="company" className="block mb-1">名称</label>
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
        </div>
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="reporter" className="block mb-1">所属</label>
          <InputSelect
            id="description"
            items={[
              { label: '社員', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="reporter" className="block mb-1">種別</label>
          <InputSelect
            id="description"
            items={[
              { label: '税理士', value: '1' },
              { label: '選択肢', value: '2' },
              { label: '選択肢', value: '3' },
              { label: '選択肢', value: '4' },
              { label: '選択肢', value: '5' }
            ]}
          />
        </div>
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="company" className="block mb-1">時間単価</label>
          <InputText
            id="description"
          />
        </div>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">グループ</th>
              <th className="border p-2">管理者</th>
              <th className="border p-2">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <InputSelect
                  id="description"
                  items={[
                    { label: '全社員', value: '1' },
                    { label: '選択肢', value: '2' },
                    { label: '選択肢', value: '3' },
                    { label: '選択肢', value: '4' },
                    { label: '選択肢', value: '5' }
                  ]}
                />
              </td>
              <td className="border p-2 w-16">
                <InputCheckbox
                  items={[
                    { label: '', key: 'job_type[0]' },
                  ]}
                />
              </td>
              <td className="border p-2 w-20">
                <Button color="red" onClick={onClickEdit}>削除</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>グループ追加</Button>
        <Button color="blue" onClick={onClickEdit}>保存</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>
    </div>
  );
}
