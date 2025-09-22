import { useState, useCallback } from 'react';
import { apiService } from '../services/apiService';

const MAX_SAMPLES = 5;

export const useReportController = () => {
  const [scannedCodes, setScannedCodes] = useState([]);
  const [partsMap, setPartsMap] = useState({});
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScan = useCallback(async (code) => {
    const trimmedCode = code.trim();
    if (!trimmedCode) return;
    if (scannedCodes.includes(trimmedCode)) return;
    if (scannedCodes.length >= MAX_SAMPLES) {
      setError(`Maximum ${MAX_SAMPLES} codes at once!`);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const parts = await apiService.getPartDetails(trimmedCode);
      setScannedCodes(prev => [...prev, trimmedCode]);
      setPartsMap(prev => ({ ...prev, [trimmedCode]: parts }));
      setInputText('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [scannedCodes]);

  const removeCode = useCallback((code) => {
    setScannedCodes(prev => prev.filter(c => c !== code));
    setPartsMap(prev => {
      const newMap = { ...prev };
      delete newMap[code];
      return newMap;
    });
  }, []);

  const clearAll = useCallback(() => {
    setScannedCodes([]);
    setPartsMap({});
    setInputText('');
    setError('');
  }, []);

  return {
    scannedCodes,
    partsMap,
    inputText,
    setInputText,
    loading,
    error,
    handleScan,
    removeCode,
    clearAll
  };
};
