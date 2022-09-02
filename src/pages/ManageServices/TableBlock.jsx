import Table from '../../components/Table/Table';

const TableBlock = ({ tableTitle, activeSer, columns, activeComId }) => {
  return (
    <>
      <h4 className="service-table-title">{tableTitle}</h4>
      <Table
        columns={columns}
        data={activeSer}
        activeComId={activeComId}
        tableTitle={tableTitle}
      />
    </>
  );
};

export default TableBlock;
