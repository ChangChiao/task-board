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
        htmlFor="fileUpload"
        className="mt-5 cursor-pointer block w-[128px] h-[32px] leading-7 bg-black text-white text-center"
      >
        上傳圖片
      </label>
      <input
        onChange={uploadImage}
        className="hidden"
        type="file"
        id="fileUpload"
      />
      {showError && <span>{showError}</span>}
    </div>
  );
};

export default UploadFile;
