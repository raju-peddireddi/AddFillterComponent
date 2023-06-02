import Menu from './components/Menu/Menu';
import './App.css';


const data = [
  // {
  //   "value": "importerDetails",
  //   "label": "Importer",
  //   "subFilter": true,
  //   "level" : "job",
  //   'width':'318px',
  //   "subFilterValues": [
  //     {
  //       "parentfield": "Importer",
  //       "label": "Name",
  //        'width': 286,
  //       "value": "customerName",
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Importer",
  //       "label": "Branch SI.No.",
  //       "value": "customerBranch",
  //       'width': 132,
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Importer",
  //       "label": "ID",
  //       'width': 132,
  //       "value": "customerId",
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Importer",
  //       "label": "IEC",
  //       "value": "customerIec",
  //       'width':132,
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Importer",
  //       "label": "AD Code",
  //       "value": "customerAdCode",
  //       "filterType": "textField",
  //       "level" : "job",
  //       'width': 132
  //     }
  //   ]
  // },
  // {
  //   "value": "supplierDetails",
  //   "label": "Shipper",
  //   "subFilter": true,
  //   'height':'444px',
  //   'width':'318px',
  //   "level" : "job",
  //   "subFilterValues": [
  //     {
  //       "parentfield": "Shipper",
  //       "label": "Name",
  //       "value": "supplierName",
  //       'width': 286,
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Shipper",
  //       "label": "Branch SI.No.",
  //       "value": "supplierBranch",
  //       'width':139,
  //       "filterType": "textField",
  //       "level" : "job"
  //     },
  //     {
  //       "parentfield": "Shipper",
  //       "label": "ID",
  //       "value": "supplierId",
  //       "filterType": "textField",
  //       'width': 139,
  //       "level" : "job"
  //     }
  //   ]
  // },
  {
    "value": "jobCreationDate",
    "label": "Job Created On",
    "filterType": "date",
    "level" : "job",
    "width": "413px",
    "height": "154px"
  },
  // {
  //   "value": "cbDetails",
  //   "label": "CB Branch",
  //   "subFilter": true,
  //   "level" : "job",
  //   'height':'460px',
  //   "subFilterValues": [
  //     {
  //       "parentfield": "CB Details",
  //       "label": "Search by branch Location",
  //       "value": "cbBranch",
  //       "filterType": "dropDown",
  //       "level" : "job"
  //     },
  //   ]
  // },
  // {
  //   "value": "status",
  //   "label": "Status",
  //   "level" : "job",
  //   "filterType": "dropDown",
  //   'height': '450px',
  //   "subFilterValues": [
  //     {
  //       "parentfield": "CB Details",
  //       "label": "Search by Status",
  //       "value": "cbBranch",
  //       "filterType": "dropDown",
  //       "level" : "job"
  //     },
  //   ]
  // },
  // {
  //     "label": "Custom House Code",
  //     "value": "customsHouseCode",
  //     "level" : "job",
  //     "filterType": "dropDown",
  //     'height':'450px',
  //     "subFilterValues": [
  //       {
  //         "parentfield": "CB Details",
  //         "label": "Search by Custom House Code",
  //         "value": "cbBranch",
  //         "filterType": "dropDown",
  //         "level" : "job"
  //       },
  //     ]
  //   },
  //   {
  //     "label": "Type of BE",
  //     "value": "beType",
  //     "level" : "job",
  //     "filterType": "dropDown",
  //     "height":'450px',
  //     "subFilterValues": [
  //       {
  //         "parentfield": "CB Details",
  //         "label": "Search by BE Type",
  //         "value": "cbBranch",
  //         "filterType": "dropDown",
  //         "level" : "job"
  //       },
  //     ]
  //   },
  //   {
  //     "value": "beSbDate",
  //     "label": "Be Date",
  //     "filterType": "date",
  //     "level" : "job"
  //   },
  //   {
  //     "label": "Created By",
  //     "value": "createdBy",
  //     "level": "job",
  //     "filterType": "textField"
  //   },
]
function App() {
  return (
    <div className="App">
      {data.map(eachItem => {
        if (eachItem.subFilterValues !== undefined){
          return  <Menu data = {eachItem} />
        }
        return <Menu data = {eachItem}/>
     })}
    </div>
  );
}

export default App;
