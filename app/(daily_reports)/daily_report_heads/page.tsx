'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReportDetail() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickDate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_heads/date';
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_heads/edit';
  };
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_heads/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">開始日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">終了日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-full lg:col-span-4">
          <label htmlFor="report_content" className="block mb-1">業務日報</label>
          <InputText id="report_content" />
        </div>
        <div className="col-span-3 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">作成者</label>
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
              <th className="border p-2">報告日</th>
              <th className="border p-2">業務日報</th>
              <th className="border p-2">作成者</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                2024-02-05
              </td>
              <td className="border p-2">
                サンプル
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
            </tr>
            <tr>
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                2024-02-06
              </td>
              <td className="border p-2">
                サンプル
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
            </tr>
            <tr>
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                2024-02-07
              </td>
              <td className="border p-2">
                サンプル
              </td>
              <td className="border p-2">
                支援　太郎
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
