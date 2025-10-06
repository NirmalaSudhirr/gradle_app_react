import React from 'react';
import { useReportController } from './hooks/useReportController';
import { useResponsive } from './utils/responsive';
import Header from './components/Header';
import SummaryBar from './components/SummaryBar';
import MonitorCard from './components/MonitorCard';
import QRScannerCard from './components/QRScannerCard';
import './App.css';

function App() {
  const { isDesktop } = useResponsive();
  const {
    scannedCodes,
    partsMap,
    inputText,
    setInputText,
    loading,
    error,
    handleScan,
    clearAll
  } = useReportController();

  return (
    <div 
      className="min-vh-100"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      {isDesktop ? (
        // Desktop Layout
        <div className="d-flex justify-content-center">
          <div 
            className="w-100"
            style={{ 
              maxWidth: '1200px',
              padding: '20px 40px'
            }}
          >
            <Header isDesktop={true} />
            <SummaryBar 
              scannedCodes={scannedCodes} 
              partsMap={partsMap} 
              isDesktop={true} 
            />
            <div 
              className="d-flex"
              style={{ 
                gap: '24px',
                marginTop: '24px'
              }}
            >
              <div 
                className="flex-grow-1"
                style={{ 
                  maxWidth: 'calc(60% - 12px)'
                }}
              >
               <MonitorCard 
                  scannedCodes={scannedCodes} 
                  partsMap={partsMap} 
                  isDesktop={true} 
                />
              </div>
              <div 
                className="flex-shrink-0"
                style={{ 
                  width: 'calc(40% - 12px)',
                  position: 'sticky',
                  top: '20px',
                  height: 'fit-content'
                }}
              >
                <QRScannerCard
                  inputText={inputText}
                  setInputText={setInputText}
                  handleScan={handleScan}
                  loading={loading}
                  error={error}
                  scannedCodes={scannedCodes}
                  clearAll={clearAll}
                  partsMap={partsMap}
                  isDesktop={true}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Layout
        <div 
          className="d-flex flex-column"
          style={{ padding: '16px' }}
        >
          <Header isDesktop={false} />
          <SummaryBar 
            scannedCodes={scannedCodes} 
            partsMap={partsMap} 
            isDesktop={false} 
          />
          <div style={{ marginTop: '20px' }}>
            <MonitorCard 
              scannedCodes={scannedCodes} 
              partsMap={partsMap} 
              isDesktop={false} 
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <QRScannerCard
              inputText={inputText}
              setInputText={setInputText}
              handleScan={handleScan}
              loading={loading}
              error={error}
              scannedCodes={scannedCodes}
              clearAll={clearAll}
              partsMap={partsMap}
              isDesktop={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
