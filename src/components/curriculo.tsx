import React from 'react';

const DownloadCurriculo: React.FC = () => {
  return (
    <div className="p-4  bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-lg">
      <a
        href="../../public/Curriculo.pdf"
        download="Curriculo.pdf"
        className="p-4 bg-gray-00  rounded-lg hover:bg-blue-600 "
      >
        Baixar Currículo
      </a>
    </div>
  );
};

export default DownloadCurriculo;
