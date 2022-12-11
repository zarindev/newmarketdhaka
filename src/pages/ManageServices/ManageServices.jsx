import "./manageservices.css";

// compoents import
import Loading from "../../components/Loading/Loading";
import SeekerSidebar from "../../components/SeekerSidebar/SeekerSidebar";
import Table from "../../components/Table/Table";

// hooks import
import { useComTableColumn } from "../../hooks/useComTableColumn";
import { useDocTitle } from "../../hooks/useDocTitle";
import { useFilter } from "../../hooks/useFilter";
import { useFind } from "../../hooks/useFind";

const ManageServices = () => {
  useDocTitle();

  const { activeUser } = useFind();
  const activeUserId = activeUser?.userUId;
  const { activeSer, serIsLoading } = useFilter("userUId", activeUserId);

  const columns = useComTableColumn();

  return (
    <div className="service-dash-ctn service-dash-mange-ctn">
      <SeekerSidebar />
      <div className="service-dash approval">
        {serIsLoading ? (
          <Loading color="#ce2d4f" size={115} />
        ) : (
          <Table columns={columns} data={activeSer} />
        )}
      </div>
    </div>
  );
};

export default ManageServices;
