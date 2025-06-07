import AppHeader from "../../layout/AppHeader"
import { Eye, Edit, Trash2 } from 'lucide-react';
import { TableColumn } from "../../components/tables/GenericTable";
import { TableAction } from "../../components/tables/GenericTable";
import DynamicTable from "../../components/tables/GenericTable";
import img from "../../../public/images/user/sample.jpg"

export default function Refered(){

    const sampleData = [
    {
      fullName: "Laurencia Benna Nakova Beatrice",
      school: "Inter Comprehensive High School",
      deferredFrom: "Mandale Beatrice",
      at: "10/05/2001",
      status: "Active"
    },
    {
      fullName: "Wesley Alove Bah Zeb",
      school: "Bilingual Grammar School Mokyo",
      deferredFrom: "Etuge Job",
      at: "10/05/2001",
      status: "Pending"
    },
    {
      fullName: "Bursary Faith Zemetal Benoit",
      school: "Inter Comprehensive High School",
      deferredFrom: "Mandale Beatrice",
      at: "10/05/2001",
      status: "Done"
    }
  ];
 

  const customColumns: TableColumn[] = [
    {
      key: 'fullName',
      label: 'Full Name & Code',
      sortable: true,
      render: (value, row) => (
        <div className="flex gap-4 ">
            <img src={img}/>
            <div>
                <div className="font-medium text-gray-900">{value}</div>
                <div className="text-sm text-brand-500">#{row.school?.slice(0, 3).toUpperCase()}001</div>
            </div>
        </div>
        
      )
    },
    {
      key: 'school',
      label: 'School',
      sortable: true
    },
    {
      key: 'deferredFrom',
      label: 'Deferred From',
      sortable: true
    },
    {
      key: 'at',
      label: 'At',
      type: 'date',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      type: 'badge',
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' :
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {value}
        </span>
      )
    }
  ];

  const customActions: TableAction[] = [
    {
      icon: <Eye className="w-4 h-4" />,
      label: "View",
      onClick: (row) => console.log("View", row),
      variant: 'primary'
    },
    {
      icon: <Edit className="w-4 h-4" />,
      label: "Edit",
      onClick: (row) => console.log("Edit", row),
      variant: 'secondary'
    },
    {
      icon: <Trash2 className="w-4 h-4" />,
      label: "Delete",
      onClick: (row) => console.log("Delete", row),
      variant: 'danger'
    }
  ];

    return(
        <>
        <AppHeader title="Consultant Dashboard" subTitle="View all students refered"/>
        <div className="p-8 bg-white border border-brand-500 min-h-screen overflow-x-auto w-[95%] ">
      <DynamicTable
        title="Refered"
        data={sampleData}
        columns={customColumns}
        actions={customActions}
        searchable={true}
        exportable={true}
        filterable={true}
        pagination={true}
        pageSize={2}
      />
    </div>
        </>
    )

}