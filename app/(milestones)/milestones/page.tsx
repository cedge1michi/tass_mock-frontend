'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
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
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/milestones/new';
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
        <div className="col-span-6 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">作成者</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <label htmlFor="reporter" className="block mb-1">関与先</label>
          <InputText id="reporter" />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>絞り込み</Button>
        <Button color="gray" onClick={onClickReset}>リセット</Button>
        <Button color="blue" onClick={onClickNew}>新規作成</Button>
      </div>

      <div className="mt-4">
        <table className="table-auto w-[100%]">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">開始日</th>
              <th className="border p-2">終了日</th>
              <th className="border p-2">作成者</th>
              <th className="border p-2">関与先</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <Anchor href="/milestones/show">2023-04-01</Anchor>
              </td>
              <td className="border p-2">
                2024-03-31
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
              <td className="border p-2">
                支援サービス株式会社
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
