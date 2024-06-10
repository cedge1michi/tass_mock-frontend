'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import InputTextArea from "@/components/input_textarea";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_heads/edit';
  };
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    // ロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickBack = (event: MouseEvent<HTMLButtonElement>) => {
    // ロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  };

  return (
    <div className="">
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
          <label htmlFor="report_content" className="block mb-1">業務内容</label>
          <InputTextArea id="report_content" rows={3} />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickEdit}>変更</Button>
        <Button color="red" onClick={onClickDelete}>削除</Button>
        <Button color="gray" onClick={onClickBack}>戻る</Button>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">開始日時</th>
              <th className="border p-2">終了日時</th>
              <th className="border p-2">業務名</th>
              <th className="border p-2">関与先/業務内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                2024-02-05 10:00:00
              </td>
              <td className="border p-2">
                2024-02-05 12:00:00
              </td>
              <td className="border p-2">
                <Anchor href="/daily_report_bodies/edit">サンプル</Anchor>
              </td>
              <td className="border p-2">
                支援サービス株式会社/〇〇業務 2024/04-2025/03
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickAdd}>明細追加</Button>
      </div>
    </div>
  );
}
