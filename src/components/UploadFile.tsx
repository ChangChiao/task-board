import { FC, useState } from 'react';

const errorList = {
  large: '圖片檔案過大，僅限 1mb 以下檔案',
  fileName: '圖片格式錯誤，僅限 JPG、PNG 圖片',
};
const imgType = ['jpg', 'jpeg', 'png'];

const UploadFile: FC = () => {
  const [showError, setShowError] = useState<String>('');
  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputRef = event.target as HTMLInputElement;
    const file = inputRef.files?.[0];
    if (file && imgType.includes(file.type)) {
      setShowError(errorList.fileName);
      return;
    }
    if (file && file.size > 1024 * 1024) {
      setShowError(errorList.large);
    }
    // sendImgToImgur(file);
  };

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900"
        htmlFor="file_input"
      >
        上傳圖片
      </label>
      <input
        onChange={uploadImage}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
        id="file_input"
        type="file"
      />
      {showError && <span>{showError}</span>}
    </div>
  );
};

export default UploadFile;