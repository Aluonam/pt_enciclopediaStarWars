import { Pagination } from 'antd';

const Paginado = ({currentPage,setCurrentPage,totalResults}) => { 
    
    return(
        <Pagination current={currentPage} total={totalResults} pageSize={5} onChange={(e)=>setCurrentPage(e)}/>
    )
}




export default Paginado;