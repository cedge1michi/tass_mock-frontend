'use client';
import Anchor from "@/components/anchor";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import InputCheckbox from "@/components/input_checkbox";
import InputDate from "@/components/input_date";
import InputText from "@/components/input_text";
import InputTextArea from "@/components/input_textarea";
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

  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-full lg:col-span-2">
          <label htmlFor="report_date" className="block font-medium mb-2">対象日</label>
          <InputDate id="report_date" />
        </div>
        <div className="col-span-full lg:row-start-2 lg:col-span-2">
          <InputCheckbox
            items={[
              { label: '予定をインポート', key: 'import_type[0]' }
            ]}
            checked
          />
        </div>
      </div>

      <div className="mt-2 inline-flex gap-x-2">
        <Button color="blue" onClick={onClickFiler}>作成</Button>
        <Button color="gray" onClick={onClickReset}>戻る</Button>
      </div>
    </div>
  );
}
