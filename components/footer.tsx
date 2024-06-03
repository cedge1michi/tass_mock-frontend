/**
 * フッターを生成する。
 */
export default function Footer({ copyright }: { copyright: string }) {
  return (
    <footer className="text-white bg-indigo-500">
      <div className="flex justify-center items-center py-4">
        {copyright}
      </div>
    </footer>
  );
}
