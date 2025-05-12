import React from 'react';

const DownloadCurriculo: React.FC = () => {
  return (
    <div className="p-4  dark:bg-gray-800 flex justify-center items-center rounded-sm">
      <a
        href="../../public/teste.pdf"
        download="Curriculo_Eric.pdf"
        className="p-4 bg-gray-00  rounded-lg hover:bg-blue-600 "
      >
        Baixar Currículo
      </a>
    </div>
  );
};

export default DownloadCurriculo;
