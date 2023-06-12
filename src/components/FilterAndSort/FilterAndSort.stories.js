import { withDesign } from 'storybook-addon-designs';
import FilterAndSort from './index' 

export default{
    title: 'FilterAndSort',
    component: FilterAndSort,
    decorators: [withDesign]
}

const data = [
    {
        "value": "importerDetails",
        "label": "Importer",
        "subFilter": true,
        "level" : "Job",
        'width':'318px',
        "subFilterValues": [
          {
            "parentfield": "Importer",
            "label": "Name",
             'width': 286,
            "value": "customerName",
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Importer",
            "label": "Branch SI.No.",
            "value": "customerBranch",
            'width': 132,
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Importer",
            "label": "ID",
            'width': 132,
            "value": "customerId",
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Importer",
            "label": "IEC",
            "value": "customerIec",
            'width':132,
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Importer",
            "label": "AD Code",
            "value": "customerAdCode",
            "filterType": "textField",
            "level" : "job",
            'width': 132
          }
        ]
      },
      {
        "value": "supplierDetails",
        "label": "Shipper",
        "subFilter": true,
        'width':'318px',
        "level" : "job",
        "subFilterValues": [
          {
            "parentfield": "Shipper",
            "label": "Name",
            "value": "supplierName",
            'width': 286,
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Shipper",
            "label": "Branch SI.No.",
            "value": "supplierBranch",
            'width':133,
            "filterType": "textField",
            "level" : "job"
          },
          {
            "parentfield": "Shipper",
            "label": "ID",
            "value": "supplierId",
            "filterType": "textField",
            'width': 133,
            "level" : "job"
          }
        ]
      },
      {
        "value": "jobCreationDate",
        "label": "Job Date & Time",
        "filterType": "date",
        "level" : "job",
        "width": "413px",
        "height": "154px"
      },
      {
        "value": "cbDetails",
        "label": "CB Branch",
        "subFilter": true,
        "level" : "job",
        'width':'318px',
        "subFilterValues": [
          {
            "parentfield": "CB Details",
            "label": "Search by branch Location",
            "value": "cbBranch",
            'width': 286,
            "filterType": "dropDown",
            "level" : "job"
          },
        ]
      },
      {
        "value": "status",
        "label": "Status",
        "level" : "job",
        "filterType": "dropDown",
        'width': '318px',
        "subFilterValues": [
          {
            "parentfield": "CB Details",
            "label": "Search by Status",
            "value": "cbBranch",
            'width': 286,
            "filterType": "dropDown",
            "level" : "job"
          },
        ]
      },
      {
          "label": "Custom House Code",
          "value": "customsHouseCode",
          "level" : "job",
          "filterType": "dropDown",
           'width': '318px',
          "subFilterValues": [
            {
              "parentfield": "CB Details",
              "label": "Search by Custom House Code",
              "value": "cbBranch",
              "filterType": "dropDown",
              'width': 286,
              "level" : "job"
            },
          ]
        },
        {
          "label": "BE Type",
          "value": "beType",
          "level" : "job",
          "filterType": "dropDown",
          'width': '318px',
          "subFilterValues": [
            {
              "parentfield": "CB Details",
              "label": "Search by BE Type",
              "value": "cbBranch",
              "filterType": "dropDown",
              'width': 286,
              "level" : "job"
            },
          ]
        },
        {
          "value": "beSbDate",
          "label": "Be Date",
          "filterType": "date",
          "level" : "job",
          'width': '413px'
        },
        {
          "label": "Created By",
          "value": "createdBy",
          "level": "job",
          "filterType": "textField",
          'width': '318px',
          "subFilterValues": [
            {
              "parentfield": "CB Details",
              "label": "Search by Port of Landing",
              "value": "cbBranch",
              "filterType": "dropDown",
              'width': 286,
              "level" : "job"
            },
          ]
        },  
]
export const Import = () => <FilterAndSort data = {data[0]}/>
export const Shipper = () => <FilterAndSort data = {data[1]}/>
export const JoinDateTime = () => <FilterAndSort data = {data[2]}/>
export const  CBBranch = () => <FilterAndSort data = {data[3]}/>
export const Status = () => <FilterAndSort data = {data[4]}/>
export const CustomsHouseCode = () => <FilterAndSort data = {data[5]}/>
export const BeType = () => <FilterAndSort data = {data[6]}/>
export const BeDate = () => <FilterAndSort data = {data[7]}/>
export const CreatedBy = () => <FilterAndSort data = {data[8]}/>
Import.parameters = {
  design: {
    type: 'figma',
     url: 'https://www.figma.com/file/LyAv7YIgYP87kQrmqMzBHS/1.-Job-List?type=design&node-id=892-88187&t=QJV8xoDXBbSKt4Vj-4',
  }
}