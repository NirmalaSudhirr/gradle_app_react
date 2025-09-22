import React from 'react';

const SummaryBar = ({ scannedCodes, partsMap, isDesktop = false }) => {
  let ok = 0, total = 0;

  scannedCodes.forEach(code => {
    const parts = partsMap[code];
    if (parts) {
      total += parts.length;
      ok += parts.filter(p => p.status.trim().toLowerCase() === 'ok').length;
    }
  });

  let barColor, label;

  if (total === 0) {
    barColor = 'bg-gray-500';
    label = 'No data';
  } else if (ok === total) {
    barColor = 'bg-green-500';
    label = 'All OK';
  } else {
    barColor = 'bg-red-500';
    label = 'Issues Found';
  }

  // const progressValue = total === 0 ? 0 : (ok / total);

  return (
    <div 
      className="w-100"
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: isDesktop ? '20px 24px' : '16px 20px',
        marginBottom: isDesktop ? '24px' : '20px',
        border: '1px solid #e9ecef',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 
          className="fw-semibold mb-0 font-inter"
          style={{ 
            fontSize: isDesktop ? '20px' : '18px',
            color: '#333'
          }}
        >
          Overall
        </h3>
        <div
          className="px-3 py-1 rounded"
          style={{
            backgroundColor: barColor === 'bg-gray-500' ? 'rgba(108, 117, 125, 0.15)' :
              barColor === 'bg-green-500' ? 'rgba(40, 167, 69, 0.15)' : 'rgba(220, 53, 69, 0.15)',
            borderRadius: '6px'
          }}
        >
          <span 
            className="fw-semibold font-inter"
            style={{
              color: barColor === 'bg-gray-500' ? '#6c757d' :
                barColor === 'bg-green-500' ? '#28a745' : '#dc3545',
              fontSize: isDesktop ? '16px' : '14px'
            }}
          >
            {label}
          </span>
        </div>
      </div>
      
      {/* Progress bar */}
      <div 
        className="w-100 rounded"
        style={{
          height: isDesktop ? '40px' : '32px',
          backgroundColor: '#e9ecef',
          borderRadius: '10px',
          overflow: 'hidden'
        }}
      >
        <div
          className="h-100 transition-all"
          style={{
            width: total === 0 ? '0%' : `${(ok / total) * 100}%`,
            backgroundColor: barColor === 'bg-gray-500' ? '#6c757d' :
              barColor === 'bg-green-500' ? '#28a745' : '#dc3545',
            transition: 'width 0.6s ease'
          }}
        />
      </div>
    </div>
  );
};

export default SummaryBar;
