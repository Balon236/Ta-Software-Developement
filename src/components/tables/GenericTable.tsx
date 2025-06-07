import React, { useState } from 'react';
import { Eye, Edit, Trash2, X, Download, Filter } from 'lucide-react';

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'date' | 'number' | 'badge' | 'actions';
  render?: (value: any, row: any) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

export interface TableAction {
  icon: React.ReactNode;
  label: string;
  onClick: (row: any) => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

interface DynamicTableProps {
  data: any[];
  columns?: TableColumn[];
  title?: string;
  searchable?: boolean;
  exportable?: boolean;
  filterable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  actions?: TableAction[];
  onRowClick?: (row: any) => void;
  className?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: any;
  columns: TableColumn[];
}

// Modal Component
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, data, columns }) => {
  if (!isOpen) return null;

  const formatValue = (key: string, value: any, column?: TableColumn) => {
    if (column?.render) {
      return column.render(value, data);
    }
    
    if (column?.type === 'date' && value) {
      return new Date(value).toLocaleDateString();
    }
    
    if (column?.type === 'badge') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      );
    }
    
    return value?.toString() || '-';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="space-y-4">
            {columns
              .filter(col => col.type !== 'actions')
              .map((column) => (
                <div key={column.key} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="font-medium text-gray-700 min-w-[120px]">
                    {column.label}:
                  </div>
                  <div className="text-gray-900 flex-1">
                    {formatValue(column.key, data[column.key], column)}
                  </div>
                </div>
              ))}
          </div>
        </div>
        
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Dynamic Table Component
const DynamicTable: React.FC<DynamicTableProps> = ({
  data = [],
  columns,
  title = "Data Table",
  searchable = true,
  exportable = true,
  filterable = true,
  pagination = true,
  pageSize = 10,
  actions,
  onRowClick,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-generate columns if not provided
  const autoColumns: TableColumn[] = columns || (data.length > 0 
    ? Object.keys(data[0]).map(key => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
        sortable: true
      }))
    : []);

  // Add default actions if none provided
  const tableActions: TableAction[] = actions || [
    {
      icon: <Eye className="w-4 h-4" />,
      label: "View",
      onClick: (row) => {
        setSelectedRow(row);
        setIsModalOpen(true);
      },
      variant: 'primary'
    }
  ];

  // Add actions column
  const finalColumns: TableColumn[] = [
    ...autoColumns,
    {
      key: 'actions',
      label: 'Actions',
      type: 'actions',
      width: 'w-24'
    }
  ];

  // Filter and search data
  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortField) return 0;
    
    const aVal = a[sortField];
    const bVal = b[sortField];
    
    if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = pagination 
    ? sortedData.slice(startIndex, startIndex + pageSize)
    : sortedData;

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const renderCellContent = (row: any, column: TableColumn) => {
    const value = row[column.key];
    
    if (column.type === 'actions') {
      return (
        <div className="flex items-center gap-1">
          {tableActions.map((action, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick(row);
              }}
              className={`p-2 rounded-lg transition-colors ${
                action.variant === 'danger' 
                  ? 'text-red-600 hover:bg-red-50' 
                  : action.variant === 'secondary'
                  ? 'text-gray-600 hover:bg-gray-50'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
              title={action.label}
            >
              {action.icon}
            </button>
          ))}
        </div>
      );
    }

    if (column.render) {
      return column.render(value, row);
    }

    if (column.type === 'date' && value) {
      return new Date(value).toLocaleDateString();
    }

    if (column.type === 'badge') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {value}
        </span>
      );
    }

    return value?.toString() || '-';
  };

  return (
    <div className={`border-brand-200 border bg-white rounded-lg shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-gray-200">
        <div>
          <h2 className="text-base font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            Showing <input type='number' className="ml-2 border border-black w-12 rounded-md px-2" /> entries
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {searchable && (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          
          {filterable && (
            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 text-sm  bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <Filter className="w-4 h-4" />
              Filters
            </button>
          )}
          
          {exportable && (
            <button className="flex items-center gap-2 px-3 py-2 text-gray-700 bg-gray-100 text-sm hover:bg-gray-200 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-brand-50">
            <tr>
              <th> </th>
              {finalColumns.map((column) => (
                
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-brand-500 uppercase tracking-wider ${
                    column.width || ''
                  } ${column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortField === column.key && (
                      <span className="text-blue-600">
                        {sortDirection === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 transition-colors ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick && onRowClick(row)}
              >
                <td className='px-3'>
                  <input type="checkbox"/>
                </td>
                {finalColumns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {renderCellContent(row, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Row Details"
        data={selectedRow}
        columns={autoColumns}
      />
    </div>
  );
};

// Example usage component
export default DynamicTable;