'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import Pagination from "@/components/paginaton";
import { MouseEvent, useState } from "react";
import DatePicker, { registerLocale } from 'react-datepicker';
import { Locale, ja } from 'date-fns/locale';  // date-fns から日本語ロケールをインポート
import "react-datepicker/dist/react-datepicker.css";
import { calculateOverrideValues } from "next/dist/server/font-utils";
import InputSelect from "@/components/input_select";

export default function DailyReport() {
  const [startDate, setStartDate] = useState(new Date());

  const onClickFiler = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickReset = (event: MouseEvent<HTMLButtonElement>) => {
    // 絞り込みのロジックをここに実装
    console.info(event.currentTarget);
  };
  const onClickUpdate = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/individual_progresses';
  };
  const onClickAdd = (event: MouseEvent<HTMLButtonElement>) => {
    window.location.href = '/daily_report_bodies/new';
  }
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 lg:col-span-4">
            <label htmlFor="reporter" className="block mb-1">関与先/業務内容</label>
            <InputSelect
              id="description"
              items={[
                { label: '間接業務/営業会議 2024/04-2025/03', value: '0' },
                { label: '選択肢', value: '1' },
                { label: '選択肢', value: '2' },
                { label: '選択肢', value: '3' },
                { label: '選択肢', value: '4' },
                { label: '選択肢', value: '5' }
              ]}
              disabled
            />
          </div>
          <div className="col-span-3 lg:col-span-4">
            <label htmlFor="reporter" className="block mb-1">担当者</label>
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
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">計画時間</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費時間</th>
                <th className="border p-2">進捗率</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  100%
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
                <th className="border p-2">操作</th>
                <th className="border p-2">担当者</th>
                <th className="border p-2">契約報酬</th>
                <th className="border p-2">計画時間</th>
                <th className="border p-2">消費報酬</th>
                <th className="border p-2">消費時間</th>
                <th className="border p-2">進捗率</th>
                <th className="border p-2">残報酬</th>
                <th className="border p-2">残時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 w-20">
                  <Button color="green" onClick={onClickUpdate}>詳細</Button>
                </td>
                <td className="border p-2">
                  支援　一郎
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  100%
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
              </tr>
              <tr>
                <td className="border p-2 w-20">
                  <Button color="green" onClick={onClickUpdate}>詳細</Button>
                </td>
                <td className="border p-2">
                  支援　二郎
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  999
                </td>
                <td className="border p-2">
                  100%
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
                <th className="border p-2">年月/担当者</th>
                <th className="border p-2">報酬</th>
                <th className="border p-2">時間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  <div className="flex items-center justify-between w-full focus:ring-4 focus:ring-gray-200 hover:bg-gray-100">
                    2024/04
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </div>
                </td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border p-2">支援　一郎</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border p-2">支援　二郎</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr>
                <td className="border p-2">
                  <div className="flex items-center justify-between w-full focus:ring-4 focus:ring-gray-200 hover:bg-gray-100">
                    2024/05
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                  </div>
                </td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border p-2">支援　一郎</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
              <tr className="bg-yellow-50">
                <td className="border p-2">支援　二郎</td>
                <td className="border p-2">999</td>
                <td className="border p-2">999</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-2 inline-flex gap-x-2">
          <Button color="blue" onClick={onClickAdd}>CSV出力</Button>
          <Button color="gray" onClick={onClickAdd}>戻る</Button>
        </div>
      </div>
    </div>
  );
}
