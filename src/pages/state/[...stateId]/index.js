import BasicTable from "@/components/BasicTable";
import Input from "@/components/Input";
import { useStateContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function index() {
  const router = useRouter();
  const {
    stateId: [name, _stateId],
  } = router.query;
  console.log(name, _stateId);

  const { getConstituencies, constituencyList, addNewConstituency, isElectionCommission } = useStateContext();
  const [newConstituency, setNewConstituency] = useState(null);

  if(!isElectionCommission) return null;

  useEffect(() => {
    getConstituencies(_stateId);
  }, [_stateId]);

  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
  ]

  return (
    <div className="container">
      <h1 className="heading">Constituencies in {name}</h1>
      <form onSubmit={(e) => addNewConstituency(e,_stateId)}>
        <Input
          cb={setNewConstituency}
          value={newConstituency}
          required={true}
          show={true}
          type="text"
          id="constituency"
          name="constituency"
          label="New Constituency Name"
        />
        <button className="primary-btn" type="submit">
          Add
        </button>
      </form>
      {constituencyList && <BasicTable columns={columns} data={constituencyList} />}
    </div>
  );
}

export default index;
