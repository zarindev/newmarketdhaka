import Loading from '../../components/Loading/Loading';
import Table from '../../components/Table/Table';
import { useComTableColumn } from '../../hooks/useComTableColumn';
import { useFilter } from '../../hooks/useFilter';
import { useFind } from '../../hooks/useFind';

const TableBlock = ({ tableTitle }) => {
  const { activeCom } = useFind();
  const activeComId = activeCom.id;
  const { activeSer, serIsLoading } = useFilter('companyInfoId', activeComId);

  const columns = useComTableColumn();

  return (
    <>
      <h4 className="service-table-title">{tableTitle}</h4>
      {serIsLoading ? (
        <Loading color="#ce2d4f" size={115} />
      ) : (
        <Table columns={columns} data={activeSer} activeComId={activeComId} />
      )}
    </>
  );
};

export default TableBlock;
