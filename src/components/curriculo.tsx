import { error } from 'console';
import React from 'react';

const DownloadCurriculo: React.FC = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('../../public/curriculo.pdf');
      if (!response.ok) {
        throw new Error('Arquivo não encontrado');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Curriculo.Eric.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log('Erro ao baixar:', error);
    }
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
