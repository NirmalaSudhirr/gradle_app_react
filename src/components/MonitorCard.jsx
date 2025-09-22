import React from 'react';

const MonitorCard = ({ scannedCodes, partsMap, isDesktop = false }) => {
  if (scannedCodes.length === 0) {
    return (
      <div 
        className="card h-100 d-flex flex-column align-items-center justify-content-start"
        style={{
          backgroundColor: 'white',
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="d-flex align-items-center mb-4">
          <i 
            className="text-success me-2"
            style={{ fontSize: isDesktop ? '32px' : '24px' }}
          >
            👥
          </i>
          <h2 
            className="fw-bold mb-0 font-inter"
            style={{ fontSize: isDesktop ? '22px' : '16px' }}
          >
            Part Status Monitor
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
        
        <i 
          className="text-muted mb-3"
          style={{ fontSize: isDesktop ? '54px' : '38px' }}
        >
          👥
        </i>
        
        <p 
          className="text-muted mb-1 font-inter"
          style={{ fontSize: isDesktop ? '18px' : '15px' }}
        >
          No Part ID scanned yet
        </p>
        <p 
          className="text-muted font-inter"
          style={{ fontSize: isDesktop ? '14px' : '12px' }}
        >
          Scan or pick a barcode image to see status updates
        </p>
      </div>
    );
  }

  const code = scannedCodes[scannedCodes.length - 1];
  const parts = partsMap[code] || [];
  const hasIssues = parts.some(p => p.status.toLowerCase() !== 'ok');

  return (
    <div 
      className="card h-100 d-flex flex-column"
      style={{
        backgroundColor: 'white',
        border: '1px solidrgb(86, 97, 109)',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <div 
        className="d-flex align-items-center justify-content-center"
        style={{
          padding: isDesktop ? '20px 24px' : '16px 20px',
          borderBottom: '1px solid #e9ecef'
        }}
      >
        <i 
          className="text-success me-2"
          style={{ fontSize: '24px' }}
        >
          👥
        </i>
        <span 
          className="fw-bold font-inter"
          style={{ fontSize: isDesktop ? '18px' : '16px' }}
        >
          Parts ID: {code}
        </span>
        <div className="ms-3">
          <span 
            className="px-3 py-1 rounded fw-bold text-white"
            style={{
              backgroundColor: hasIssues ? '#dc3545' : '#28a745',
              fontSize: isDesktop ? '12px' : '11px'
            }}
          >
            {hasIssues ? '⚠ Issues' : 'All OK'}
          </span>
        </div>
      </div>
      
      <div 
        className="flex-grow-1"
        style={{ 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          className="table-responsive flex-grow-1"
          style={{
            overflowY: 'auto',
            maxHeight: '400px'
          }}
        >
          <table className="table mb-0">
            <thead 
              style={{ 
                backgroundColor: '#28a745',
                position: 'sticky',
                top: 0,
                zIndex: 10
              }}
            >
              <tr>
                <th 
                  className="text-white fw-bold font-inter"
                  style={{ 
                    fontSize: isDesktop ? '16px' : '14px',
                    padding: '12px 16px',
                    whiteSpace: 'nowrap',
                    border: '1px solid #28a745',
                    borderBottom: '2px solid #1e7e34'
                  }}
                >
                  Character Name
                </th>
                <th 
                  className="text-white fw-bold font-inter"
                  style={{ 
                    fontSize: isDesktop ? '16px' : '14px',
                    padding: '12px 16px',
                    whiteSpace: 'nowrap',
                    border: '1px solid #28a745',
                    borderBottom: '2px solid #1e7e34'
                  }}
                >
                  Status
                </th>
                <th 
                  className="text-white fw-bold font-inter"
                  style={{ 
                    fontSize: isDesktop ? '16px' : '14px',
                    padding: '12px 16px',
                    whiteSpace: 'nowrap',
                    border: '1px solid #28a745',
                    borderBottom: '2px solid #1e7e34'
                  }}
                >
                  Date
                </th>
                <th 
                  className="text-white fw-bold font-inter"
                  style={{ 
                    fontSize: isDesktop ? '16px' : '14px',
                    padding: '12px 16px',
                    whiteSpace: 'nowrap',
                    border: '1px solid #28a745',
                    borderBottom: '2px solid #1e7e34'
                  }}
                >
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, index) => (
                <tr key={index}>
                  <td 
                    className="font-inter"
                    style={{ 
                      fontSize: isDesktop ? '14px' : '13px',
                      padding: '10px 16px',
                      whiteSpace: 'nowrap',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    {part.characterName}
                  </td>
                  <td 
                    style={{ 
                      padding: '10px 16px',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    <span 
                      className="px-3 py-1 rounded fw-bold font-inter"
                      style={{
                        backgroundColor: part.status.toUpperCase() === 'OK' ? '#d4edda' : '#dc3545',
                        color: part.status.toUpperCase() === 'OK' ? '#28a745' : 'white',
                        fontSize: isDesktop ? '12px' : '11px'
                      }}
                    >
                      {part.status}
                    </span>
                  </td>
                  <td 
                    className="font-inter"
                    style={{ 
                      fontSize: isDesktop ? '14px' : '13px',
                      padding: '10px 16px',
                      whiteSpace: 'nowrap',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    {part.date}
                  </td>
                  <td 
                    className="font-inter"
                    style={{ 
                      fontSize: isDesktop ? '14px' : '13px',
                      padding: '10px 16px',
                      whiteSpace: 'nowrap',
                      border: '1px solid #dee2e6'
                    }}
                  >
                    {part.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MonitorCard;
