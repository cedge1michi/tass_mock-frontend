'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputDatetime from "@/components/input_datetime";
import InputSelect from "@/components/input_select";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent } from "react";

export default function DailyReport() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/edit';
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  }
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-6 lg:col-span-2">
            <label htmlFor="report_date" className="block mb-1">開始日時</label>
            <InputDatetime id="report_date" />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <label htmlFor="report_date" className="block mb-1">終了日時</label>
            <InputDatetime id="report_date" />
          </div>
          <div className="col-span-full lg:col-span-6">
            <label htmlFor="job_name" className="block mb-1">業務名</label>
            <InputText id="job_name" />
          </div>
          <div className="col-span-3 lg:col-span-4">
            <label htmlFor="reporter" className="block mb-1">関与先/業務内容</label>
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
          {/* <Button color="blue" onClick={onClickAdd}>新規作成</Button> */}
        </div>

        <div className="mt-4">
          <table className="table-auto w-[100%]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">操作</th>
                <th className="border p-2">開始日時</th>
                <th className="border p-2">終了日時</th>
                <th className="border p-2">業務名</th>
                <th className="border p-2">関与先/業務内容</th>
                <th className="border p-2">作成者</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 w-20">
                  <Button color="green" onClick={onClickUpdate}>編集</Button>
                </td>
                <td className="border p-2">
                  2024-02-05 10:00:00
                </td>
                <td className="border p-2">
                  2024-02-05 12:00:00
                </td>
                <td className="border p-2">
                  サンプル
                </td>
                <td className="border p-2">
                  支援サービス株式会社/〇〇業務 2024/04-2025/03
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
      </div>
    </div>
  );
}
