import React from 'react';

const DownloadCurriculo: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/Curriculo.pdf';
    link.download = 'Curriculo.pdf';
    link.click();
  };
  return (
    <div className="p-4  bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-lg">
      <button
        className="p-4 bg-gray-00  rounded-lg hover:bg-blue-600 rounded-sm"
        onClick={handleDownload}
      >
        Baixar Currículo
      </button>
    </div>
  );
};

export default DownloadCurriculo;
