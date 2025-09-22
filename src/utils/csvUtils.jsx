export const downloadCsv = (parts) => {
  const buffer = [];
  
  // Add CSV headers
  buffer.push('Character Name,Status,Date,Time');
  
  // Add rows
  parts.forEach(part => {
    const characterName = `"${part.characterName.replace(/"/g, '""')}"`;
    const status = `"${part.status.replace(/"/g, '""')}"`;
    const date = `"${part.date.replace(/"/g, '""')}"`;
    const time = `"${part.time.replace(/"/g, '""')}"`;
    
    buffer.push(`${characterName},${status},${date},${time}`);
  });
  
  const csvData = buffer.join('\n');
  
  // Create and trigger download
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'parts_report.csv';
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
