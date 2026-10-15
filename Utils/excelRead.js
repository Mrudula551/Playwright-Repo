import XLSX from 'xlsx'
////to specify which column to read the row and column
export function getCellData(row,column){
    const workbook =XLSX.readFile('Utils/TestData.xlsx')
    const sheet =workbook.Sheets['loginpage']
    //excel to json conversion
    const cellAddress=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1
    })
    const cell=sheet[cellAddress]
    return cell?cell.v:undefined
}
    
