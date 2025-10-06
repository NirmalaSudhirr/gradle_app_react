import React from 'react';
import { downloadCsv } from '../utils/csvUtils';

const QRScannerCard = ({ 
  inputText, 
  setInputText, 
  handleScan, 
  loading, 
  error, 
  scannedCodes, 
  clearAll, 
  partsMap,
  isDesktop = false 
}) => {
  // const fieldHeight = isDesktop ? 'h-12' : 'h-10';

  const handleGenerateReport = () => {
    if (scannedCodes.length > 0) {
      const code = scannedCodes[scannedCodes.length - 1];
      const parts = partsMap[code] || [];
      downloadCsv(parts);
    }
  };

  const fieldHeight = isDesktop ? '50px' : '42px';

  return (
    <div 
      className="card"
      style={{
        backgroundColor: 'white',
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div 
        className="p-4"
        style={{
          padding: isDesktop ? '24px' : '20px'
        }}
      >
        {/* QR Scanner header */}
        <div className="d-flex align-items-start justify-content-start mb-4">
          <i 
            className="text-muted me-2"
            style={{ 
              fontSize: isDesktop ? '24px' : '20px',
              color: '#6c757d'
            }}
          >
            📱
          </i>
          <h2 
            className="fw-bold mb-0 font-inter"
            style={{ fontSize: isDesktop ? '18px' : '16px' }}
          >
            QR Scanner
          </h2>
        </div>
        
          <div 
          className="w-100"
          style={{ 
            height: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.12)',
            marginBottom: isDesktop ? '32px' : '20px'
          }}
        />
        
        <div className="mb-3">
          <label 
            className="text-muted font-inter"
            style={{ 
              fontSize: isDesktop ? '14px' : '13px',
              color: '#6c757d'
            }}
          >
            Part ID
          </label>
        </div>
        
        <div className="mb-3">
          {/* Input and button row */}
          <div className="d-flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Scan/Type QR code..."
              className="form-control font-inter"
              style={{
                height: fieldHeight,
                fontSize: isDesktop ? '14px' : '13px',
                border: '1px solid #ced4da',
                borderRadius: '4px',
                padding: '0 12px'
              }}
              disabled={loading}
            />
            <button
              onClick={() => handleScan(inputText)}
              disabled={!inputText.trim() || loading}
              className="btn d-flex align-items-center justify-content-center text-white fw-bold"
              style={{
                height: fieldHeight,
                width: '60px',
                backgroundColor: inputText.trim() ? '#6c757d' : '#e9ecef',
                border: 'none',
                borderRadius: '4px',
                fontSize: isDesktop ? '14px' : '13px'
              }}
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <i className="bi bi-play-fill"></i>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Generate report button */}
        <button
          onClick={handleGenerateReport}
          disabled={scannedCodes.length === 0}
          className="w-100 btn d-flex align-items-center justify-content-center mb-3 text-white fw-bold"
          style={{
            height: fieldHeight,
            backgroundColor: scannedCodes.length > 0 ? '#28a745' : '#e9ecef',
            border: 'none',
            borderRadius: '4px',
            fontSize: isDesktop ? '14px' : '13px'
          }}
        >
          <i className="bi bi-download me-2"></i>
          Generate Report
        </button>

        {/* Error messages */}
        {error && (
          <div 
            className="mb-3"
            style={{ color: '#dc3545', fontSize: '13px' }}
          >
            {error}
          </div>
        )}

        {/* Recent scanned chips */}
        {scannedCodes.length > 0 && (
          <div className="d-flex flex-wrap gap-2 mb-3">
            {scannedCodes.map((code, index) => (
              <span
                key={index}
                className="badge bg-light text-dark d-flex align-items-center"
                style={{
                  backgroundColor: '#f8f9fa',
                  color: '#212529',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '12px'
                }}
              >
                Sample: {code}
                <button
                  onClick={clearAll}
                  className="btn-close btn-close-white ms-2"
                  aria-label="Close"
                  style={{ fontSize: '10px' }}
                ></button>
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="d-flex align-items-center justify-content-center mt-3">
          <i 
            className="text-muted me-2"
            style={{ 
              fontSize: isDesktop ? '20px' : '18px',
              color: '#6c757d'
            }}
          >
            📱
          </i>
          <span 
            className="text-muted font-inter"
            style={{ 
              fontSize: isDesktop ? '12px' : '11px',
              color: '#6c757d'
            }}
          >
            Ready to scan
          </span>
        </div>
      </div>
    </div>
  );
};

export default QRScannerCard;
