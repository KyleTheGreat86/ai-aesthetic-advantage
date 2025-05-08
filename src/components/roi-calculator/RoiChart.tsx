
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface RoiChartProps {
  months: string[];
  baselineRevenue: number[];
  improvedRevenue: number[];
}

const RoiChart: React.FC<RoiChartProps> = ({ months, baselineRevenue, improvedRevenue }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy existing chart if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }
        
        // Only show every nth month label to avoid crowding
        const skipFactor = Math.ceil(months.length / 12); // Show ~12 labels maximum
        
        // Create new chart
        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: months,
            datasets: [
              {
                label: 'Baseline Revenue',
                data: baselineRevenue,
                backgroundColor: 'rgba(26, 155, 215, 0.2)', // eagle-blue with opacity
                borderColor: '#1A9BD7', // eagle-blue
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.3
              },
              {
                label: 'Improved Revenue with Reviews & Top 3 Ranking',
                data: improvedRevenue,
                backgroundColor: 'rgba(255, 128, 36, 0.2)', // eagle-orange with opacity
                borderColor: '#FF8024', // eagle-orange
                borderWidth: 3,
                pointRadius: 0,
                tension: 0.3
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: {
                  callback: function(value, index) {
                    // Show only specific labels to avoid crowding
                    if (index === 0 || index === months.length - 1 || index % skipFactor === 0) {
                      return months[index];
                    }
                    return '';
                  },
                  color: '#ffffff'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                }
              },
              y: {
                beginAtZero: false,
                ticks: {
                  callback: function(value) {
                    return '£' + Number(value).toLocaleString();
                  },
                  color: '#ffffff'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                }
              }
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#ffffff'
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.dataset.label + ': £' + Number(context.parsed.y).toLocaleString();
                  }
                }
              }
            }
          }
        });
      }
    }
    
    // Cleanup chart on unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [months, baselineRevenue, improvedRevenue]);
  
  return (
    <div className="mb-6 h-64">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default RoiChart;
