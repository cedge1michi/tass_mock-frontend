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

export default function DailyReportDetail() {
  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    console.info(event.currentTarget);
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/bizmatch_deals/edit';
  };
  const onClickNew = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/bizmatch_deals/new';
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3 lg:col-span-2">
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
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">カテゴリー</label>
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
        <div className="col-span-3 lg:col-span-3">
          <label htmlFor="reporter" className="block mb-1">タイトル</label>
          <InputText id="reporter" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">応募開始</label>
          <InputDatetime id="report_date" />
        </div>
        <div className="col-span-6 lg:col-span-2">
          <label htmlFor="report_date" className="block mb-1">応募終了</label>
          <InputDatetime id="report_date" />
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
              <th className="border p-2">状態</th>
              <th className="border p-2">種別</th>
              <th className="border p-2">カテゴリー</th>
              <th className="border p-2">タイトル</th>
              <th className="border p-2">応募金額</th>
              <th className="border p-2">内容</th>
              <th className="border p-2">依頼者</th>
              <th className="border p-2">応募者</th>
              <th className="border p-2">応募日時</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 w-20">
                <Button color="green" onClick={onClickUpdate}>編集</Button>
              </td>
              <td className="border p-2">
                応募
              </td>
              <td className="border p-2">
                委託
              </td>
              <td className="border p-2">
                公式文書二重チェック
              </td>
              <td className="border p-2">
                〇〇申請書確認依頼
              </td>
              <td className="border p-2">
                10,000
              </td>
              <td className="border p-2">
                サンプル
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
              <td className="border p-2">
                支援　太郎
              </td>
              <td className="border p-2">
                2024-02-15 18:00
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
