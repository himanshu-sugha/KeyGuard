import React from 'react';
import { Download, Upload } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { useKeyStore } from '../../store/keyStore';
import { toast } from 'react-hot-toast';

export function ImportExport() {
  const { keyPairs, importKeyPairs } = useKeyStore();

  const handleExport = () => {
    const dataStr = JSON.stringify(keyPairs);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'amaci-keys.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('Keys exported successfully');
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const imported = JSON.parse(content);
        importKeyPairs(imported);
        toast.success('Keys imported successfully');
      } catch (error) {
        toast.error('Failed to import keys');
      }
    };
    reader.readAsText(file);
  };

  return (
    <Card title="Import/Export Keys" icon={<Download className="w-5 h-5" />}>
      <div className="space-y-4">
        <div>
          <Button
            onClick={handleExport}
            className="w-full mb-2"
            variant="secondary"
          >
            <Download className="w-4 h-4 mr-2 inline" />
            Export Keys
          </Button>
        </div>
        <div>
          <label className="block">
            <Button
              variant="secondary"
              className="w-full relative"
              onClick={() => document.getElementById('file-import')?.click()}
            >
              <Upload className="w-4 h-4 mr-2 inline" />
              Import Keys
            </Button>
            <input
              id="file-import"
              type="file"
              className="hidden"
              accept=".json"
              onChange={handleImport}
            />
          </label>
        </div>
      </div>
    </Card>
  );
}